import React, { Component } from "react"
import Link from "next/link"
import Navbar from "../components/Navbar"
import "../style.scss"

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 className="title">Hello, from About page</h1>
      </div>
    )
  }
}

export default About
