import React, { useEffect, useState } from 'react'
import { EmployeeRow } from '../../ui'
import {useStore} from "../../control-data/context"
import "./style.css"
function BodyPanel() {
    // const [employees,setEmployees] = useState([])
    const [{employees},dispatch] = useStore()
    useEffect(()=>{
        const abortController = new AbortController();
        fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
        .then(res => res.json())
        .then(data => {
            dispatch({type:"SET_EMPLOYEES",payload:data})
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
                    employees.map((employee)=>{
                        return <EmployeeRow key={employee.email} employee={employee}/>
                    })
                    :
                    <div className="loader"> Loading ...</div>
                   
                } 
                </ul>
            </section>
    )
}

export default BodyPanel
