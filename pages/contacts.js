import React, { Component } from "react"
import Link from "next/link"
import "../style.scss"

class Contacts extends Component {
  render() {
    return (
      <div>
        <h1>Hello, from Contact page</h1>

        <Link href="/">
          <a>Return to home page</a>
        </Link>
        <br />
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    )
  }
}

export default Contacts
