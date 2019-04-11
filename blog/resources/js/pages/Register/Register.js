import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";

import * as actionType from '../../Store/Actions/index';

const errorCls = {
    color:'red',
    textAlign: 'center',
};

class Register extends Component {

    state ={
        formData :{
            name:'',
            password:'',
            password_confirmation:'',
            email:'',

        }
    };

    constructor(props){
        super(props);

    }
    componentDidMount () {

        // console.log('App [componentDidMount] props=',this.props)
    }
    componentDidUpdate(prevProps) {
        //console.log('App [componentDidUpdate] props=',this.props)
    }

    register(event){
        //console.log(event.target.value)
        event.preventDefault();
        this.props.registerUser(this.state.formData)
    }
    updateState(event){
        let fData = {...this.state.formData};

        const type =  event.target.name;

        fData[type] = event.target.value;

        this.setState({formData: fData});

    }

    render() {

        let authRedirect = null;
        if (this.props.isRegistered) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }



        return (
            <div className="row justify-content-center">
                {authRedirect}
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Register</div>
                        {this.props.authError ?  <span style={errorCls}>{this.props.authError}</span> : null}
                        <div className="card-body">
                            <form method="POST" action="" onSubmit={event=>{return this.register(event)}}>
                                <input type="hidden" name="_token" value="" />
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>

                                        <div className="col-md-6">
                                            <input id="name" type="text" className="form-control" name="name" onChange={(event)=>{ return this.updateState(event)}} required="" />

                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                        <div className="col-md-6">
                                            <input id="email" type="email" className="form-control" name="email" onChange={(event)=>{ return this.updateState(event)}} required="" />

                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                                        <div className="col-md-6">
                                            <input id="password" type="password" className="form-control" name="password" onChange={(event)=>{ return this.updateState(event)}} required="" aria-autocomplete="list" />

                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                        <div className="col-md-6">
                                            <input id="password-confirm" type="password" className="form-control" name="password_confirmation" onChange={(event)=>{ return this.updateState(event)}} required="" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button type="submit" className="btn btn-primary">
                                                Register
                                            </button>
                                        </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProp = (state)=>{

    return {
        isAuthenticated : state.authReducer.token !== null,
        isRegistered : state.authReducer.isRegistered,
        authRedirectPath: state.authReducer.authRedirectPath,
        loading: state.authReducer.loading,
        authError: state.authReducer.error,
    }
};

const mapDispatchToProp = (dispatch)=>{
    return {
        registerUser : formdata=>dispatch(actionType.Auth.registerUser(formdata)),

    }
};


export default  connect(mapStateToProp,mapDispatchToProp)(Register);
