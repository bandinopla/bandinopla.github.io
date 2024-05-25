const stack = [
    {
        category:"Coding Languages",
        tools:[
            ["https://www.typescriptlang.org/","Typescript"],
            ["https://developer.mozilla.org/es/docs/Web/JavaScript","Javascript"],
            ["https://learn.microsoft.com/en-us/dotnet/csharp/","C# (w/Unity)"],
            ["https://www.python.org/","~Python"],
            ["https://dart.dev/","~Dart"],
            ["https://kotlinlang.org/","~Kotlin"],
            ["https://www.php.net/","PHP"]
        ]
    },
    {
        category:"DB related",
        tools: [
            ["https://en.wikipedia.org/wiki/SQL","Structured Query Language (SQL)"],
            ["https://www.mysql.com/","MySQL"],
            ["https://www.prisma.io/","(ORM) Prisma"], 
            ["https://www.apollographql.com", "NodeJS - Apollo Client & Server"],
            ["https://www.php.net/manual/en/intro.pdo.php","PHP's PDO"]
        ]
    },
    {
        category:"Backend frameworks",
        tools: [
            ["https://expressjs.com/", "NodeJS - Express"],
            ["https://nextjs.org/","NodeJS - NextJS"],
            ["https://symfony.com/", "PHP - Symfony"], 
        ]
    },
    {
        category:"Comunication protocols",
        tools: [
            ["https://graphql.org/","Graphql"],
            ["https://en.wikipedia.org/wiki/REST","REST"],
            ["https://en.wikipedia.org/wiki/JSON","JSON"],
            ["https://en.wikipedia.org/wiki/SOAP","XML / SOAP"]
        ]
    },
    {
        category:"JS Bundlers",
        tools: [
            ["https://create-react-app.dev/","CRA"],
            ["https://vitejs.dev/","Vite"],
            ["https://svelte.dev/","Svelt"], 
            ["https://webpack.js.org/","WebPack"],
            ["https://rollupjs.org/","Rollup"],
            ["https://esbuild.github.io/","ESbuild"]
        ]
    },
    {
        category:"Library / Framework",
        tools: [
            ["https://react.dev/","React"],
            ["https://reactnative.dev/","React Native"],
            ["https://flutter.dev/","Flutter"],
            ["https://angular.io/", "Angular"],
            ["https://ionicframework.com","Ionic"],
            ["https://svelte.dev/","Svelte"],
            ["https://jquery.com/","jQuery"],
            ["https://threejs.org/","THREEjs"],
            ["https://docs.pmnd.rs/react-three-fiber", "React Three Fiber"]
        ]
    },
    {
        category:"Styles",
        tools: [
            ["https://tailwindcss.com/", "Tailwindcss"],
            ["https://sass-lang.com/","Sass"],
            ["https://postcss.org/","PostCSS"],
            ["https://lesscss.org/","Less"],
            ["https://mui.com/","Material UI"],
            ["https://react-bootstrap.netlify.app/","React Bootstrap"]
        ]
    },
    {
        category:"Other",
        tools:[
            ["https://git-scm.com/","Git"],
            ["https://www.docker.com/","Docker"],
            ["https://www.blender.org/","Blender"],
            ["https://unity.com/","Unity"],
            ["https://www.adobe.com/es/products/substance3d-painter.html","Substance Painter"],
            ["https://marvelousdesigner.com/","Marvelous Designer"],
            ["https://www.clo3d.com/","CLO 3D"],
            ["https://www.adobe.com/ar/products/animate.html","Animate"]
        ]
    }
]

export const StackToolsSection = ()=>{
    return <div style={{ fontSize:"1em"}}>
        <h1>Tools I'm familiar with:</h1>

        <div style={{ columns:3, columnGap:30}}>
        {
            stack.map((category, i)=><div key={i} style={{marginBottom:20}}>
                <h3 style={{ marginTop:0}}>{category.category}</h3>
                <div style={{ borderLeft:"1px dotted #ccc", paddingLeft:10 }}>
                    { category.tools.map( (tool,j)=><div key={j}>
                        <a href={tool[0]} target="_blank">{tool[1]}</a>
                    </div>)}
                </div>
            </div>)
        }
        </div>
    </div>
}