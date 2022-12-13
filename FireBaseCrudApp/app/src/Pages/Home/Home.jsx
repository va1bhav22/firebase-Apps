import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import "./home.scss"
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
         <Navbar/>
         Home containet=r
      </div>
    </div>
  )
}

export default Home