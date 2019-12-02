import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "@app/actions"
import { togglePopup } from "../actions";

const AddButton = ({ text, editMovie }) => {
    return (
    <button 
        className='add-button' 
        onClick={() => {togglePopup()}}
    >
        {text}
    </button>
    ) 
}

export default connect(null, actionCreators)(AddButton);