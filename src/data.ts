import { Category, type MediaItem } from "./types";

export const MOCK_DATA: MediaItem[] = [
  // ─── Libraries ──────────────────────────────────────────────────────
  {
    id: "lone-falcon",
    title: "Lone Falcon",
    category: Category.Concept,
    thumbnailUrl: "/lone-falcon/cover.jpg",
    heroCoverUrl: "/lone-falcon/cover.jpg",
    gallery: [
      { url: "/lone-falcon/1.jpg" },
      { url: "/lone-falcon/2.jpg" },
      { url: "/lone-falcon/3.jpg" },
      { url: "/lone-falcon/4.jpg" },
    ],
    youtubeVideoUrl: "https://www.youtube.com/watch?v=-Ujc6cCwHBo",
    shortDescription: "Exploring the look and feel of a space combat game",
    longDescription:
      "This concept sequence focuses on mood, movement, and visual direction rather than gameplay mechanics. It demonstrates a rapid prototyping workflow, transforming an initial idea into a playable prototype to evaluate visual appeal, interaction flow, and the potential viability of gameplay concepts.",

    links: [
      {
        caption: "Lone falcon",
        url: "https://x.com/bandinopla/status/2072091300464148775",
        description: "Presenting the combat concept",
      },
      {
        caption: "Walking Machine",
        url: "https://x.com/bandinopla/status/2062619298745528601",
        description: "Another concept",
      },
    ],
  },

  // ─── Games ──────────────────────────────────────────────────────────
  {
    id: "pip",
    title: "P.I.P: Skull Demo",
    category: Category.Games,
    thumbnailUrl: "/pip-skull/thumbnail.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=RlODeS0Gc0o",
    shortDescription: "Planetary Interstellar Pioneer: Skull Demo",
    longDescription:
      "3D browser-based boss fight prototype featuring a complete gameplay flow, including menus, cinematic cutscenes, and a multi-phase encounter with objective-driven progression. Developed an asset optimization pipeline with a pre-build process that packs textures and audio into atlases to improve loading and runtime performance. Created the 3D assets, animations, and cinematic camera sequences in Blender.",
    links: [
      {
        caption: "Play the game now!",
        launch: true,
        url: "https://bandinopla.github.io/pip-skull-demo",
      },
      {
        caption: "Full gameplay",
        url: "https://www.youtube.com/watch?v=D_krlwCrXAY",
      },
      {
        caption: "Article: Optimizing using Texture Atlases",
        url: "https://medium.com/@pablobandinopla/generating-texture-atlases-for-optimized-assets-63fd7a04021f",
      },
      {
        caption: "First Tweet!",
        url: "https://x.com/bandinopla/status/1902267156386988270",
      },
    ],
    gallery: [
      { url: "/pip-skull/1.jpg" },
      { url: "/pip-skull/2.jpg" },
      { url: "/pip-skull/3.jpg" },
      { url: "/pip-skull/4.jpg" },
    ],
  },
  {
    id: "pip0",
    title: "P.I.P: Demo 1",
    category: Category.Games,
    thumbnailUrl: "/pip/cover.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=5n9dcODcoJU",
    shortDescription: "Planetary Interstellar Pioneer: inside the capsule",
    longDescription:
      "Unity/C# game using the HDRP pipeline. Modeled all the assets, ship, character, props. Did the animations, rigging, texturing, environment, lighting, sound editing, UI, and gameplay programming. The initial level was published as an executable. And several concept cutscenes where produced to support the story.",
    links: [
      {
        caption: "video: Gameplay",
        url: "https://www.youtube.com/watch?v=n74e3-JQP1k",
      },
      {
        caption: "Download and play (PC)",
        launch: true,
        url: "https://bandinopla.itch.io/pionera-interestelar-planetaria",
      },
      {
        caption: "video: Cutscene: Giant Monster entrance",
        url: "https://www.youtube.com/watch?v=SgfHl50V7b0",
      },
      {
        caption: "video: Environment test",
        url: "https://www.youtube.com/watch?v=yoAuwKGiclI",
      },
      {
        caption: "video: Characters design",
        url: "https://www.youtube.com/watch?v=vgw8XFRWPrE",
      },
      {
        caption: "video: Cutscene",
        url: "https://www.youtube.com/watch?v=R0Mtr-u5Cv0",
      },
      {
        caption: "video: First teaser",
        url: "https://www.youtube.com/shorts/Q75kZXxInko",
      },
      {
        caption: "video: Gameplay teaser",
        url: "https://www.youtube.com/shorts/mZ4B80DLnJQ",
      },
    ],
    gallery: [
      { url: "/pip/1.jpg" },
      { url: "/pip/2.jpg" },
      { url: "/pip/3.jpg" },
      { url: "/pip/4.jpg" },
      { url: "/pip/5.jpg" },
      { url: "/pip/6.jpg" },
      { url: "/pip/7.jpg" },
    ],
  },
  {
    id: "gnome",
    title: "Gnome vs Noisy Apes",
    category: Category.Games,
    thumbnailUrl: "/thumbnails/gnome.jpg",
    heroCoverUrl: "/img/gnome.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=0N05WOhNanA",
    shortDescription:
      "Threejs browser game where you play as a gnome fighting off noisy apes.",
    longDescription:
      "Made the entire game. Models from Sketchfab, some graphical elements with AI. Game is 4.4Mb optimized for mobile and desktop.",
    links: [
      {
        caption: "Play it here!",
        launch: true,
        url: "https://gnome-vs-noisy-apes.web.app/",
      },
    ],
  },
  {
    id: "meowjong",
    title: "Meowjong Solitaire",
    category: Category.Games,
    thumbnailUrl: "/thumbnails/meowjong.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=XpLNvfnfrsg",
    heroCoverUrl: "/img/meowjong.jpg",
    shortDescription:
      "Threejs browser game. Mahjong themed around cats. Pair the matching symbols.",
    longDescription:
      "Browser-based puzzle game built with Three.js, implementing complete game logic, UI, animations, input handling, state management, and responsive web deployment. Features a cat-themed Mahjong-inspired matching experience. Visual assets were generated with AI tools (ChatGPT and Gemini) and integrated into the final game.",
    links: [
      {
        caption: "Play it here!",
        launch: true,
        url: "https://meowjong-solitaire.web.app/",
      },
    ],
  },
  {
    id: "hope2",
    title: "Hope2 (WIP)",
    category: Category.Games,
    thumbnailUrl: "/hope2/cover.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=YP_k6HFQFVo",
    shortDescription:
      'Fantasy 2nd part of "Hope" — a game done for a Jam. Playing with the idea of making this a sequel...',
    longDescription:
      "WIP. Game idea in which I'm working on. Doing all, from level to characters, textures, animations, shaders, coding, etc...",
    links: [
      { caption: "Teaser", url: "https://www.youtube.com/watch?v=wGFWbPjtJEQ" },
      {
        caption: "Teaser (Evil Monks)",
        url: "https://www.youtube.com/watch?v=YP_k6HFQFVo",
      },
      {
        caption: "Teaser (Ice)",
        url: "https://www.youtube.com/watch?v=-d4UfCUAZHU",
      },
      {
        caption: "Camera test",
        url: "https://x.com/bandinopla/status/1932372996385063109",
      },
      {
        caption: "Character designs and updates",
        url: "https://blenderartists.org/t/hope-2/1596993",
      },
      {
        caption: "Portal shader test",
        url: "https://x.com/bandinopla/status/1934674112825217246",
      },
      {
        caption: "Playing with mirrors",
        url: "https://x.com/bandinopla/status/1936141981979197650",
      },
    ],
  },
  {
    id: "aethelgard",
    title: "Aethelgard",
    category: Category.Games,
    thumbnailUrl: "/thumbnails/aethelgard.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=4MGq9mOy3aY",
    shortDescription:
      "A serie of RPG game mechanics: point and click to move, skill system, weapon and inventory system, particle system, cutscene system, enemy AI.",
    longDescription:
      "From the coding to the 3d work, the entire pipeline to produce the mechanics and gameplay of what a simple RPG would require. Environment optimization. Entity profile system (describing units in a configuration array and spawning them using just a key).",
    links: [
      {
        caption: "Character model",
        url: "https://sketchfab.com/3d-models/aethelgard-2a9c9e6bd99c4349ac6f6d80795192fc",
      },
      {
        caption: "Batch Instancing: grass field",
        url: "https://x.com/bandinopla/status/1974902877601829154",
      },
      {
        caption: "Character re-design",
        url: "https://x.com/bandinopla/status/1972710914223923236",
      },
      {
        caption: "ThreeJs Pull Request",
        url: "https://x.com/bandinopla/status/1971141644130058604",
      },
      {
        caption: "Cutscene mechanic",
        url: "https://x.com/bandinopla/status/1968382449572024753",
      },
      {
        caption: "Particle effects",
        url: "https://x.com/bandinopla/status/1966653163831701976",
      },
      {
        caption: "New map: the cave",
        url: "https://x.com/bandinopla/status/1964407916653617551",
      },
      {
        caption: "Adding Orcs",
        url: "https://x.com/bandinopla/status/1964103771471958123",
      },
      {
        caption: "Article: frame callbacks",
        url: "https://medium.com/@pablobandinopla/frame-callbacks-in-three-js-recreating-flashs-addframescript-with-animationclips-5ccc713bbb6e",
      },
      {
        caption: "Decimating to get 60FPS",
        url: "https://x.com/bandinopla/status/1963720015594545263",
      },
      {
        caption: "Skeleton instancing",
        url: "https://x.com/bandinopla/status/1962204827187855414",
      },
      {
        caption: "Added god's rays",
        url: "https://x.com/bandinopla/status/1961894480795062581",
      },
      {
        caption: "Level Blockout",
        url: "https://x.com/bandinopla/status/1961200142230466619",
      },
    ],
  },

  {
    id: "claw",
    title: "Physics Claw Machine",
    category: Category.Games,
    thumbnailUrl: "/thumbnails/claw.jpg",
    heroCoverUrl: "/img/claw.jpg",
    shortDescription:
      "Claw Machine simulator using a physics engine in threejs in the browser.",
    longDescription:
      "3D Asset integration and conditioning. Physics rig. Coding and re-texturing.",
    links: [
      {
        caption: "Play it here!",
        launch: true,
        url: "https://threejs-claw-machine.vercel.app/",
      },
      {
        caption: "Tweet w/video",
        url: "https://x.com/bandinopla/status/1951060739667755027",
      },
    ],
  },
  {
    id: "dob",
    title: "Days of Blood",
    category: Category.Games,
    thumbnailUrl: "/thumbnails/dob.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=_z0joE_1zQU",
    shortDescription:
      "Defense game. Save the young woman tied up about to be sacrificed to the evil gods of some crazy monks.",
    longDescription:
      "You play a brave knight that has to save the young woman. For this game I got the help from voice actors to put their voices to the characters. Concept, 2D Graphics, animations, effects, coding.",
    links: [
      {
        caption: "Play it now!",
        launch: true,
        url: "https://www.newgrounds.com/portal/view/603125",
      },
    ],
  },
  {
    id: "hope",
    title: "Hope",
    category: Category.Games,
    thumbnailUrl: "/thumbnails/hope.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=d9qMRH_9i1k",
    shortDescription: "Game done for a JAM done in a few hours...",
    longDescription:
      "3D asset creation and quick prototype of this game for a Jam.",
    links: [
      {
        caption: "Play it now!",
        launch: true,
        url: "https://hopewillfindyou.web.app/",
      },
      {
        caption: "Submission entry",
        url: "https://threejsjam.com/submission/15",
      },
      {
        caption: "Tweet w/video",
        url: "https://x.com/bandinopla/status/1928394541633081824",
      },
    ],
  },
  {
    id: "ducks",
    title: "Lucky Duckies",
    category: Category.Games,
    thumbnailUrl: "/thumbnails/ducks.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=efibch1xEws",
    shortDescription:
      "Avoidance game. Guide momma duck to the other side of the road without getting killed.",
    longDescription:
      "3D Models, texture, animation. Coding and exported to Android vía Adobe Air. Try to make all the little duckies do it without being turned into tomato salsa.",
    links: [
      {
        caption: "Play it here",
        launch: true,
        url: "https://gamejolt.com/games/lucky-duckies/31468",
      },
    ],
  },
  {
    id: "kam",
    title: "Knights & Magic",
    category: Category.Games,
    thumbnailUrl: "/thumbnails/kam.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=Ub88d1hcnHA",
    shortDescription:
      "2D Strategy game where you have to place units as enemy units walk along a path...",
    longDescription: "2D characters and animations. Coding.",
    links: [],
  },
  {
    id: "canicas",
    title: "Canicas",
    category: Category.Games,
    thumbnailUrl: "/thumbnails/canicas.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=N0xV2ZuBPDI",
    shortDescription:
      'Game inspired by "puzzle bubble". Throw the balls trying to match them. Some balls have special powers.',
    longDescription: "2D Assets, animations, coding.",
    links: [
      {
        caption: "Play it here",
        launch: true,
        url: "https://www.flashgamesplayer.com/free/canicas/play.html",
      },
    ],
  },
  {
    id: "runny",
    title: "Runny",
    category: Category.Games,
    thumbnailUrl: "/thumbnails/runny.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=RC_exIUPLWc",
    shortDescription:
      "Short game inspired by Google's T‑Rex Runner. Mixing elements from Super Mario characters.",
    longDescription:
      "Done in Unity and exported to Android. 3D modeling, texture, animation. 2D illustrations (background) and composition. Coding.",
    links: [],
  },
  {
    id: "tetris",
    title: "Idiot Tetris",
    category: Category.Games,
    thumbnailUrl: "/thumbnails/tetris.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=BKqcl3QQWEQ",
    shortDescription:
      "A tetris with a twist... basically you sort this little kid's thoughts by completing the lines.",
    longDescription: "2D Assets and animation. Coding.",
    links: [
      {
        caption: "Play it here",
        launch: true,
        url: "https://www.newgrounds.com/portal/view/339067",
      },
    ],
  },

  {
    id: "mediapipe",
    title: "Easy Rig",
    category: Category.Libraries,
    thumbnailUrl: "/easy-rig/thumbnail.jpg",
    heroCoverUrl:
      "https://github.com/bandinopla/three-mediapipe-rig/raw/main/cover.jpg",
    youtubeVideoUrl: undefined,
    shortDescription:
      "Control a character with the webcam. Easily rig a mediapipe face, body and hands landmarks into a skeleton in threejs.",
    longDescription:
      "Wrapper around mediapipe, it will calculate the bone's positions of a skeleton to match the landmarks provided by mediapipe.",
    links: [
      {
        caption: "Repo",
        url: "https://github.com/bandinopla/three-mediapipe-rig",
      },
      {
        caption: "Online Demo",
        url: "https://bandinopla.github.io/three-mediapipe-rig/",
        launch: true,
      },
      {
        caption: "NPM: three-mediapipe-rig",
        url: "https://www.npmjs.com/package/three-mediapipe-rig",
      },
      {
        caption: "Tweet",
        url: "https://x.com/bandinopla/status/2028153635637457351",
      },
    ],
  },
  {
    id: "simple-cloth",
    title: "Simple Cloth",
    category: Category.Libraries,
    thumbnailUrl: "/thumbnails/simple-cloth.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=GHi2Zvr32oY",
    shortDescription:
      "Class to turn a skinned mesh into a cloth simulated using webGPU by vertex painting on vertices you want to turn into cloth.",
    longDescription:
      "Adapted and expanded on top of a ThreeJs example file showcasing the use of compute shaders to run cloth simulations. Added the ability to paint vertices to turn them into cloth, and to add magnets to interact with the cloth.",
    links: [
      {
        caption: "Play demo now!",
        launch: true,
        url: "https://bandinopla.github.io/three-simplecloth/?demo=skirt",
      },
      {
        caption: "Article: Simple Cloth Simulation",
        url: "https://medium.com/@pablobandinopla/simple-cloth-simulation-with-three-js-and-compute-shaders-on-skeletal-animated-meshes-acb679a70d9f",
      },
      {
        caption: "First Tweet!",
        url: "https://x.com/bandinopla/status/2023907653278158937",
      },
      {
        caption: "NPM Package",
        url: "https://www.npmjs.com/package/three-simplecloth",
      },
      {
        caption: "Github Repo",
        url: "https://github.com/bandinopla/three-simplecloth",
      },
    ],
  },
  {
    id: "bandijoystick",
    title: "BandiJoystick.js",
    category: Category.Libraries,
    thumbnailUrl: "/thumbnails/bandijoystick.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=RfvawPnfTcI",
    shortDescription:
      "Turn a phone into a remote controller. No apps. No installations. Just scan & play!",
    longDescription:
      "The wrapper library around trystero distributed as an NPM package to allow developers to integrate it into their web apps easily. Also the site, promo videos, demos, etc...",
    links: [
      {
        caption: "Website",
        launch: true,
        url: "https://bandijoystickjs.web.app/",
      },
      { caption: "Repo", url: "https://github.com/bandinopla/bandijoystick" },
      {
        caption: "webgamedev.com Issue #028",
        url: "https://www.webgamedev.com/newsletter/028",
      },
    ],
  },
  {
    id: "spinners",
    title: "Three.js Spinners",
    category: Category.Libraries,
    thumbnailUrl: "/img/spinner.png",
    heroCoverUrl: "/img/spinner.png",
    shortDescription:
      "Easy to copy & paste spinners for your threejs projects. Runs in the browser. Using webGPU point rendering.",
    longDescription:
      "The UI allows you to quickly see/edit the code for a spinner and copy it to your project.",
    links: [
      {
        caption: "WebGPU Spinners",
        launch: true,
        url: "https://threejs-spinners.web.app/",
      },
    ],
  },
  {
    id: "flip",
    title: "Quick Flipbook",
    category: Category.Libraries,
    thumbnailUrl: "/thumbnails/flip.jpg",
    heroCoverUrl: "/img/flipbook.gif",
    shortDescription: "Library to create a flipbook with threejs.",
    longDescription:
      "Coded an npm package to easily allow users to implement a flip-book mechanic.",
    links: [
      {
        caption: "Git Repo",
        launch: true,
        url: "https://github.com/bandinopla/quick_flipbook",
      },
      {
        caption: "NPM Package",
        url: "https://www.npmjs.com/package/quick_flipbook",
      },
    ],
  },
  {
    id: "fluid",
    title: "Fluid/Smoke Simulator",
    category: Category.Libraries,
    thumbnailUrl: "/thumbnails/fluid.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=tjaH322hQdc",
    shortDescription:
      "Made a class to easily implement fluid/smoke simulation vía a texture shader. Offered in both WebGL(GLSL) and WebGPU(TSL).",
    longDescription:
      "Ported a serie of multi pass shaders from vanilla js/GLSL to ThreeJs shading system, and packed it in a way that it is easily usable by others.",
    links: [
      {
        caption: "Git repo (source code)",
        url: "https://github.com/bandinopla/threejs-fluid-simulation",
      },
      {
        caption: "Online demo",
        launch: true,
        url: "https://threejs-fluid-simulation.vercel.app",
      },
    ],
  },
  {
    id: "rig",
    title: "Physics Rigger",
    category: Category.Libraries,
    thumbnailUrl: "/thumbnails/rig.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=RtO2KUH9Vig",
    shortDescription:
      "Blender addon + NPM Package to easily design physics rigs in blender and use them in ThreeJs with Cannon-es.",
    longDescription:
      "Coded the python addon to create a custom panel inside of Blender's UI to easily setup properties to define Physical objects once exported and imported into Three using the provided class to parse the scene. Allows indie devs to prototype interactive 3D games without writing physics glue code, saving hours of work.",
    links: [
      {
        caption: "Git repo (addon + source)",
        launch: true,
        url: "https://github.com/bandinopla/threejs-cannones-rigger",
      },
      {
        caption: "Raycast Vehicle Tutorial",
        url: "https://www.youtube.com/watch?v=T67fDjiqEog",
      },
    ],
  },

  // ─── Editors ────────────────────────────────────────────────────────
  {
    id: "meshcap",
    title: "Meshcap",
    category: Category.Editors,
    thumbnailUrl: "/thumbnails/meshcap.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=J1qBI1cyIss",
    shortDescription:
      "Online editor to use Google's media pipe face tracking to record animated meshes with sound.",
    longDescription:
      "Created the editor as a convenient tool to easily and almost trivially produce animated facial recordings that will deform and texture a mesh with sound being played in sync with the deformations. Useful for games.",
    links: [
      {
        caption: "Launch the Online Editor",
        launch: true,
        url: "https://bandinopla.github.io/three-mediapipe-rig/?editor=meshcap",
      },
      {
        caption: "Documentation / Repo",
        url: "https://github.com/bandinopla/three-mediapipe-rig/blob/main/MESHCAP.md",
      },
      {
        caption: "First tweet, introducing MeshCap",
        url: "https://x.com/bandinopla/status/2036050685817405858",
      },
      {
        caption: "Video showcasing clips with audio!",
        url: "https://x.com/bandinopla/status/2038725295566418075",
      },
      {
        caption: "Card game showing use + source code",
        url: "https://bandinopla.github.io/three-mediapipe-rig/?demo=game-youtubers",
      },
    ],
  },
  {
    id: "ikpro",
    title: "IK Playground",
    category: Category.Editors,
    thumbnailUrl: "/thumbnails/ikpro.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=NdBZjo0lS98",
    shortDescription:
      "Editor to experiment with IK rigs. The goal is to make learning and experimenting with IK much more approachable.",
    longDescription:
      "Editor with a prefab system to allow the instantiation of linked duplicates. Command pattern with CTRL-Z and redo support. Load/Save rigs into a custom file format.",
    links: [
      {
        caption: "Online Editor",
        launch: true,
        url: "https://kinematic-pro.web.app/",
      },
      {
        caption: "X Post",
        url: "https://x.com/bandinopla/status/2070626537292931289",
      },
    ],
  },
  {
    id: "posecap",
    title: "PoseCap",
    category: Category.Editors,
    thumbnailUrl: "/thumbnails/posecap.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=5CjKklJhbcQ",
    heroCoverUrl: "/img/posecap.jpg",
    shortDescription:
      "Online editor to use Google's media pipe pose tracking to record animated meshes with sound.",
    longDescription:
      "Created the editor as a convenient tool to easily translate full body pose landmarks into a skeleton in threejs.",
    links: [
      {
        caption: "Documentation / Repo",
        url: "https://github.com/bandinopla/three-mediapipe-rig/blob/main/POSECAP.md",
      },
      {
        caption: "Online Editor",
        launch: true,
        url: "https://bandinopla.github.io/three-mediapipe-rig/?editor=posecap",
      },
      {
        caption: "First Tweet!",
        url: "https://x.com/bandinopla/status/2041938947194994941",
      },
      {
        caption: "Chibi Demo",
        url: "https://bandinopla.github.io/three-mediapipe-rig/?demo=bandinopla-chibi",
      },
    ],
  },
  {
    id: "wxr",
    title: "Weight For Reps",
    category: Category.Editors,
    thumbnailUrl: "/thumbnails/wxr.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=vRCtVyGCZ5k",
    shortDescription:
      "Online training journals. Log your workouts and get useful stats and charts. Running since 2011.",
    longDescription:
      "The entire site's coding, design, front and backend, content, idea and maintenance. You can join, create an account and start logging your workouts and get useful stats and charts.",
    links: [
      { caption: "Website", launch: true, url: "https://weightxreps.net/" },
      {
        caption: "AI Integration (ChatGPT, Grok, Gemini + Ollama)",
        url: "https://www.youtube.com/watch?v=EzaKmv4cKlw",
      },
      {
        caption: "Front-end repo",
        url: "https://github.com/bandinopla/weightxreps-client",
      },
      {
        caption: "Back-end repo",
        url: "https://github.com/bandinopla/weightxreps-server",
      },
      {
        caption: "OAuth Server",
        url: "https://github.com/bandinopla/weightxreps-server/blob/main/docs/OAUTH.md",
      },
    ],
  },
  {
    id: "astro",
    title: "Astro Materials 3D",
    category: Category.Editors,
    thumbnailUrl: "/thumbnails/astro.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=Pz_lYFEMw0Y",
    shortDescription:
      "My take on NASA's Astromaterials 3D virtual library using raymarching to render 3D models from X-ray CT data.",
    longDescription:
      "Developed a real-time volumetric data visualization tool using raymarching to render 3D models from NASA's X-ray computed tomography (CT) data. Implemented an interactive intensity-based filtering system to isolate and analyze internal geological structures.",
    links: [
      {
        caption: "Online Live Demo",
        launch: true,
        url: "https://bandinopla-astromaterials-3d.vercel.app/",
      },
      {
        caption: "Astro Materials 3D",
        url: "https://ares.jsc.nasa.gov/astromaterials3d",
      },
      {
        caption: "Article talking in depth about this technique",
        url: "https://medium.com/@pablobandinopla/raymarching-a-better-way-to-explore-nasas-x-ray-scans-with-threejs-a114a6bee9e7",
      },
    ],
  },
  {
    id: "body",
    title: "Exercise Visualization",
    category: Category.Editors,
    thumbnailUrl: "/thumbnails/body.jpg",
    heroCoverUrl: "/img/body.jpg",
    shortDescription:
      "The goal is to show to people not gym savvy how a few barbell movements can help you get fit without complications.",
    longDescription:
      "3D Model, texture, rigging and animation. Coding. An interactive exercise encyclopedia.",
    links: [
      {
        caption: "Visit the app",
        launch: true,
        url: "https://body.weightxreps.net",
      },
      {
        caption: "First tweet",
        url: "https://x.com/bandinopla/status/1881641423898092002",
      },
    ],
  },

  {
    id: "askai",
    title: "Ask AI",
    category: Category.Editors,
    thumbnailUrl: "/thumbnails/askai.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=EzaKmv4cKlw",
    shortDescription: "Integrating AI into Weight For Reps.",
    longDescription:
      "Integrated OpenAI, Grok, Gemini and Ollama into Weight For Reps. You can chat about your training with the AIs and switch at any time since the chat remains the same and messages are internally normalized to be exchanged between APIs.",
    links: [
      {
        caption: "Ask the AI",
        launch: true,
        url: "https://weightxreps.net/ask-ai",
      },
    ],
  },

  {
    id: "dna",
    title: "Local DNA Aligner",
    category: Category.Editors,
    thumbnailUrl: "/thumbnails/dna.jpg",
    heroCoverUrl: "/img/dna.jpg",
    shortDescription:
      "DNA alignment browser tool! Local Nucleotide Sequence Aligner using Smith-Waterman, visualized with threejs.",
    longDescription:
      "Reads FASTA files. Coded the tech demo for local nucleotide sequence alignment using the Smith-Waterman algorithm, visualized in 3D with Three.js.",
    links: [
      {
        caption: "Play the demo!",
        launch: true,
        url: "https://threejs-local-dna-sequence-aligner.vercel.app/",
      },
      {
        caption: "Tweet",
        url: "https://x.com/bandinopla/status/1945566889800782309",
      },
    ],
  },

  // ─── Animations ─────────────────────────────────────────────────────
  {
    id: "robot",
    title: "Meet Mira",
    category: Category.Concept,
    thumbnailUrl: "/thumbnails/robot.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=Xlzzamhx4mg",
    shortDescription:
      "Fantasy site showcasing a new Unitree's Robot model with swappable silicone human-like bodyparts.",
    longDescription:
      "Fantasy site showcasing a new Unitree's Robot model that allows to plug in and switch silicone human-like bodyparts to re-skin it to make it look less robotic. Character design, modeling, rigging, texturing, optimization, website, coding.",
    links: [
      {
        caption: "Online Live Demo",
        launch: true,
        url: "https://bandinopla-unitree.vercel.app/",
      },
      {
        caption: "Article explaining how I did this",
        url: "https://medium.com/@pablobandinopla/scroll-driven-presentation-in-threejs-with-gsap-a2be523e430a",
      },
      {
        caption: "ArtStation | Renders",
        url: "https://www.artstation.com/artwork/8BdZmx",
      },
      {
        caption: "Download/Inspect Android Model",
        url: "https://sketchfab.com/3d-models/meet-mira-84a9713b68e74e4888979ac60a6868fb",
      },
      { caption: "Unitree's G1 Model", url: "https://www.unitree.com/g1" },
    ],
  },
  {
    id: "lara",
    title: "Young Lara",
    category: Category.Animations,
    thumbnailUrl: "/thumbnails/lara.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=OXWi8kfhe4c",
    shortDescription:
      "Young Lara (Tomb Raider 4) — Game ready. 1 material, all textures baked. Low poly! Free to download.",
    longDescription:
      "Design, modeling, texturing, rigging, animation of the model. Exported and game ready.",
    links: [
      {
        caption: "Download the model",
        url: "https://www.artstation.com/marketplace/p/rrbKA/young-lara-croft-tomb-raider-4",
      },
      {
        caption: "ArtStation post (more pics and videos)",
        url: "https://www.artstation.com/artwork/el52Nw",
      },
      {
        caption: "Live model (Sketchfab)",
        url: "https://sketchfab.com/3d-models/young-lara-croft-tomb-raider-4-3683b756078947e28c61cb3b06b7c37d",
      },
    ],
  },
  {
    id: "ps1",
    title: "Half-Evil Eternal",
    category: Category.Animations,
    thumbnailUrl: "/thumbnails/ps1.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=tDGo3d1fFe0",
    shortDescription:
      "Combined characters from Playstation 1 games into a single universe and animated them using ThreeJs.",
    longDescription:
      "Rigged and conditioned the original game assets and level. Coded the animation as to be played like a cutscene, following time cues and triggering actions vía code. Sync with audio. Audio generation with AI.",
    links: [
      {
        caption: "Tweet #1",
        url: "https://x.com/bandinopla/status/1921494542517252200",
      },
      {
        caption: "Part #2",
        url: "https://x.com/bandinopla/status/1925256512471011791",
      },
      {
        caption: "Video: Part #2",
        url: "https://www.youtube.com/watch?v=BxTL-rwNDiI",
      },
    ],
  },
  {
    id: "monkey",
    title: "Black Myth: Spyro",
    category: Category.Animations,
    thumbnailUrl: "/thumbnails/monkey.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=lGiWQSD1S4Y",
    shortDescription:
      "Used a higher polygon character along with Wiggle Bones to animate the feathers.",
    longDescription:
      "Was testing how it would look when more details are rendered. Voices done with AI. Integrated AAA character model, had to re-texture and rig the characters. Animation. Voices cloned with AI.",
    links: [
      {
        caption: "Tweet with video",
        url: "https://x.com/bandinopla/status/1922782400834077051",
      },
    ],
  },
  {
    id: "mickey",
    title: "Left 4 Reaver",
    category: Category.Animations,
    thumbnailUrl: "/thumbnails/mickey.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=R9H40iq6gSw",
    shortDescription:
      "Fantasy cutscene. Animating in ThreeJs, using characters from known games.",
    longDescription:
      "Integrated real game assets, rigged them and animated them to be played as a cutscene in threejs. For the Raziel model I had to re-texture him a bit.",
    links: [
      {
        caption: "Tweet w/video",
        url: "https://x.com/bandinopla/status/1926951742974927320",
      },
    ],
  },
  {
    id: "dl",
    title: "World Record (600k+ views)",
    category: Category.Animations,
    thumbnailUrl: "/thumbnails/dl.jpg",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=RoVTx8-dCms",
    shortDescription: "Blender animation of a guy breaking a world record.",
    longDescription:
      "3D Modeling, texturing, rigging, animation, render. Texture of his skin is also animated. I made the model, textures, rig, animations, etc... not the background.",
    links: [],
  },
  {
    id: "lookdev",
    title: "Look Dev",
    category: Category.Concept,
    thumbnailUrl: "/thumbnails/lookdev.jpg",
    shortDescription:
      "Look and Feel of a retro Scifi scene, possibly for a game?",
    longDescription:
      "Scene assembly and color manipulation to achieve a desired look.",
    youtubeVideoUrl: "https://youtu.be/32T5dfLUIBA",
    links: [
      {
        caption: "X Post",
        url: "https://x.com/bandinopla/status/2062619298745528601",
      },
    ],
  },
  {
    id: "aracnoid",
    title: "Procedural IK Locomotion",
    category: Category.Animations,
    thumbnailUrl: "/thumbnails/aracnoid.jpg",
    youtubeVideoUrl: "https://www.youtube.com/shorts/g7x5mseMOTQ",
    shortDescription:
      "Procedural locomotion system for a spider-like creature.",
    longDescription:
      "Rigged 3D model to use an IK system for procedural locomotion.",
    links: [
      {
        caption: "Play it here!",
        launch: true,
        url: "https://aracnoid-rid-demo.web.app/",
      },
    ],
  },

  // ─── Concept ────────────────────────────────────────────────────────

  {
    id: "vampire",
    title: "Vampire Lady",
    category: Category.Concept,
    thumbnailUrl: "/thumbnails/vampire.jpg",
    heroCoverUrl: "/img/vampire.jpg",
    shortDescription:
      "Vampire lady is a 3D port of an original 2D concept by Serge Birault.",
    longDescription:
      "Character modeling, texturing, posing, based on a sketch concept art.",
    links: [
      {
        caption: "ArtStation pics",
        url: "https://www.artstation.com/artwork/Le5vKR",
      },
      {
        caption: "Live model (Sketchfab)",
        url: "https://sketchfab.com/3d-models/vampire-lady-4f6ab7f19615474293c9f43d47cd6817",
      },
    ],
  },

  {
    id: "retopo",
    title: "Blender Scene",
    category: Category.Concept,
    thumbnailUrl: "/thumbnails/retopo.jpg",
    heroCoverUrl: "/img/blender.jpeg",
    shortDescription:
      "Retopology + Texture baking of Blender 2.78 and Blender 2.81 splash screens for a Jam.",
    longDescription:
      "Retopology of high polygon models, then texture baking on all channels. Models exported to sketchfab.",
    links: [
      {
        caption: "Live model (sketchfab)",
        url: "https://sketchfab.com/3d-models/blender-cover-remix-a38f11890ff141c88fcdac6b637fdaf8",
      },
      {
        caption: "Jam Entry (Log + Progress pics)",
        url: "https://blenderartists.org/t/finished-wip-log-junk-shop-renderman/1400567",
      },
    ],
  },
  {
    id: "cu",
    title: "Bullzara",
    category: Category.Concept,
    thumbnailUrl: "/thumbnails/cu.jpg",
    heroCoverUrl: "/img/bull.jpg",
    shortDescription:
      "Stylized 3D character design of a character made by Bullzara.",
    longDescription: "3D Modeling, cloth simulation, posing, rendering.",
    links: [
      {
        caption: "ArtStation (pics and videos)",
        url: "https://www.artstation.com/artwork/xDrNQR",
      },
    ],
  },
  {
    id: "hand",
    title: "Hand Controlled Camera",
    category: Category.Concept,
    thumbnailUrl: "/thumbnails/hand.jpg",
    shortDescription:
      "Coded a camera movement controlled by hand gestures using Google's MediaPipe.",
    longDescription: "3D Asset integration and coding.",
    links: [
      {
        caption: "Video demo",
        url: "https://x.com/bandinopla/status/1917927590834155788",
      },
      {
        caption: "Article explaining how I did it",
        url: "https://medium.com/@pablobandinopla/use-hand-gestures-to-control-three-js-99842d66e8ad",
      },
    ],
  },
  {
    id: "gta",
    title: "Sketchbook Mod",
    category: Category.Concept,
    thumbnailUrl: "/thumbnails/gta.jpg",
    shortDescription:
      "Modded Jan Bláha's Sketchbook replacing and adding some models to get a GTA vibe from it...",
    longDescription:
      "Integrated new external assets respecting and following the mechanics for cars/doors and characters.",
    links: [
      {
        caption: "Video demo",
        url: "https://x.com/bandinopla/status/1920538684559880498",
      },
      { caption: "Sketchbook", url: "https://github.com/swift502/Sketchbook" },
    ],
  },
  {
    id: "silent",
    title: "Silent Hill",
    category: Category.Concept,
    thumbnailUrl: "/thumbnails/silent.jpg",
    heroCoverUrl: "/img/silent.jpg",
    shortDescription:
      "Trying to emulate the Resident Evil vibe from Playstation 1 but with a better flashlight.",
    longDescription:
      "Integrated real game assets from PS1 games, rigged them. Coded the mechanic to emulate a resident evil vibe. Used three-bvh for collisions.",
    links: [
      {
        caption: "Tweet with video demo",
        url: "https://x.com/bandinopla/status/1926428457883312490",
      },
      {
        caption: "Article explaining how I did it",
        url: "https://medium.com/@pablobandinopla/collision-detection-in-threejs-made-easy-using-bvh-1ce6012199e8",
      },
    ],
  },
  {
    id: "trystero",
    title: "Multiplayer",
    category: Category.Concept,
    thumbnailUrl: "/thumbnails/trystero.jpg",
    heroCoverUrl: "/img/trystero.jpg",
    shortDescription:
      "Testing Trystero: a clandestine courier network that lets application users talk directly, encrypted and without a server.",
    longDescription:
      "Implemented a library meant to connect users vía P2P with no central server as an experiment and hooked it into a 3D visualization using three.",
    links: [
      {
        caption: "Live demo",
        launch: true,
        url: "https://bandinopla-trystero.web.app/",
      },
      {
        caption: "Tweet w/video",
        url: "https://x.com/bandinopla/status/1927816079612461441",
      },
      {
        caption: "Article explaining how I did it",
        url: "https://medium.com/@pablobandinopla/effortless-serverless-multiplayer-in-three-js-with-trystero-f025f31150c6",
      },
      { caption: "Trystero", url: "https://github.com/dmotz/trystero" },
    ],
  },
];
