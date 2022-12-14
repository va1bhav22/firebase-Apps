import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Width from '../../Components/widget/Width'
import "./home.scss"
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
         <Navbar/>
         <div className="widgts">
          <Width/>
          <Width/>
          <Width/>
          <Width/>

         </div>
      </div>
    </div>
  )
}

export default Home