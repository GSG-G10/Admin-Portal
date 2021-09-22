import React from 'react'
import {H1} from "../../ui/Typography"
import {Button} from "../../ui"
import "./style.css"
function HeaderHome() {
    return (
        <div className="header-home">
            <H1>
              Admin Portal
            </H1>
            <Button className="btn-primary" >New Employee </Button>
        </div>
    )
}

export default HeaderHome
