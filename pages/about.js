import React, { Component } from "react"
import Link from "next/link"
import "../style.scss"

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Hello, from About page</h1>

        <Link href="/">
          <a>Return to home page</a>
        </Link>
        <br />
        <Link href="/contacts">
          <a>Contacts</a>
        </Link>
      </div>
    )
  }
}

export default About
