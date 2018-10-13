import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import Header from '../../components/Header/Header'
import ShortenerForm from '../../components/ShortenerForm/ShortenerForm'
import Result from '../../components/Result/Result'

import { resetError } from '../../actions/errorActions'

import './Main.scss'

class Main extends Component {
  state = {
    show: false
  }

  componentDidMount() {
    this.setState({ show: true }, () => this.props.resetError())
  }

  render() {
    const { shortUrl, originalUrl } = this.props

    return (
      <CSSTransition
          in={this.state.show}
          timeout={600}
          classNames="drop"
          unmountOnExit
        >
        <div className="main-container">
          
          <Header />
          <ShortenerForm />

          <CSSTransition
            in={ shortUrl.length > 0 }
            timeout={300}
            classNames="result"
            unmountOnExit
          >
            { <Result shortUrl={ shortUrl } originalUrl={ originalUrl } /> }
          </CSSTransition>
        </div>
      </CSSTransition>
    )
  }
}

const mapStateToProps = (state) => {
  const { shortenedUrl: { shortUrl, originalUrl } } = state

  return {
    shortUrl,
    originalUrl
  }
}

export default connect(mapStateToProps, { resetError })(Main)