import React, { Component,createRef } from 'react'

export default class UncontrolledLogin extends Component {
    _onForm = createRef()
    handleFormSubmission = (e) => {
        e.preventDefault()
       const username = e.target.elements.username.value
        const password = e.target.elements.password.value
        const remember = e.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }
    componentDidMount() {
        this._onForm.current.focus()
    }
    render() {
    return (
        <div>
            <form onSubmit={this.handleFormSubmission}>
            <input type="text" name='username' ref={this._onForm} />
            <input type="password" name='password' />
            <input type="checkbox" name='remember' />
            <button type='submit' >Login</button>
            <button type='reset'>Reset</button>
            </form>
      </div>
    )
  }
}