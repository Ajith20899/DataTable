import React from 'react';

export const Pagination = (props) => {
    return (
        <div className="PaginationContainer">
            <span className="symbol" onClick={props.backButton}>&laquo;</span>
            <button className="number" onClick={props.next} >{props.numberText+1}</button>
            <button className="number" onClick={props.next} >{props.numberText+2}</button>
            <button className="number" onClick={props.next} >{props.numberText+3}</button>
            {props.numberText === props.lastNumberText-2 ?
            <button className="DotsButton" >22</button> : 
            <button className="DotsButton"  >...</button> }
            <button className="number" onClick={props.last} >{props.lastNumberText+1}</button>
            <span className="symbol" onClick={props.next} >&raquo;</span>
        </div>
    )
} 
