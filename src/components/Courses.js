import React, { Component } from 'react';
import NavLink from './NavLink';
import { Match, Redirect } from 'react-router';

import CourseContainer from './courses/CourseContainer';
import CourseList from '../data/courses';

const Courses = ({ pathname }) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${pathname}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${pathname}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${pathname}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>

    <Redirect to={`${pathname}/html`} />
    <Match pattern={`${pathname}/html`} render={ () => <CourseContainer data={CourseList.HTML} /> } />
    <Match pattern={`${pathname}/css`} render={ () => <CourseContainer data={CourseList.CSS} /> } />
    <Match pattern={`${pathname}/javascript`} render={ () => <CourseContainer data={CourseList.JS} /> } />
  </div>
);

export default Courses;