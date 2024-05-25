import React from "react"

const Block = ({ title, img, children }:{title:string, img:string, children:React.ReactNode })=>{
    return <div style={{clear:"both", margin:"2px 0" }}>
        <img src={"/img"+img} alt={title} style={{ float:"left", padding:10}} height={100}/>
        <h3 style={{paddingTop:5, marginBottom:0}}><span style={{color:"#C0E533", fontSize:30}}>✔</span> {title}</h3>
        <div style={{color:"#999"}}>
        {children}
        </div>
    </div>
}


export const SkillsSection = ()=>{
    return <div style={{ maxWidth:"50%", fontSize:"0.9em"}}>
        <h1>For the web, I can do:</h1> 

        <Block title="Static responsive websites" img="/static-websites.jpg">
            Websites that use and show data that doesn't change and addapt to the size of the screen.
        </Block> 

        <Block title="Dynamic websites / SaaS" img="/dynamic-websites.jpg">
            Websites that build themselves on-demand using data from a database or another third party service. Also websites that hold a state with contextual data or provide tools/services on demand based on conditional parameters.
        </Block> 

        <Block title="UX/UI" img="/ui.jpg">
            Design and development of intuitive user interfaces, smooth data flow from widget to widget or step to step in a complex process. Make the final user's interaction's experience easyer and faster.
        </Block> 

        <Block title="Design / Mockup-to-html"  img="/design.jpg">
            Design and convertion of mockups to html of websites and applications.
        </Block> 

        <Block title="Apps"  img="/app.jpg">
            Actual applications running on the browser. Data state management and plugin type architectures to allow multiple modules to coexist inside of a common environment.
        </Block>

        <Block title="Data Integration"  img="/db.jpg">
            Data intergation from third party service providers, normalization and process of it to comform to a desired data model. For example, search engines or data aggregators.
        </Block>
    </div>
}