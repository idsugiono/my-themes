import React from "react"
import {Link} from "gatsby"
export default function Header() {
  return <div>
    <h1> blog percobaan </h1>
    <div>
        <nav>
            <ul>
                <li> 
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/blog">blog</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
                
            </ul>
        </nav>
    </div>
    </div>
}
