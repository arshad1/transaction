import React, { Component } from 'react';
import { Route,Switch,Redirect,withRouter,NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout'
import appRoutes from './Routes/basicRouter'


class App extends Component {
    componentDidMount () {
        // this.props.onTryAutoSignup();
         console.log('App [componentDidMount] props= chatApp.js',this.props)
    }
    componentDidUpdate(prevProps) {
        console.log('App [componentDidUpdate] chatApp.js')

    }
    render() {


// const Pagerouter =  Routes.forEach(function (a,b) {
//
// });

    return (
            <div >
              
              <Layout auth={this.props.isAuthenticated}>
                <Switch>

                    {appRoutes.map((prop, key) => {
                        if (prop.redirect)
                            return <Redirect from={prop.from} to={prop.to} key={key} />;
                        if (prop.exact)
                            return <Route path={prop.path} exact component={prop.component} key={key} />;
                        return <Route path={prop.path} component={prop.component} key={key}  />;
                    })}


                </Switch>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => { 
    //console.log('tate.authReducer.token',state.authReducer.token +'!=='+ null)
   // let token = state.authReducer.token;
    return {
      isAuthenticated : state.authReducer.token !== null,
      // isAuthenticated: (token== 'null' || token== null) ? false : true,
      expires_in: state.authReducer.expires_in
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onTryAutoSignup: () => dispatch(  {type: actionTypes.AUTH_SUCCESS} )
    };
  };

  

export default  connect(mapStateToProps,mapDispatchToProps)(App);
