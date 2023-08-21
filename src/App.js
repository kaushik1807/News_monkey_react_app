import React, { Component } from "react";
import News from "./Component/News.js";
import "./App.css";
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./Component/Nav.js";
import Footer from "./Component/Footer.js";

export default class App extends Component {
  state = {
    progress: 90
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    // const pageSize;
    // const apiKey = process.env.REACT_APP_NEWS_API;
    return (
      <div className="main">
            <LoadingBar
              color='#f11946'
              progress={this.state.progress}
            />
        <BrowserRouter>
          <Nav />
          <Routes>
          <Route  path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={100} country="in" category="technology" />} />
            <Route  path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={100} country="in" category="Business" />} />
            <Route  path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={100} country="in" category="Entertainment" />} />
            <Route  path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={100} country="in" category="General" />} />
            <Route  path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={100} country="in" category="Health" />} />
            <Route  path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={100} country="in" category="Science" />} />
            <Route  path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={100} country="in" category="Sports" />} />
            <Route  path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={100} country="in" category="Technology" />} />
          </Routes >
        </BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <Footer/>
      </div>
    )
  }
}



// import './App.css';

// import React, { useState } from 'react'
// import NavBar from './Component/Navbar';
// import News from './Component/News';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


// const App = () => {
// const  pageSize = 5;
//  const apiKey = process.env.REACT_APP_NEWS_API

//   const [progress,setProgress] = useState();

//   return (
//     <div>
//       <Router>
//       <NavBar />
//       <LoadingBar
//         height={3}
//         color='#f11946'
//         progress={progress}
//       />
//       <Switch>
//       <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={100} country="in" category="general"/></Route> 
//           <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={100} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={100} country="in" category="entertainment"/></Route> 
//           <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={100} country="in" category="general"/></Route> 
//           <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={100} country="in" category="health"/></Route> 
//           <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={100} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={100} country="in" category="sports"/></Route> 
//       <News  apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />
//       </Switch>
//         </Router>
//     </div>
//   )
// }
// export default App