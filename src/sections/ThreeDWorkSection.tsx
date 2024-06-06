import { Aclaracion } from "../ui/Aclaracion"

//https://www.youtube.com/watch?v=
export const ThreeDSection = ()=>{
    return <div>
        <h4>3D using <a href="https://www.blender.org/" target="_blank">Blender</a>. You can inspect some models on my <a target="_blank" href="https://sketchfab.com/pablobandinopla">Sketchfab</a>. Also visit my <a href="https://www.artstation.com/bandinopla" target="_blank">ArtStation.</a></h4>
        <br/><iframe className="bsha" width="800" height="600"src="https://www.youtube-nocookie.com/embed/KbyhSHsmRDE?si=EnUqdmNVel3nTPXZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <Aclaracion/>
        </div>
}