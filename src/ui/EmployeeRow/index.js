import React from 'react'
import { H5,H4 } from '../Typography'
import "./style.css";
function EmployeeRow({key, employee:{first,last,created,balance} }) {
    return (
        <li className="employee-row" id={key}>
            {/* avater empolyee , date , name , balance , tools */}
            <div className="employee-row-avatar">
                 <img src={`https://robohash.org/{${first } || elham}.png`} alt="avater" /> 
            </div>
            <H5 className="employee-row-date">
                {created}
            </H5>
            <H5 className="employee-row-name">
               {first} {last}
            </H5>
            <H4 className="employee-row-balance">
                {balance}
            </H4>
            <div className="employee-row-tools">
                
            </div>
        </li>
    )
}

export default EmployeeRow
