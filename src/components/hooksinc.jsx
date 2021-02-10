import React,{useState} from 'react'

export default function Hooksinc() {
    const [count,incCount]=useState(5)
    const inc=()=>{
        incCount(count+1)
    }
        const Dec=()=>{
            if(count>0){
            incCount(count-1)
            }
    }
    return (
        <div>
            <h1 style={{background:"orange",color:"white"}}>{count}</h1>
            <button onClick={()=>inc()}>Inc</button>
            <button onClick={()=>Dec()}>Dec</button>
        </div>
    );    
 }
