import React,{useLayoutEffect} from 'react'
import { useStore } from '../control-data/context'
import { H4 } from '../ui/Typography'
import { ActiveRow } from '../ui'
export default function Active() {
    const [{activities},dispatch] = useStore();
    useLayoutEffect(() => {
        // there I want fetch previous active before render this page
        dispatch({type:"GET_ACT_LOCALSTORAGE"})
    }, [])
    return (
        <div className="active">
         <H4>Your Activities</H4>
         {
             activities.length?activities.map((activity,index)=><ActiveRow key={index} activity={activity}/>):<H4>No activities</H4>

         }

        </div>
    )
}
