import React from 'react'
import {withRouter} from 'next/router'

class VerifyEmailPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        An email has been sent please verify
      </div>
    )
  }
}

export default withRouter(VerifyEmailPage)
