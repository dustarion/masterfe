import React from 'react'
import {withRouter} from 'next/router'

class EmailVerifiedPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        Thanks for verifying your email!
      </div>
    )
  }
}

export default withRouter(EmailVerifiedPage)
