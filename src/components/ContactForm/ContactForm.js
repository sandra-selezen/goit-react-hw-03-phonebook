import PropTypes from "prop-types";
import { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Form, ErrorText, FormBox, FormLabel, FormButton } from './ContactForm.styled';
import { RiPhoneFill, RiUserFill, RiUserAddFill } from "react-icons/ri";

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required()
});

const initialValues = {
  name: "",
  number: ""
}

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  }

  nameId = nanoid();
  numberId = nanoid();

  handleSubmit = (values, { resetForm }) => {
    this.setState(values);
    this.props.onSubmit({ ...values, id: nanoid() }); 
    resetForm();
  };

  render() {
    return (
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={this.handleSubmit}>
        <Form autoComplete="off">
          
          <FormLabel htmlFor={this.numberId}><RiUserFill />Name</FormLabel>
          <FormBox>
            <Field name="name" id={this.numberId} placeholder="Enter contact name" />
            <FormError name="name" />
          </FormBox>
          
          <FormLabel htmlFor={this.numberId}><RiPhoneFill />Number</FormLabel>
          <FormBox>
            <Field type="tel" name="number" id={this.numberId} placeholder="Enter contact phone number" />
            <FormError name="number" />
          </FormBox>
          
          <FormButton type="submit"><RiUserAddFill />Add contact</FormButton>
        </Form>
      </Formik>
    )
  }
}

FormError.propTypes = {
  name: PropTypes.string.isRequired,
}