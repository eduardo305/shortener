import React, { Component } from 'react'
import { Formik, Field } from 'formik'
import * as yup from 'yup'

import Input from '../Input/Input.jsx'
import generateShortUrl from '../../actions/generateShortUrl'
import Messages from '../../util/Messages'

class ShortenerForm extends Component {
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
              .url(Messages.invalidUrl)
              .required(Messages.emptyUrl),
          }
        )}
        onSubmit={ async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          
          const result = await generateShortUrl(values.url)

          if (result) {
            this.props.handleResult(result.data)
          }

          setSubmitting(false)
        }}
      >
        {
          props => {
            const {
              handleSubmit
            } = props
            return (
              <div className="shortener-form">
                <form onSubmit={handleSubmit}>
                  <Field
                    name="url"
                    component={Input}
                    placeholder="What url you want to get shortened?"
                  />
                </form>
              </div>
            )
          }
        }
      </Formik>
    )
  }
}

export default ShortenerForm
