import React from "react";
import { useSelector, connect } from 'react-redux';
import EditMovie from "./EditMovie";
import * as actionCreators from "@app/actions"

const TextField = ({ id, title, year, hasSeen, isFavourite, togglePopup }) => {
    return (
        <div 
            className='movie-row' 
            onClick={() => {togglePopup(true, id)}}
        >
            <p> {title} </p>
            <p> {year} </p>
            <p> {hasSeen ? '#' : ''} </p>
            <p> {isFavourite ? '*' : ''} </p>
        </div>
    ) 
}

export default connect(null, actionCreators)(TextField);