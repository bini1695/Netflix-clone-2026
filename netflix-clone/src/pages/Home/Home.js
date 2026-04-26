import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner  from '../../components/banner/banner'
import RowList  from '../../components/rows/RowList/RowList'

function Home() {
  return (
    <div>
    <Header/>
    <Banner/>
    <RowList/>
    <Footer/>
  </div>
  )
}

export default Home;
