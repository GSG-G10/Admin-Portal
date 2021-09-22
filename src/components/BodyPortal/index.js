import React, { useEffect, useState } from 'react'
import { EmployeeRow } from '../../ui'
import "./style.css"
function BodyPanel() {
    const [employees,setEmployees] = useState([])
    useEffect(()=>{
        const abortController = new AbortController();
        fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
        .then(res => res.json())
        .then(data => {
            setEmployees(data)
        }).catch(error => {
     if(error.name==='AbortError'){
       console.log("aborted");
      }
    });
    return () =>  abortController.abort(); 
    },[])
    return (
            <section className="body-panel">
                <ul className="employee-list">
               {  
                   employees.length?
                    employees.map((employee,index)=>{
                        return <EmployeeRow key={index} employee={employee}/>
                    })
                    :
                    <div className="loader"> Loading ...</div>
                   
                } 
                </ul>
            </section>
    )
}

export default BodyPanel
