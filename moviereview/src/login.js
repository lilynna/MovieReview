//import React, { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function login() {
    /*const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();*/
    return (
        <>
            {/*this.state.currentuser && <Router forceRefresh><Redirect to={{ pathname: '/' }} /></Router>*/}
            <div className="container-fluid">
                {/*<div className="row">
                    <div className="header"></div>
                </div>
                <div className="row">
                    <div className="navbar"></div>
    </div>*/}
                <div className="row align-items-center h-100 auth-wrapper mt-5">
                    <div className="auth-inner mx-auto">
                        <form>
                            <h3>Sign In</h3>

                            <div className="form-group">
                                <label className="login">Email</label>
                                <input type="email" className="form-control my-2 px-2 py-1" placeholder="Enter email" required />
                                <div className="text-danger ms-2">{/*this.state.errors.Email*/}</div>
                            </div>

                            <div className="form-group py-2">
                                <label className="login">Password</label>
                                <input type="password" className="form-control my-2 px-2 py-1" id="Password" placeholder="Enter password" required />
                                <div className="text-danger ms-2 mb-2">{/*this.state.errors.Password*/}</div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input align-middle" id="customCheck1" />
                                    <label className="custom-control-label align-middle ms-2" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <div class="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary btn-block btnsubmit py-1">Submit</button>
                            </div>

                            <Router forceRefresh>
                                <p className="ptagsignup text-center pt-3">
                                    Don't have an accout?  <Link to={{ pathname: '/Signup' }} className="loginlink">Sign UP</Link>
                                </p>

                                <p className="text-center pt-2">
                                    <Link className="loginlink"> Forgot password?</Link>
                                </p>
                            </Router>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}