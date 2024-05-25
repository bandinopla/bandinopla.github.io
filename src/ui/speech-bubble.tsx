
import classes from './speech-bubble.module.css'

export function SpeechBubbleUI({ tooltip, onClick }:{ tooltip:string, onClick:()=>void }) {
    return <div className={classes.bubble+" rubik-font"} onClick={onClick}>
        {tooltip}
    </div>
}