import React, { Component } from "react"
import Link from "next/link"
import "./Navbar.scss"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <nav>
          <Link href="/">
            <a title="Home Page">Home</a>
          </Link>
          <Link href="/about">
            <a title="About Next JS">About</a>
          </Link>
          <Link href="/contacts">
            <a title="Contacts">Contacts</a>
          </Link>
      </nav>
    )
  }
}

export default Navbar
