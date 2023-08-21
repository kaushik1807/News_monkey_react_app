import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-2 align-items-center fixed-top">
            <a class="navbar-brand font-italic" href="#"><h3>NewsMonkey</h3></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item d-sm-flex' id='linav'>
                        <Link className="nav-link active p-2" to="/business">Business</Link>
                        <Link className="nav-link active p-2" to="/entertainment">Entertainment</Link>
                        <Link className="nav-link active p-2" to="/general">General</Link>
                        <Link className="nav-link active p-2" to="/health">Health</Link>
                        <Link className="nav-link active p-2" to="/science">Science</Link>
                        <Link className="nav-link active p-2" to="/sports">Sports</Link>
                        <Link className="nav-link active p-2" to="/technology">Technology </Link>
                    </li>
                </ul>
                {/* <form classsName="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                </form> */}
            </div>
        </nav>
        // <div className=''>
        //     <ul className='navbar-nav mr-auto'>
        //         <li className='nav-item d-flex mx-3'>
        //             <Link className="nav-link active" to="/home">Home</Link>
        //             <Link className="nav-link active" to="/business">business</Link>
        //             <Link className="nav-link active" to="/entertainment">entertainment</Link>
        //             <Link className="nav-link active" to="/general">general</Link>
        //             <Link className="nav-link active" to="/health">health</Link>
        //             <Link className="nav-link active" to="/science">science</Link>
        //             <Link className="nav-link active" to="/sports">sports</Link>
        //             <Link className="nav-link active" to="/technology">Technology </Link>
        //         </li>
        //     </ul>
        // </div>
    )
}
