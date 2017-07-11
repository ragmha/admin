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
  }
  render() {
    return (
      <CourseForm
        allAuthors={[]}
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
  return {
    course: course
  };
}

ManageCourse.propTypes = {
  course: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
