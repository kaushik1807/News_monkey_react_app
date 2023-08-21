import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  // static defaultProps = {
  //   category: "sport",
  //   page: 1,
  //   country: "in",
  //   pageSize:2,
  // }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    var url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fee737d5cbde46ce83f0fc91f368c7e5&pageSize=${this.props.pageSize}`;
    var Afetch =await fetch(url);
    var parse =await Afetch.json();
    this.setState({
      articles:this.state.articles.concat(parse.articles),
      totalResults: parse.totalResults,
      loading:false
    });
  }

  async updateNews() {
    this.props.setProgress(90);
    var url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fee737d5cbde46ce83f0fc91f368c7e5&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    var Afetch = await fetch(url);
    var parse = await Afetch.json();
    this.setState({
      articles: parse.articles,
      totalResults: parse.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }
  articles = [];

  constructor() {
    super();   //to use this keyword we have to use super()
    // console.log("this  is constracture");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      navtitle: "Home",
      totalResults: 0
    };
  }
  async componentDidMount() {
    // console.log("component did mount");
    this.updateNews();
  }

  render() {
    return (
      <div className="container my-5">
        {/* <h4 className="text-center my-5 text-danger pt-5">Own By Kaushik Shamajibhai Bhikadiya</h4> */}
        <h1 className="font-weight-bold pt-5" id="h2news" >NewsMonkey - {this.props.category}</h1>   
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row my-4">
            {this.state.articles.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <br />
                  <NewsItem
                    title={!e.title ? " " : e.title.slice(0, 40)}
                    description={!e.description ? " " : e.description.slice(0, 80)}
                    imgUrl={e.urlToImage}
                    newsUrl={e.url}
                    date={e.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

// import React, {useEffect, useState} from 'react'

// import NewsItem from './NewsItem'
// import Spinner from './Spinner'
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

// const News = (props)=>{
//     const [articles, setArticles] = useState([ ])
//     const [loading, setLoading] = useState(true)
//     const [page, setPage] = useState(1)
//     const [totalResults, setTotalResults] = useState(0)
//     // const [progress, setProgress] = useState(0)
//     // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    
//     const capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     } 

//     const updateNews = async ()=> {
//         // props.setProgress(10);
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fee737d5cbde46ce83f0fc91f368c7e5&page=${page}&pageSize=${props.pageSize}`; 
//         setLoading(true)
//         let data = await fetch(url);
//         // props.setProgress(30);
//         let parsedData = await data.json()
//         // props.setProgress(70);
//         setArticles(parsedData.articles)
//         setTotalResults(parsedData.totalResults)
//         setLoading(false)
//         // props.setProgress(100);
//     }

//     useEffect(() => {
//         updateNews(); 
//     }, [])
 

//     const fetchMoreData = async () => {   
//         setPage(page+1) 
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fee737d5cbde46ce83f0fc91f368c7e5&page=${page}&pageSize=${props.pageSize}`;
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         setArticles(articles.concat(parsedData.articles))
//         setTotalResults(parsedData.totalResults)
//       };
 
//         return (
//             <div>
//                 <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
//                 {loading && <Spinner />}
//                 <InfiniteScroll
//                     dataLength={articles.length}
//                     next={fetchMoreData}
//                     hasMore={articles.length !== totalResults}
//                     loader={<Spinner/>}
//                 > 
//                     <div className="container">
                         
//                     <div className="row">
//                         {articles.map((element) => {
//                             return <div className="col-md-4" key={element.url}>
//                                 <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                             </div>
//                         })}
//                     </div>
//                     </div> 
//                 </InfiniteScroll>

//             </div>
//         )
    
// }


// News.defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general',
// }

// News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
// }

// export default News