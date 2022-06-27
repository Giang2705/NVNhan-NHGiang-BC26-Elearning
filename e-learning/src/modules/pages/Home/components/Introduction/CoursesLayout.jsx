import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap';
import Courses from './CourseItem/Courses';
import {connect} from 'react-redux'
import Axios from 'axios'

class CoursesLayout extends Component {
  render() {
    return <section>
        <Container>
           <Row>
            <h1 className='text-center'>List of Courses</h1>
            {
                this.props.coursesList.map((item, index) => (
                    <Col lg='3'>
                        <Courses item ={item} />
                    </Col>
                ))
            }   
           </Row>
        </Container>
    </section>
  }

  componentDidMount(){
    Axios({
        method: 'GET',
        url: 'https://elearning0706.cybersoft.edu.vn//api/QuanLyKhoaHoc/LayDanhSachKhoaHoc',
    })
    .then((res) => {
        this.props.dispatch({
            type: 'FETCH_COURSES',
            payload: res.data
        })
    })
    .catch((error) => {
        console.log(error);
    })
  }
}

const mapStateToProps = state => ({
    coursesList: state.course.courses
})

export default connect(mapStateToProps)(CoursesLayout);
