import React, { Component } from 'react';
import Course from './Course';

class CourseContainer extends Component {
  render() {
    let courseList = this.props.data;
    let courses = courseList.map((course) => {
      return <Course title={course.title}
                     desc={course.description}
                     img={course.img_src}
                     key={course.id} />
    }); 
    return (
      <div>
        <ul>
          {courses}    
        </ul>
      </div>
    );
  }
}

export default CourseContainer;