import React, { Component } from 'react'
import './Courses.css'

export default class Courses extends Component {
  render() {
    return <section>
           <div className="card p-2 m-2">
              <div className="card-img">
                <img src= {this.props.item.hinhAnh} style = {{width:'100%', height: 200}} />
              </div>
              <div className="card-content mt-3" style={{height: 200}}>
                <p className='courseName'>Course: {this.props.item.tenKhoaHoc}</p>
                <p className='creator'>Creator: {this.props.item.nguoiTao.taiKhoan}</p>
                <p className='number'>Number of students: {this.props.item.soLuongHocVien}</p>
              </div>
              <button className='btn btn-success'>Read More</button>
           </div>
    </section>
  }
}
