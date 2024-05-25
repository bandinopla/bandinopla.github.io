import { Aclaracion } from "../ui/Aclaracion"

export const GameDevSection = () => {
    return <div>
        <h4>Games done with <a href="https://unity.com" target="_blank">Unity</a> and <a href="https://wikipedia.org/wiki/Adobe_Flash" target="_blank">Adobe Flash</a>. For the web, PC & Mobile (Android)</h4>
        <iframe className="bsha" width="800" height="600" src="https://www.youtube-nocookie.com/embed/7MJ25NuHhFc?si=2k9io77JOxX6Gx4X" title="YouTube video player" 
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <Aclaracion/>
    </div>
}