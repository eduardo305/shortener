import React, { Component } from 'react'
import { Formik, Field } from 'formik'
import * as yup from 'yup'

import Input from '../Input/Input.jsx'
import axios from 'axios'

class ShortenerForm extends Component {

  onSubmitSuccess = (message, submitCallbackObject) => {
    submitCallbackObject.setSubmitting(false)
    submitCallbackObject.resetForm()
  }

  onSubmitError = submitCallbackObject => {
    submitCallbackObject.setSubmitting(false)
  }

  render() {
    return (
      <Formik
        initialValues={{
          url: '',
        }}
        validationSchema={yup.object().shape(
          {
            url: yup
              .string()
              .url('Please provide a valid URL. Tip: Check to see if you informed the http protocol')
              .required('A valid URL is required'),
          }
        )}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true)

          console.log(axios.get('http://localhost:5000/api/v1/shortener'))

          console.log('values: ', values)
        }}
      >
        {props => {
          const {
            handleSubmit
          } = props
          return (
            <div className="shortener-form">
              <form onSubmit={handleSubmit}>
                <Field
                  name="url"
                  component={Input}
                  placeholder="Url"
                />
              </form>
            </div>
          )
        }}
      </Formik>
    )
  }
}

export default ShortenerForm
