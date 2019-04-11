import React from 'react'

import Header from '../Header/Header';
import Footer from '../Footer/Footer'

export default function Layout(props) {
    console.log("object", props)
  return (
    <div id="Layout">
    <Header auth = {props.auth}></Header>
    <main className="py-4">{props.children}</main>
    <Footer></Footer>
      
    </div>
  )
}
