import React, { Component } from "react"
import Link from "next/link"
import Navbar from "../components/Navbar"
import "../style.scss"

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Hello, from Home page</h1>
      </div>
    )
  }
}

export default Home
