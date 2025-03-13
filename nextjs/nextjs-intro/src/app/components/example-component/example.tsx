"use client"

import { useEffect } from "react"

//spa single page application, component tree
//props => properties


interface ExampleProps {

    name:string;
    surname:string;
    onClick? :(message:string) => void;

}



export default function Example(props:ExampleProps){

    console.log(props);


    return (
    <div>Merhaba {props.name} {props.surname} 
        <button onClick={
            () => props.onClick ? props.onClick(`Merhaba ${props.name}`) : null
            }>
            Selamlar
        </button>
    </div> 
    )

}