import React, { Component } from "react"
import Link from "next/link"
import "../style.scss"

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello, from Home page</h1>
        <Link href="/contacts">
          <a>Contact</a>
        </Link>
        <br />
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    )
  }
}

export default Home
