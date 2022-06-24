import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Courses from './components/Introduction/Courses'
import SignUpArea from './components/SignUpArea/SignUpArea'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignUpArea />
        <Courses />
        <Footer />
      </div>
    )
  }
}
