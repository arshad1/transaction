import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom";

import {Constants} from '../../Store/Actions'
 class Logout extends Component {
    componentDidMount(){
        this.props.onTryLogout();
       console.log("Logout [componentDidMount]",this.props);
       }

  render() {
    
    return  <Redirect from="/" to="/"></Redirect>
    
  }
}

const mapStateToProp = state=> {
    return {
        
    }
}
const mapDispatchToProp = dispatch=> {
    return {
        onTryLogout: ()=>dispatch({type:Constants.AUTH_LOGOUT}),
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(Logout)