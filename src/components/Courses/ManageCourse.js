import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/course";
import CourseForm from "./CourseForm";

class ManageCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };

    this.updateCourseState = this.updateCourseState.bind(this);
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({ course: course });
  }

  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        course={this.state.course}
        errors={this.state.errors}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  let course = {
    id: "",
    watchHref: "",
    title: "",
    authorId: "",
    length: "",
    category: ""
  };

  const authors = state.authors.map(author => ({
    value: author.id,
    text: `${author.firstName}  ${author.lastName}`
  }));

  return {
    course: course,
    authors: authors
  };
}

ManageCourse.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
