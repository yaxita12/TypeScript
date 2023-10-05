import React, { useEffect, useState } from 'react'

export default function User() {
    const[data,setData] = useState ([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(y=>y.json())
        .then(y=>{
            setData(y)
        })
    },[])
  return (
    <table>
        {
            data.map((value)=>{
                return(<tr><td>{value.id}</td><td>{value.price}</td><td>{value.description}</td></tr>)
            })
        }
    </table>
  )
}
