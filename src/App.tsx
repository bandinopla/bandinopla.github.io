import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import * as THREE from 'three';
import { Canvas, } from '@react-three/fiber'
import { useGLTF, CameraControls, Html } from '@react-three/drei'
import { SpeechBubbleUI } from './ui/speech-bubble';
import { GameDevSection } from './sections/GameDevSection';
import { ThreeDSection } from './sections/ThreeDWorkSection';
import { SkillsSection } from './sections/SkillsSection';
import { StackToolsSection } from './sections/StackToolsSection';
import { ContactSection } from './sections/ContactSection';
import { ProjectManagement } from './sections/ManagementSection'; 
import { MonkeyHead } from './objects/MonkeyHead';
import { MouseIcon } from './ui/MouseIcon';

let LINKS = [
    {
        title: "Start",
        campos: '{"enabled":true,"minDistance":2.220446049250313e-16,"maxDistance":1.7976931348623157e+308,"minZoom":0.01,"maxZoom":1.7976931348623157e+308,"minPolarAngle":0,"maxPolarAngle":1.9634954084936207,"minAzimuthAngle":-1.7976931348623157e+308,"maxAzimuthAngle":1.7976931348623157e+308,"smoothTime":0.25,"draggingSmoothTime":0.125,"dollySpeed":1,"truckSpeed":2,"dollyToCursor":false,"verticalDragToForward":false,"target":[0.5039006855227456,3.4563927468380307,-0.9677520481676958],"position":[12.977090642015801,7.665980269726499,-15.473327077818174],"zoom":0.65,"focalOffset":[0,0,0],"target0":[0,0,0],"position0":[0,0,-18.5],"zoom0":1,"focalOffset0":[0,0,0]}',
    },
    {
        title: "3D Dev",
        id: "3d",
        Content: ThreeDSection,
        campos: '{"enabled":true,"minDistance":2.220446049250313e-16,"maxDistance":1.7976931348623157e+308,"minZoom":0.01,"maxZoom":1.7976931348623157e+308,"minPolarAngle":0,"maxPolarAngle":1.9634954084936207,"minAzimuthAngle":-1.7976931348623157e+308,"maxAzimuthAngle":1.7976931348623157e+308,"smoothTime":0.25,"draggingSmoothTime":0.125,"dollySpeed":1,"truckSpeed":2,"dollyToCursor":false,"verticalDragToForward":false,"target":[2.029136788484357,7.196899785173049,2.21012735771791],"position":[2.2132563734843207,7.1646762287741925,1.3272548906542811],"zoom":0.65,"focalOffset":[0,0,0],"target0":[0,0,0],"position0":[0,0,-18.5],"zoom0":1,"focalOffset0":[0,0,0]}'
    },
    {
        title: "Game Dev",
        id: "games",
        Content: GameDevSection,
        campos: '{"enabled":true,"minDistance":2.220446049250313e-16,"maxDistance":1.7976931348623157e+308,"minZoom":0.01,"maxZoom":1.7976931348623157e+308,"minPolarAngle":0,"maxPolarAngle":1.9634954084936207,"minAzimuthAngle":-1.7976931348623157e+308,"maxAzimuthAngle":1.7976931348623157e+308,"smoothTime":0.25,"draggingSmoothTime":0.125,"dollySpeed":1,"truckSpeed":2,"dollyToCursor":false,"verticalDragToForward":false,"target":[1.851165004484945,5.150681022927252,3.637774310019475],"position":[2.3085355442837043,5.4852523272075535,2.37284064379675],"zoom":1,"focalOffset":[0,0,0],"target0":[0,0,0],"position0":[0,0,-18.5],"zoom0":1,"focalOffset0":[0,0,0]}'
    },
    {
        title: "Tools",
        id: "skills",
        Content: StackToolsSection,
        campos: '{"enabled":true,"minDistance":2.220446049250313e-16,"maxDistance":1.7976931348623157e+308,"minZoom":0.01,"maxZoom":1.7976931348623157e+308,"minPolarAngle":0,"maxPolarAngle":1.9634954084936207,"minAzimuthAngle":-1.7976931348623157e+308,"maxAzimuthAngle":1.7976931348623157e+308,"smoothTime":0.25,"draggingSmoothTime":0.125,"dollySpeed":1,"truckSpeed":2,"dollyToCursor":false,"verticalDragToForward":false,"target":[-0.7389927078574193,7.0128040252012,2.492389125511226],"position":[-0.37627105795800275,6.899551582524068,1.2801862115754947],"zoom":0.65,"focalOffset":[0,0,0],"target0":[0,0,0],"position0":[0,0,-18.5],"zoom0":1,"focalOffset0":[0,0,0]}'
    },
    {
        title: "Planning",
        id: "management",
        Content: ProjectManagement,
        campos: '{"enabled":true,"minDistance":2.220446049250313e-16,"maxDistance":1.7976931348623157e+308,"minZoom":0.01,"maxZoom":1.7976931348623157e+308,"minPolarAngle":0,"maxPolarAngle":1.9634954084936207,"minAzimuthAngle":-1.7976931348623157e+308,"maxAzimuthAngle":1.7976931348623157e+308,"smoothTime":0.25,"draggingSmoothTime":0.125,"dollySpeed":1,"truckSpeed":2,"dollyToCursor":false,"verticalDragToForward":false,"target":[-3.4940395643238427,5.2662394070423115,-3.793346535992574],"position":[-2.0775594353271316,4.911145429091546,-4.166542417433837],"zoom":0.65,"focalOffset":[0,0,0],"target0":[0,0,0],"position0":[0,0,-18.5],"zoom0":1,"focalOffset0":[0,0,0]}'
    },
    {
        title: "Web Dev",
        id: "pc",
        Content: SkillsSection,
        campos: '{"enabled":true,"minDistance":2.220446049250313e-16,"maxDistance":1.7976931348623157e+308,"minZoom":0.01,"maxZoom":1.7976931348623157e+308,"minPolarAngle":0,"maxPolarAngle":1.9634954084936207,"minAzimuthAngle":-1.7976931348623157e+308,"maxAzimuthAngle":1.7976931348623157e+308,"smoothTime":0.25,"draggingSmoothTime":0.125,"dollySpeed":1,"truckSpeed":2,"dollyToCursor":false,"verticalDragToForward":false,"target":[-0.5785352784561707,4.365768202116564,0.6444887032541374],"position":[-4.954980796119594,6.187736797207673,-0.9085168075452911],"zoom":0.65,"focalOffset":[0,0,0],"target0":[0,0,0],"position0":[0,0,-18.5],"zoom0":1,"focalOffset0":[0,0,0]}'
    },
    {
        title: "Contact",
        id: "contact",
        Content: ContactSection,
        campos: '{"enabled":true,"minDistance":2.220446049250313e-16,"maxDistance":1.7976931348623157e+308,"minZoom":0.01,"maxZoom":1.7976931348623157e+308,"minPolarAngle":0,"maxPolarAngle":1.9634954084936207,"minAzimuthAngle":-1.7976931348623157e+308,"maxAzimuthAngle":1.7976931348623157e+308,"smoothTime":0.25,"draggingSmoothTime":0.125,"dollySpeed":1,"truckSpeed":2,"dollyToCursor":false,"verticalDragToForward":false,"target":[-0.365294820125087,4.208341637855851,-1.5744660345486245],"position":[-0.3652958690959981,5.99663209012555,-1.574467482872749],"zoom":0.65,"focalOffset":[0,0,0],"target0":[0,0,0],"position0":[0,0,-18.5],"zoom0":1,"focalOffset0":[0,0,0]}'
    }
]

