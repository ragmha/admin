import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../actions/course";

class Courses extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {
        title: ""
      }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const { course } = this.state;
    course.title = event.target.value;
    this.setState({ course });
  }

  onClickSave() {
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow(course, index) {
    return (
      <div key={index}>
        {course.title}
      </div>
    );
  }

  render() {
    debugger;
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input type="submit" onClick={this.onClickSave} value="Save" />
      </div>
    );
  }
}

Courses.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

// state is within our redux store
function mapStateToProps(state, ownProps) {
  debugger;
  return {
    courses: state.courses // this is named in the reducer
  };
}

export default connect(mapStateToProps)(Courses);
