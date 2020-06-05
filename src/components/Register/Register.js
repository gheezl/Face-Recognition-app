import React, { Fragment } from 'react';


class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            userName: "",
        }
    }

    onEmailSubmit = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordSubmit = (event) => {
        this.setState({ password: event.target.value })
    }

    onFirstNameSubmit = (event) => {
        this.setState({ firstName: event.target.value })
    }

    onLastNameSubmit = (event) => {
        this.setState({ lastName: event.target.value })
    }

    onUserNameSubmit = (event) => {
        this.setState({ userName: event.target.value })
    }

    onRegister = () => {
        const { email, password, firstName, lastName, userName } = this.state;
        fetch("https://guarded-crag-24920.herokuapp.com/register", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Email: email,
                Password: password,
                FirstName: firstName,
                LastName: lastName,
                Username: userName
            })
        })
            .then(response => response.json())
            .then(user => {
                console.log(user)
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange("home")
                }
            })
    }


    render() {
        const { onRouteChange } = this.props
        return (
            <Fragment>
                <p className="center f4">
                    Create an account to access the face recognition app
                </p>
                <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
                    <main className="pa4 black-80">
                        <div className="measure">

                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f4 fw6 ph0 mh0 grow">Create your account</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input onChange={this.onEmailSubmit} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input onChange={this.onPasswordSubmit} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">First Name</label>
                                    <input onChange={this.onFirstNameSubmit} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Last Name</label>
                                    <input onChange={this.onLastNameSubmit} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">User Name</label>
                                    <input onChange={this.onUserNameSubmit} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                                </div>
                            </fieldset>
                            <div className="">
                                <input onClick={this.onRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                            </div>
                            <div className="lh-copy mt3">
                                <p onClick={() => onRouteChange("signIn")} href="#0" className="f6 link dim black db pointer">Sign in</p>
                            </div>
                        </div>
                    </main>
                </article>
            </Fragment>
        )
    }

}

export default Register;