import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Data } from './Data';

const Data = () => {
    const [data, setData] = useState<data>([]);
    

    useEffect(() => {
     axios.get("https://fakestoreapi.com/products")
     .then(d => setData(d.data))
     .then(d => console.log(data))
     .catch(e => console.log(e + "data"));
    }, [])

    return <div>
        {data.map((item)=>{
            return <div className="card container" style={{width:"18rem"}}>
            <img src={item.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.desc}</p>
              <a href="/" className="btn btn-primary">{item.price}</a>
            </div>
          </div>
        })}
    </div>;
}



export default Data;