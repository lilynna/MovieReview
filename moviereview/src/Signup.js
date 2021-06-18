import React from 'react';
//import React, { useState, useEffect } from 'react';
//import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Signup() {

    return (
        <>
            {/*this.state.currentuser && <Router forceRefresh><Redirect to={{ pathname: '/' }} /></Router>*/}
            <div className="container-fluid">
                <div className="row align-items-center h-100 create-wrapper my-5">
                    <div className="create-inner mx-auto">
                        <form>
                            <h3 className="text-left">Create Your Account</h3>
                            <div className="createtext">Please fill in this form to create an account!</div>

                            <div className="form-group">
                                <label className="create">UserName</label>
                                <input type="text" className="form-control my-2 px-2 py-1" placeholder="Enter UserName" required />
                            </div>

                            <div className="form-group py-2">
                                <label className="create">Email</label>
                                <input type="email" className="form-control my-2 px-2 py-1" placeholder="Enter email" required />
                            </div>

                            <div className="form-group py-2">
                                <label className="create">Password</label>
                                <input type="password" className="form-control my-2 px-2 py-1" placeholder="Enter password" required />
                            </div>

                            <div className="form-group py-2">
                                <label className="create">Confirm Password</label>
                                <input type="password" className="form-control my-2 px-2 py-1" id="confirm" placeholder="Enter password" required />
                                <div className="text-danger ms-2">{/*this.state.errors.ConfirmPass*/}</div>
                            </div>


                            <div class="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary btntitle btn-block btnsubmit py-2">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}