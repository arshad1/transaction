import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom";

import * as actionType from '../../Store/Actions/index';

const errorCls = {
  color:'red',
    textAlign: 'center',
};
class Login extends Component {
    state={

        formData :{
            email:'',
            password:''
        }
    };

    componentDidMount () {
        // this.props.onTryAutoSignup();
        this.props.onClearRedirect();
        // console.log('App [componentDidMount] props=',this.props)
    }
    componentDidUpdate(prevProps) {
        //console.log('App [componentDidUpdate] props=',this.props)
    }

    login(event){
       //console.log(event.target.value)
        event.preventDefault();
           this.props.reqstLogin(this.state.formData.email,this.state.formData.password)
    }

    updateState(event){
          let fData = {...this.state.formData};

        const type =  event.target.name;

        fData[type] = event.target.value;

        this.setState({formData: fData});

    }

    render() {


        console.log('this.props.authError',this.props.authError);
        let authRedirect = null;
        if (this.props.isAuthenticated) {
            console.log("redirecting issue");
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

        let authError = null;
        if (this.props.authError) {
            authError = <span>his.props.authError</span>
        }

        return (
            <div className="row justify-content-center">
            {authRedirect}
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Login</div>
                        {this.props.authError ?  <span style={errorCls}>{this.props.authError}</span> : null}
                        <div className="card-body">
                            <form method="POST" onSubmit={event=>{return this.login(event)}}>
                                <input type="hidden" name="_token" value="" />
                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                        <div className="col-md-6">
                                            <input id="email" type="email" className="form-control" name="email"  required="" onChange={(event)=>{ return this.updateState(event)}}/>

                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                                        <div className="col-md-6">
                                            <input id="password" type="password" className="form-control" name="password" required="" onChange={(event)=>{ return this.updateState(event)}} />

                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-md-6 offset-md-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="remember" id="remember" />

                                                    <label className="form-check-label" >
                                                        Remember Me
                                                    </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button className="btn btn-primary" type="submit">
                                                Login
                                            </button>


                                            <a className="btn btn-link" href="/reset">
                                                Forgot Your Password?
                                            </a>
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
    console.log(state);
return{
    isAuthenticated : state.authReducer.token !== null,
    authRedirectPath: state.authReducer.authRedirectPath,
    loading: state.authReducer.loading,
    authError: state.authReducer.error,
}
};

const mapFunToProp=(dispatch)=>{
   return {
       reqstLogin: (email,pass)=>dispatch(actionType.Auth.Authenticate(email,pass)),
       onClearRedirect : ()=>dispatch({type: actionType.Constants.CLEAR_AUTH_REGISTER_REDIRECT})
   }
};

export default  connect(mapStateToProp,mapFunToProp)(Login);
