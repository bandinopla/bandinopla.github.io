
import classes from './MouseIcon.module.css'

export const MouseIcon = ({ type }:{ type:"move"|"pan"|"zoom"})=>{
    return <div className={classes.mouse+" "+classes[type]}>
        <div className={classes.LMB}></div>
        <div className={classes.MMB}></div>
        <div className={classes.RMB}></div>
    </div>
}