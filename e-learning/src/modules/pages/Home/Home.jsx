import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CoursesLayout from './components/Introduction/CoursesLayout'
import SignUpArea from './components/SignUpArea/SignUpArea'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignUpArea />
        <CoursesLayout />
        <Footer />
      </div>
    )
  }
}
