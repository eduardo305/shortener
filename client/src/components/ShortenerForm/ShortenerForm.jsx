import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik, Field } from 'formik'
import * as yup from 'yup'

import Input from '../Input/Input.jsx'
import generateShortUrl from '../../actions/generateShortUrl'
import resetResults from '../../actions/resetResults'
import { resetError } from '../../actions/errorActions'
import Messages from '../../util/Messages'

export class ShortenerForm extends Component {
  resetError = () => this.props.resetError()

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
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)
          
          this.props.resetResults()
          this.props.generateShortUrl(values.url)

          setSubmitting(false)
        }}
      >
        {
          props => {
            const {
              handleSubmit,
            } = props
            
            return (
              <div className="shortener-form">
                <form onSubmit={handleSubmit}>
                  <Field
                    name="url"
                    component={Input}
                    placeholder="What long URL is bothering you?"
                    onKeyDown={ this.resetError }
                  />
                </form>

                { this.props.error.error && <div>{ this.props.error.error }</div>}

              </div>
            )
          }
        }
      </Formik>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps, { 
  generateShortUrl,
  resetError,
  resetResults
})(ShortenerForm)
