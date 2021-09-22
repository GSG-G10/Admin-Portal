import { H5,H4 } from '../Typography'
import "./style.css";
function ActiveRow({key, activity:{type,msg} }) {
    return (
        <li className="active-row" id={key}>
           <H4>{type}</H4> : <H5>{msg}</H5>
        </li>
    )
}

export default ActiveRow
