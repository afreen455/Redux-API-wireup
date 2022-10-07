import { connect } from "react-redux";

import App from "../App";

import {bindActionCreators} from "redux";

import { getData } from "../actions/Action";

 

const mapStatetoprops = (state) => {

    console.log("container", state)

    return {

        fetch_data: state.values.data,

        error_values: state.values.error,

    };

};

 

const mapDispatchtoProps = (dispatch) => {

   

    return bindActionCreators(

        {

            getData,

        },

        dispatch

    );

};

 

export default connect(mapStatetoprops,mapDispatchtoProps)(App);