import React from 'react'
import styles from './ButtonStyle.module.css'
export const Button = (props) => {
    console.log(props)
    return (

        <>
            <button style={{ width: props.width, padding: props.padding, borderRadius: props.borderRadius, backgroundColor: props.backgroundColor, color: props.color, border: props.border, padding: "12px 30px", cursor: "pointer", fontSize: "15px" }}>{props.
                children
            }</button>
        </>
    )
}
