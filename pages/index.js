import React from "react"
import dynamic from "next/dynamic"
import Navbar from "../components/Navbar"

const Home = dynamic(() => import("./home"), {
  loading: () => <div>loading...</div>
})

const App = () => (
  <div>
    <Home />
  </div>
)

export default App
