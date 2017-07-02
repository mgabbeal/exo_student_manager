import React from "react";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import {Field, SubmissionError, reduxForm} from "redux-form";
import {PageHeader, Form} from "react-bootstrap";
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";

// Add Student/edit page component
export class StudentEdit extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // bind <this> to the event method
    this.formSubmit = this
      .formSubmit
      .bind(this);
  }

  // render
  render() {
    const {student, handleSubmit, error, invalid, submitting} = this.props;
    return (
      <div className="page-student-edit">
        <PageHeader>{(student.id
            ? 'Edit'
            : 'Add') + ' Student'}</PageHeader>
        <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
          <Field
            component={FormField}
            name="firstName"
            label="First Name"
            doValidate={true}/>
          <Field
            component={FormField}
            name="lastName"
            label="Last Name"
            doValidate={true}/>
          <FormSubmit
            error={error}
            invalid={invalid}
            submitting={submitting}
            buttonSaveLoading="Saving..."
            buttonSave="Save Student"/>
        </Form>
      </div>
    );
  }

  // submit the form
  formSubmit(values) {
    const {dispatch} = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'STUDENTS_ADD_EDIT',
        student: {
          id: values.id || 0,
          firstName: values.firstName,
          lastName: values.lastName
        },
        callbackError: (error) => {
          reject(new SubmissionError({_error: error}));
        },
        callbackSuccess: () => {
          dispatch(push('/'));
          resolve();
        }
      });
    });
  }
}

// decorate the form component
const StudentEditForm = reduxForm({
  form: 'student_edit',
  validate: function (values) {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'firstName is required';
    }
    if (!values.lastName) {
      errors.lastName = 'lastName is required';
    }
    return errors;
  }
})(StudentEdit);

// export the connected class
function mapStateToProps(state, own_props) {
  const student = state
    .students
    .find(x => Number(x.id) === Number(own_props.params.id)) || {};
  return {student: student, initialValues: student};
}
export default connect(mapStateToProps)(StudentEditForm);
