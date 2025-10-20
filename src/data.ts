export const $with = {
    r3f: {
        url:"https://r3f.docs.pmnd.rs/"
    },
    js: {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    react: {
        url: "https://react.dev/"
    },
    preact: {
        url: "https://preactjs.com/"
    },
    cannones: {
        url: "https://github.com/pmndrs/cannon-es"
    },
    blender: {
        url: "https://www.blender.org/"
    },
    graphql: {
        url: "https://graphql.org/"
    },
    apollo: {
        url: "https://www.apollographql.com/"
    },
    node: {
        url: "https://nodejs.org/"
    },
    mysql: {
        url: "https://www.mysql.com/"
    },
    three: {
        url: "https://threejs.org/"
    },
    csharp: {
        url: "https://learn.microsoft.com/en-us/dotnet/csharp/"
    },
    unity: {
        url: "https://unity.com/"
    },
    python: {
        url: "https://www.python.org/"
    },
    typescript: {
        url: "https://www.typescriptlang.org/"
    },
    shaders: {
        url: "https://thebookofshaders.com/"
    },
    npm: {
        url: "https://www.npmjs.com/"
    },
    flash: {
        url: "https://www.adobe.com/products/flash.html"
    },
    as3: {
        url: "https://en.wikipedia.org/wiki/ActionScript"
    },
    mediapipe: {
        url: "https://ai.google.dev/edge/mediapipe/solutions/guide"
    },
    ai: {
        url: "https://en.wikipedia.org/wiki/Artificial_intelligence"
    }
}

export const porfolio = [
    {
        id: "wxr",
        title: "Weight For Reps",
        what: "website / Social"
        , links: [
            {
                url: "https://weightxreps.net/",
                name: "Website"
            },
            {
                url: "https://github.com/bandinopla/weightxreps-client",
                name: "Front-end repo"
            },
            {
                url: "https://github.com/bandinopla/weightxreps-server",
                name: "Back-end repo"
            },
            {
                url: "https://github.com/bandinopla/weightxreps-server/blob/main/docs/OAUTH.md",
                name: "OAuth Server"
            }
        ]
        , youtube: "https://www.youtube.com/watch?v=vRCtVyGCZ5k"
        , tools: [$with.react, $with.js, $with.graphql, $with.apollo, $with.node, $with.mysql]
        , desc: `Online training journals. You can join, create an account and start logging your workouts and get useful stats and charts.
        Runing since 2011.`
        , did: "The entire site's coding, design, front and backend, content, idea and maintanance."
    },
    {
        id: "bandijoystick",
        title: "BandiJoystick.js",
        what: "Library / npm"
        , links: [
            {
                url: "https://bandijoystickjs.web.app/",
                name: "Website"
            }, 
			{
                url: "https://github.com/bandinopla/bandijoystick",
                name: "Repo"
            }, 
        ]
        , youtube: "https://www.youtube.com/watch?v=RfvawPnfTcI"
        , tools: [$with.preact, $with.typescript, $with.npm]
        , desc: `Turn a phone into a remote controller No apps. No installations. Just scan & play!`
        , did: "The wrapper library around trystero and distributed it as an NPM package to allow developers to integrate it into their web apps easily. Also the site, promo videos, demos, etc..."
    },
    {
		id:"aethelgard",
		title:"Aethelgard",
		what:"Game Mechanics",
		youtube: "https://www.youtube.com/watch?v=4MGq9mOy3aY",
		links:[
			{
				url:"https://sketchfab.com/3d-models/aethelgard-2a9c9e6bd99c4349ac6f6d80795192fc",
				name:"Character model"
			},
			{
				url:"https://x.com/bandinopla/status/1974902877601829154",
				name:"Batch Instancing: grass field"
			},
			{
				url:"https://x.com/bandinopla/status/1972710914223923236",
				name:"Character re-design"
			},
			{
				url:"https://x.com/bandinopla/status/1971141644130058604",
				name:"ThreeJs Pull Request"
			},
			{
				url:"https://x.com/bandinopla/status/1968382449572024753",
				name:"Cutscene mechanic"
			},
			{
				url:"https://x.com/bandinopla/status/1966653163831701976",
				name:"Particle effects"
			},
			{
				url:"https://x.com/bandinopla/status/1964407916653617551",
				name:"New map: the cave"
			},
			{
				url:"https://x.com/bandinopla/status/1964103771471958123",
				name:"Adding Orcs"
			},
			{
				url:"https://medium.com/@pablobandinopla/frame-callbacks-in-three-js-recreating-flashs-addframescript-with-animationclips-5ccc713bbb6e",
				name:"Article: frame callbacks"
			},
			{
                url: "https://x.com/bandinopla/status/1963720015594545263",
                name: "Decimating to get 60FPS"
            },
			{
                url: "https://x.com/bandinopla/status/1962204827187855414",
                name: "Skeleton instancing"
            },
			{
                url: "https://x.com/bandinopla/status/1961894480795062581",
                name: "Added god's rays"
            },
			{
                url: "https://x.com/bandinopla/status/1961200142230466619",
                name: "Level Blockout"
            }
		],
		tools: [ $with.typescript, $with.three, $with.blender ],
		desc: `A serie of RPG game mechanics that would encompass a game: point and click to move. Skill system. Weapon and inventory system. Particle system. Cutscene system. Enemy AI system. Environment optimization. Entity profile system ( describin units in a configuration array and spawning them using just a key )`,
		did:"From the coding to the 3d work, the entire pipeline to produce the mechanics and gameplay of what a simple RPG would require, the basic functionality."
	},
    {
        id: "pip",
        title: "P.I.P: Skull Demo",
        what: "Brower game",
        youtube: "https://www.youtube.com/watch?v=RlODeS0Gc0o",
        links: [
            {
                url: "https://bandinopla.github.io/pip-skull-demo",
                name: "Play the game now!"
            },
            {
                url:"https://medium.com/@pablobandinopla/generating-texture-atlases-for-optimized-assets-63fd7a04021f",
                name:"Article: Optimizing using Texture Atlases"
            },
            {
                url: "https://x.com/bandinopla/status/1902267156386988270",
                name: "First Tweet!"
            }
        ],
        desc: `"Planetary Interstelar Pioneer: Skull Demo" is a threejs browser game, the 2nd release of this "fantasy" game I made about the protagonist now having to deal with a giant skeleton entity that attempts to stop her from completing her mission. Runs in the browser.`
        , tools: [$with.typescript, $with.three, $with.cannones, $with.blender]
        , did: "Character design, modeling, rigging, texturing, modeling, animations, asset optimization, sound editing."
    },
		
    {
        id:"robot",
        title:"Meet Mira",
        what:"Interactive storytelling",
        youtube:"https://www.youtube.com/watch?v=Xlzzamhx4mg",
        desc:"Fantasy site showcasing a new Unitree's Robot model that allows to plug in and switch silicone human-like bodyparts to re-skin it to make it look less robotic.",
        links: [
            {
                name:"Online Live Demo",
                url:"https://bandinopla-unitree.vercel.app/"
            },
            {
                name:"Article where I explain how I did this",
                url:"https://medium.com/@pablobandinopla/scroll-driven-presentation-in-threejs-with-gsap-a2be523e430a"
            },
            {
                name:"ArtStation | Renders",
                url:"https://www.artstation.com/artwork/8BdZmx"
            },
            {
                name:"Download/Inspect Android Model",
                url:"https://sketchfab.com/3d-models/meet-mira-84a9713b68e74e4888979ac60a6868fb"
            },
            {
                name:"Unitree's G1 Model",
                url:"https://www.unitree.com/g1"
            }
        ],
        tools: [$with.typescript, $with.three, $with.r3f, $with.blender],
        did:"Character design, modeling, rigging, texturing, optimization, website, coding."
    }, 
	{
        id:"astro",
        title:"Astro Materials 3D",
        what:"Virtual library / NASA Data",
        youtube:"https://www.youtube.com/watch?v=Pz_lYFEMw0Y",
        desc:"My take on NASA's Astromaterials 3D virtual library. Developed a real-time volumetric data visualization tool using raymarching to render 3D models from NASA’s X-ray computed tomography (CT) data. Implemented an interactive intensity-based filtering system to isolate and analyze internal geological structures.",
        links: [
            {
                name:"Online Live Demo",
                url:"https://bandinopla-astromaterials-3d.vercel.app/"
            },
            {
                name:"Astro Materials 3D",
                url:"https://ares.jsc.nasa.gov/astromaterials3d"
            }, 
            {
                name:"Article talking in depth about this technique",
                url:"https://medium.com/@pablobandinopla/raymarching-a-better-way-to-explore-nasas-x-ray-scans-with-threejs-a114a6bee9e7"
            }
        ],
        tools: [$with.typescript, $with.three, $with.preact, $with.blender],
        did:"Visualization, Coding"
    },
    {
        id: "pip0",
        title: "P.I.P: Demo 1",
        what: "Unity / Game",
        youtube: "https://www.youtube.com/watch?v=5n9dcODcoJU",
        desc: `"Planetary Interstelar Pioneer: #1" is a Unity game demo about an abstronaut that finds herself abandoned by HQ in the middle of space.`,
        links: [
            {
                name: "video: Gameplay",
                url: "https://www.youtube.com/watch?v=n74e3-JQP1k"
            },
            {
                name: "Download an play (PC)",
                url: "https://bandinopla.itch.io/pionera-interestelar-planetaria"
            },
            {
                name: "video: Cutscene: Giant Monster entrance",
                url: "https://www.youtube.com/watch?v=SgfHl50V7b0"
            },
            {
                name: "video: Environment test",
                url: "https://www.youtube.com/watch?v=yoAuwKGiclI"
            }, {
                name: "video: Characters design",
                url: "https://www.youtube.com/watch?v=vgw8XFRWPrE"
            },
            {
                name: "video: Cutscene",
                url: "https://www.youtube.com/watch?v=R0Mtr-u5Cv0"
            },
            {
                name: "video: First teaser",
                url: "https://www.youtube.com/shorts/Q75kZXxInko"
            },
            {
                name: "video: Gameplay teaser",
                url: "https://www.youtube.com/shorts/mZ4B80DLnJQ"
            }
        ]
        , tools: [$with.csharp, $with.unity, $with.blender]
        , did: "Character design, modeling, rigging, texturing, animations, asset optimization, sound editing."
    }
    , { // 
        id: "hope2",
        title: "Hope2 (WIP)",
        what: "Game (WIP)",
        youtube: "https://www.youtube.com/watch?v=7YMku2MIY4Q",
        desc: `Fantasy 2nd part of "Hope" a game I did for a Jam. Playing with the idea of making this a sequel...`,
        links: [
            {
                name: "Camera test",
                url: "https://x.com/bandinopla/status/1932372996385063109"
            },
            {
                name: "Charatcer designs and updates",
                url: "https://blenderartists.org/t/hope-2/1596993"
            },
            {
                name: "Portal shader test",
                url: "https://x.com/bandinopla/status/1934674112825217246"
            },
            {
                name: "Playing with mirrors",
                url: "https://x.com/bandinopla/status/1936141981979197650"
            }
        ],
        did: "WIP. Game idea in which I'm working on. Doing all, from level to characters, textures, animations, shaders, coding, etc...",
        tools: [$with.typescript, $with.three, $with.blender]
    },
    { // https://www.artstation.com/artwork/Le5vKR
        id: "vampire",
        title: "Vampire Lady",
        what: "Concept to 3D",
        cover: "img/vampire.jpg",
        desc: "Vampire lady is a 3D port of an original 2D concept by Serge Birault",
        links: [
            {
                name: "ArtStation pics",
                url: "https://www.artstation.com/artwork/Le5vKR"
            },
            {
                name: "Live model (Sketchfab)",
                url: "https://sketchfab.com/3d-models/vampire-lady-4f6ab7f19615474293c9f43d47cd6817"
            }
        ]
        , tools: [$with.blender]
        , did: "Character modeling, texturing, posing, based on a sketch concept art."
    }
    ,
    { // 
        id: "rig",
        title: "Physics Rigger",
        what: "Addon + Library Package",
        youtube: "https://www.youtube.com/watch?v=RtO2KUH9Vig",
        desc: "Blender addon + NPM Pakcage to easily design physics rigs in blender and use them in ThreeJs with Cannon-es so indie devs can prototype interactive 3D games without writing physics glue code saving hours of work.",
        links: [
            {
                name: "Git repo (addon + source)",
                url: "https://github.com/bandinopla/threejs-cannones-rigger"
            },
        ]
        , tools: [$with.typescript, $with.three, $with.python, $with.blender, $with.cannones]
        , did: "Coded the python addon to create a custom panel inside of Blender's UI to easily setup properties to define Physical objects once exported and improted into Three using the provided class to parse the scene."
    },

    {
        id: "fluid",
        title: "Fluid/Smoke Simulator",
        what: "Library Package",
        youtube: "https://www.youtube.com/watch?v=tjaH322hQdc",
        desc: "Made a class to easily implement fluid/smoke simulation vía a texture shader. Offered in both WebGL(GLSL) and WebGPU(TSL)",
        links: [
            {
                name: "Git repo (source code)",
                url: "https://github.com/bandinopla/threejs-fluid-simulation"
            },
            {
                name: "Online demo",
                url: "https://threejs-fluid-simulation.vercel.app"
            }
        ],
        tools: [$with.typescript, $with.three, $with.shaders],
        did: "Ported a serie of multi pass shaders from vanilla js/GLSL to ThreeJs shading system, and packed it in a way that it is easily usable by others."
    }
    ,

    { // https://www.artstation.com/artwork/el52Nw
        id: "lara",
        title: "Young Lara",
        what: "Full Character Pipeline",
        youtube: "https://www.youtube.com/watch?v=OXWi8kfhe4c",
        desc: "Young Lara ( Tomb Raider 4 ) - Game ready. 1 material, all textures baked. Low poly! This model is free to download",
        links: [
            {
                name: "Download the model",
                url: "https://www.artstation.com/marketplace/p/rrbKA/young-lara-croft-tomb-raider-4"
            },
            {
                name: "ArtStation post (more pics and videos)",
                url: "https://www.artstation.com/artwork/el52Nw"
            },
            {
                name: "Live model (Sketchfab)",
                url: "https://sketchfab.com/3d-models/young-lara-croft-tomb-raider-4-3683b756078947e28c61cb3b06b7c37d"
            }
        ],
        tools: [$with.blender],
        did: "Design, modeling, texturing, rigging, animation of the model. Exported and game ready.",
    },
    {
        id: "claw",
        title: "Physics Claw Machine",
        what: "Physics driven mechanic",
        cover: "img/claw.jpg",
        desc: "Clam Mahcine simulator using a physics engine in threejs in the brower.",
        links: [
            {
                name: "Play it here!",
                url: "https://threejs-claw-machine.vercel.app/"
            },
            {
                name: "Tweet w/video",
                url: "https://x.com/bandinopla/status/1951060739667755027"
            }
        ],
        tools: [$with.typescript, $with.blender, $with.r3f, $with.three, $with.cannones]
        , did: "3D Asset integration and conditioning. Physics rig. Coding and re-texturing."
    }

    ,

    { //https://www.miniplay.com/game/days-of-blood
        id: "dob",
        title: "Days of Blood",
        what: "Game",
        youtube: "https://www.youtube.com/watch?v=_z0joE_1zQU",
        desc: "Defense game. You play a brave knight that has to save the young woman tied up about to be sacrificed to the evil gods of some crazy monks. For this game I got the help from voice actors to put their voices to the characters.",
        links: [
            {
                url: "https://www.newgrounds.com/portal/view/603125",
                name: "Play it now!"
            }
        ],
        did: "Concept, 2D Graphis, animations, effects, coding. Voices were done by voice actors."
        , tools: [$with.flash, $with.as3]
    },
    { // https://github.com/bandinopla/quick_flipbook
        id: "flip",
        title: "Quick Flipbook",
        what: "Library Package",
        cover: "img/flipbook.gif",
        desc: "Library to create a flipbook with threejs",
        links: [
            {
                name: "Git Repo",
                url: "https://github.com/bandinopla/quick_flipbook"
            },
            {
                name: "NPM Package",
                url: "https://www.npmjs.com/package/quick_flipbook"
            }
        ],
        did: "Coded an npm package to easily allow users to implement a flip-book mechanic."
        , tools: [$with.typescript, $with.three]
    }
    , { // 
        id: "body",
        title: "Exercise visualization",
        what: "Interactive exercie's enciclopedia",
        cover: "img/body.jpg",
        desc: "The goal is to show to people not gym savvy how a few barbell movements can help you get fit without complications.",
        links: [
            {
                name: "Visit the app",
                url: "https://body.weightxreps.net"
            },
            {
                name: "First tweet",
                url: "https://x.com/bandinopla/status/1881641423898092002"
            }
        ]
        , did: "3D Model, texture, rigging and animation. Coding."
        , tools: [$with.typescript, $with.three]
    }
    , { // 
        id: "hand",
        title: "Hand Controlled Camera",
        what: "Hand driven camera control",
        desc: "Coded a camera movement that is controlled by the hand gestures using Gogole's MediaPipe.",
        links: [
            {
                name: "Video demo",
                url: "https://x.com/bandinopla/status/1917927590834155788"
            },
            {
                name:"Article explaining how I did it",
                url:"https://medium.com/@pablobandinopla/use-hand-gestures-to-control-three-js-99842d66e8ad"
            }
        ],
        did: "3D Asset integration and coding.",
        tools: [$with.typescript, $with.blender, $with.three, $with.mediapipe]
    }
    , { // 
        id: "gta",
        title: "Sketchbook Mod",
        what: "Library modification",
        desc: "Modded Jan Bláha's Sketchbook replacing and adding some models to get a GTA vibe from it...",
        links: [
            {
                name: "Video demo",
                url: "https://x.com/bandinopla/status/1920538684559880498"
            },
            {
                name: "Sketchbook",
                url: "https://github.com/swift502/Sketchbook"
            }
        ],
        did: "Integrated new external assets respecting and following the mechanics for cars/doors and characters."
        , tools: [$with.js, $with.three, $with.blender]
    }
    , { // https://www.youtube.com/watch?v=tDGo3d1fFe0
        id: "ps1",
        title: "Half-Evil Eternal",
        what: "Programatic Animation pipeline",
        desc: "Combined characters from Playstation 1 games into a single universe and animated them using ThreeJs and triggering actions vía code.",
        youtube: "https://www.youtube.com/watch?v=tDGo3d1fFe0",
        links: [
            {
                name: "Tweet #1",
                url: "https://x.com/bandinopla/status/1921494542517252200"
            },
            {
                name: "Part #2",
                url: "https://x.com/bandinopla/status/1925256512471011791"
            },
            {
                name: "Video: Part #2",
                url: "https://www.youtube.com/watch?v=BxTL-rwNDiI"
            }
        ],
        did: "Rigged and conditioned the original game assets and level. Coded the animation as to be played like a cutscene, following time cues and triggering actions vía code. Sync with audio. Audio generation with AI."
        , tools: [$with.typescript, $with.three, $with.blender, $with.ai]
    }

    , {
        id: "monkey",
        title: "Black Myth: Spyro ",
        what: "Programatic Animation pipeline",
        desc: "Used a higher polygon character alons with Wiggle Bones to animate the feathers. Was testing how it would look when more details are renderer. Voices done with AI",
        youtube: "https://www.youtube.com/watch?v=lGiWQSD1S4Y",
        links: [
            {
                name: "Tweet with video",
                url: "https://x.com/bandinopla/status/1922782400834077051"
            }
        ],
        did: "Interated AAA charatcer model, had to re-texture and rig the characters. Animation. Voices cloned with AI."
        , tools: [$with.typescript, $with.three, $with.ai, $with.blender]
    }
    , {
        id: "silent",
        title: "Silent Hill",
        what: "Mechanic demo / BVH Collisions",
        desc: "Trying to emulate the resident evil vibe from Playstation 1 but with a better flashlight",
        cover: "img/silent.jpg",
        links: [
            {
                name: "Tweet with video demo",
                url: "https://x.com/bandinopla/status/1926428457883312490"
            },
            {
                name:"Article explaining how I did it",
                url:"https://medium.com/@pablobandinopla/collision-detection-in-threejs-made-easy-using-bvh-1ce6012199e8"
            }
        ],
        did: "Integrated real game assets from PS1 games, rigged them. Coded the mechanic to emulate a resident evil vibe. Used three-bvh for collisions.",
        tools: [$with.typescript, $with.three, $with.blender]
    }
    , { // https://www.youtube.com/watch?v=R9H40iq6gSw
        id: "mickey",
        title: "Left 4 Reaver",
        what: "Animation",
        youtube: "https://www.youtube.com/watch?v=R9H40iq6gSw",
        desc: "Fantasy cutscene. Animating in ThreeJs, using characters from known games.",
        links: [
            {
                name: "Tweet w/video",
                url: "https://x.com/bandinopla/status/1926951742974927320"
            }
        ],
        did: "Intergated real game assets, rigged them and animated them to be played as a cutscene in threejs. For the Raziel model I had to re-texture him a bit."
        , tools: [$with.blender, $with.typescript, $with.three]
    }

    , {
        id: "trystero",
        title: "Multiplayer",
        what: "ThreeJs + trystero",
        cover: "img/trystero.jpg",
        links: [
            {
                name: "Live demo",
                url: "https://bandinopla-trystero.web.app/"
            },
            {
                name: "Tweet w/video",
                url: "https://x.com/bandinopla/status/1927816079612461441"
            },
            {
                name:"Article explaining how I did it",
                url:"https://medium.com/@pablobandinopla/effortless-serverless-multiplayer-in-three-js-with-trystero-f025f31150c6"
            },
            {
                name: "Trystero",
                url: "https://github.com/dmotz/trystero"
            }
        ],
        desc: "Testing Trystero: Trystero manages a clandestine courier network that lets your application's users talk directly with one another, encrypted and without a server middleman."
        , did: "Implemented a library meant to connect users vía P2P with no central server as an experiment and hooked it into a 3D visualization using three."
        , tools: [$with.typescript, $with.three]
    }


    , { // 
        id: "hope",
        title: "Hope",
        what: "Game",
        youtube: "https://www.youtube.com/watch?v=d9qMRH_9i1k",
        desc: "Game done for a JAM done in a few hours...",
        links: [
            {
                name: "Play it now!",
                url: "https://hopewillfindyou.web.app/"
            },
            {
                name: "Submission entry",
                url: "https://threejsjam.com/submission/15"
            },
            {
                name: "Tweet w/video",
                url: "https://x.com/bandinopla/status/1928394541633081824"
            }
        ],
        did: "3D asset creation and quick prototype of this game for a Jam.",
        tools: [$with.typescript, $with.three, $with.blender]
    }
    
    , { //  | 
        id: "dna",
        title: "Local Dna Aligner",
        what: "Demo",
        cover: "img/dna.jpg",
        desc: "DNA alignment browser tool! Local Nucleotide Sequence Aligner using Smith-Waterman, Visualized with threej Reads FASTA files."
        , links: [
            {
                name: "Play the demo!",
                url: "https://threejs-local-dna-sequence-aligner.vercel.app/"
            },
            {
                name: "Tweet",
                url: "https://x.com/bandinopla/status/1945566889800782309"
            }
        ],
        did: "Coded the tech demo",
        tools: [$with.typescript, $with.three]
    }
    , { // https://github.com/bandinopla/threejs-cannones-rigger
        id: "dl",
        title: "World Record (600k+ views)",
        what: "Animation",
        youtube: "https://www.youtube.com/watch?v=RoVTx8-dCms",
        desc: "Blender animation of a guy breaking a world record. I made the model, textures, rig, animations, etc... not the background. "
        , did: "3D Modeling, texturing, rigging, animation, render. Texture of his skin is also animated.",
        tools: [$with.blender]
    }
    , { // 
        id: "retopo",
        title: "Blender Scene",
        what: "Retopology + Baking",
        cover: "img/blender.jpeg",
        desc: "Retopology + Texture baking of Blender 2.78 and Blender 2.81 splash screens for a Jam",
        links: [
            {
                name: "Live model (sketchfab)",
                url: "https://sketchfab.com/3d-models/blender-cover-remix-a38f11890ff141c88fcdac6b637fdaf8"
            },
            {
                name: "Jam Entry (Log + Progress pics)",
                url: "https://blenderartists.org/t/finished-wip-log-junk-shop-renderman/1400567"
            }
        ]
        , did: "Retopology of high polygon models, then texture baking on all channels. Models exported to sketchfab.",
        tools: [$with.blender]
    }
    , {
        id: "cu",
        title: "Bullzara",
        what: "Concept",
        cover: "img/bull.jpg",
        desc: "Stylized 3D character design of a character made by Bullzara",
        links: [
            {
                name: "ArtStation ( pics and videos )",
                url: "https://www.artstation.com/artwork/xDrNQR"
            }
        ]
        , did: "3D Modeling, cloth simulation, posing, rendering.",
        tools: [$with.blender]
    }

    , {
        id: "ducks",
        title: "Lucky Duckies",
        what: "Flash / Game",
        youtube: "https://www.youtube.com/watch?v=efibch1xEws",
        desc: `Avoidance game. You must guide momma duck to the other side of the road without getting killed, obviously... and trying to make all the little duckies do it without being turned into tomato salsa.`,
        links: [
            {
                name: "Play it here",
                url: "https://gamejolt.com/games/lucky-duckies/31468"
            }
        ]
        , did: "3D Models, texture, animation. Coding and exported to Android vía Adobe Air.",
        tools: [$with.blender, $with.flash, $with.as3]
    }
    ,
    {
        id: "kam",
        title: "Knights&Magic",
        what: "Flash / Game",
        desc: "2D Strategy game where you have to place units as enemy units walk along a path...",
        youtube: "https://www.youtube.com/watch?v=Ub88d1hcnHA"
        , did: "2D characters and animations. Coding.",
        tools: [$with.flash, $with.as3]
    },
    {
        id: "canicas",
        title: "Canicas",
        what: "Flash / Game",
        youtube: "https://www.youtube.com/watch?v=N0xV2ZuBPDI",
        desc: `Game inspired by "puzzle bubble". Throw the balls trying to match them. Some balls have special powers.`,
        links: [
            {
                name: "Play it here",
                url: "https://www.flashgamesplayer.com/free/canicas/play.html"
            }
        ]
        , did: "2D Assets, animations, coding.",
        tools: [$with.flash, $with.as3]
    }
    , {
        id: "runny",
        title: "Runny",
        what: "Unity / Game",
        desc: `Short game inspired by Google's T‑Rex Runner. Mixing elements from Super Mario characters. Done in unity and exported to android.`
        , youtube: "https://www.youtube.com/watch?v=RC_exIUPLWc"
        , did: "3D modeling, texture, animation. 2D illustrations (background) and composition. Coding.",
        tools: [$with.blender, $with.unity]
    },

    {
        id: "tetris",
        title: "Idiot Tetris",
        what: "Flash / Game",
        youtube: "https://www.youtube.com/watch?v=BKqcl3QQWEQ",
        desc: `A tetris with a twist... bascially you sort this little kid's thoughts by completing the lines`,
        links: [
            {
                url: "https://www.newgrounds.com/portal/view/339067",
                name: "Play it here"
            }
        ]
        , did: "2D Assets and animation. Coding.",
        tools: [$with.flash, $with.as3]
    },
]

