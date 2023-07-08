import React from 'react'
export default function RankingButton(props){

    return(
        <button key={props.id} onClick={props.handleChoice} >{props.value}</button>
    )

}