import React, { Component } from 'react'
import {connect} from 'react-redux'
//import { Redirect } from "react-router-dom";

//import {Constants} from '../../Store/Actions'
class Welcome extends Component {
    componentDidMount(){
      //  this.props.onTryLogin();
       // console.log("Logout [componentDidMount]",this.props);
    }

    render() {

        return  <div>Welcome to this portal </div>

    }
}

const mapStateToProp = state=> {
    return {

    }
}
const mapDispatchToProp = dispatch=> {
    return {
       // onTryLogin: ()=>dispatch({type:Constants.AUTH_LOGOUT}),
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(Welcome)