function App() {

    const closeHandler = useRef<() => void>();
    const [link, setLink] = useState<LinkType>();



    const onClickLink = (clickedLink: LinkType, onClose: () => void) => {
        setLink(clickedLink);
        closeHandler.current = onClose;
    }

    const onClose = () => {
        setLink(undefined);
        let callback = closeHandler.current;
        closeHandler.current = undefined;
        callback!();
    }


    return (
        <>
            {link != null && <div style={{
                backgroundColor: "white",
                width: "100vw",
                height: "100vh",
                padding: 0, margin: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{ position: "fixed", top: 0, right: 0, fontSize: 44, padding: "10px 30px", cursor: "pointer" }} onClick={onClose}>✖</div>
                {link.Content && <link.Content />}
            </div>
            }

            { !link && <><div style={{ position:"fixed", top:10, right:30 }}>
                <MouseIcon type='move'/>
                <MouseIcon type='pan'/>
                <MouseIcon type='zoom'/>
            </div>
            <div style={{ position:"fixed", top:0, left:0, right:0, textAlign:"center" }}>
                <h1>Welcome to <span style={{ }}>Bandinopla</span>'s office!<br/>↓</h1>
            </div>
            </> }
            
            <Canvas flat camera={{ fov: 30 }}  
           >   
                <Scene openLink={onClickLink} />  
 
            </Canvas>
        </>
    )
}

type LinkType = typeof LINKS[number];

interface LinkData {
    object: THREE.Object3D
    link: LinkType
}

function getObjectsWithTooltip(object: THREE.Object3D, result: LinkData[] = []): LinkData[] {
    if (object.userData && object.userData.link!=null ) {
 
            result.push({
                object ,
                link: LINKS.find(l => l.id == object.userData.link)!
            }); 
        
    }
    object.children.forEach((child) => getObjectsWithTooltip(child, result));
    return result;
}

function Scene({ openLink }: { openLink: (link: LinkType, onClose: () => void) => void }) {
    /*@ts-ignore*/
    const { nodes, materials, scene } = useGLTF('/scene-baked.glb');
 


    const cameraControlsRef = useRef<CameraControls>(null)
    const [showTooltips, setShowTooltips] = useState(false);
 

    useEffect(() => {
        cameraControlsRef.current?.fromJSON(LINKS[0].campos, true); 
        setShowTooltips(true);
        // let getPos = ()=>{
        //     console.log( cameraControlsRef.current?.toJSON() );
        // }
        // window.addEventListener("keydown", ev => {
             
        //         getPos();
           
        // });

    }, []);

    const tooltips = useMemo(() => {

        return getObjectsWithTooltip(scene);

    }, [nodes]);

    const gotoLink = (link: LinkData) => {

        let cam = cameraControlsRef.current;
        let onCamStopsMoving = () => {

            // when the oppened content is closed...
            openLink(link.link,
                () => { // on close... 
                    cam!.enabled = true;
                    cam?.fromJSON(LINKS[0].campos, true);
                });

            cam?.removeEventListener("rest", onCamStopsMoving);
            cam!.enabled = false;
        } 
        cam?.fromJSON(link.link.campos, true);
        cam?.addEventListener("rest", onCamStopsMoving);
    }


    return <>
        <CameraControls ref={cameraControlsRef} minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />

        <primitive object={scene} ></primitive>
        <MonkeyHead/>
  

        {showTooltips && tooltips.map(o => {
            return <primitive object={o.object} key={o.link.id} onClick={() => gotoLink(o)}>
  
                <meshStandardMaterial opacity={0} attach="material" transparent/>
                <Html center visible={showTooltips} >
                    <SpeechBubbleUI tooltip={o.link.title} onClick={() => gotoLink(o)} />
                </Html>
            </primitive>
        })}

    </>
}

export default App
