import React, { Component } from "react"
import Link from "next/link"
import Navbar from "../components/Navbar"
import "../style.scss"

class Contacts extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Hello, from Contact page</h1>
      </div>
    )
  }
}

export default Contacts
