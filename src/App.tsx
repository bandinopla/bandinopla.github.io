
import './App.css'

import { porfolio, $with } from './data';


import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import GlitchText from './objects/GlitchText';

type PortfolioItem = typeof porfolio[number];
const techTitles = ['Full-Stack dev', 'Frontend Engineer', 'Backend Engineer', 'Creative dev', 'Product Engineer', '3D Developer', '3D Artist'];



function Modal({ item, onClose }: { item: PortfolioItem, onClose: () => void }) {
    // 'item' is intentionally unused for now, will be used for modal content later

    useEffect(()=>{

        document.body.classList.add("noscroll")
        return ()=>document.body.classList.remove("noscroll")

    }, [])

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'black',
            color: 'white',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            overflow:"auto",
            paddingBottom: 30
        }}>
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: 10,
                    right: 30,
                    fontSize: '2.5rem',
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    zIndex: 1001,
                }}
                aria-label="Close modal"
            >
                ×
            </button>
            <div style={{ padding: 20, paddingTop: 80 }} className='modal-body'>
                <div className='modal-cover'>
                {item.cover && <img src={item.cover} style={{ marginBottom: 20 }} />}
                {item.youtube && (
                    <div style={{ marginBottom: 20 }}>
                        <iframe
                            width="560"
                            height="315"
                            src={item.youtube.replace("watch?v=", "embed/")}
                            title={item.title}
                            allowFullScreen={true}
                            style={{ maxWidth: "100%", width: "100%", aspectRatio: "16/9", borderRadius: 8 }}
                        ></iframe>
                    </div>
                )}
                </div>
                <h1>{item.title}</h1>
                <div className='mb20' style={{ whiteSpace: "pre-line" }}>{item.desc ?? "---"}</div>
                <div className='mb20' style={{ whiteSpace: "pre-line" }}>
                    <strong>What did I do?</strong> {item.did ?? "---"}
                </div>

                <div className='tools mb20'>
                    {
                        item.tools.map(tool => <a href={tool.url} target='_blank' key={tool.url}>
                            {Object.entries($with).find(entry => entry[1].url == tool.url)?.[0]}
                        </a>)
                    }
                </div>

                {item.links && <ul>
                    {item.links.map(link => <li key={link.url}><a href={link.url} target='_blank'>{link.name}</a></li>)}
                </ul>}
            </div>
        </div>
    );
}

function App() {
    const [modalItem, setModalItem] = useState<PortfolioItem | null>(null);

    
    useLayoutEffect(()=>{
        const email = "pabloba"+"ndinopla" + "@g"+"mai"+"l.com";
        const el = document.getElementById("email-link");
        if (el) {
            el.setAttribute("href", "mailto:" + email); 
        }
    }, [])

    return (
        <>
            <div className='header'>
                <h1 className=' '>
					I'm a <GlitchText words={techTitles} />
				</h1>
                <h2 className='mb20'>
                    Building end-to-end web experiences: reactive frontends, immersive 3D visualizations, and seamless backend service integrations. 
                </h2>
                <p>
                    <a href='https://github.com/bandinopla' target='_blank'>Github</a>
                    <a href='https://x.com/bandinopla' target='_blank'>@bandinopla</a>
                    <a href='https://www.artstation.com/bandinopla' target='_blank'>ArtStation</a>
					<a href='https://sketchfab.com/pablobandinopla/models' target='_blank'>Sketchfab</a>
                    <a href='https://medium.com/@pablobandinopla' target='_blank'>Articles</a>
                    <a id="email-link" target='_blank'>Email</a>
                </p>
            </div>
            <div className="thumbnail-row">
                {porfolio.slice(0,4).map(item => (
                    <div
                        className="thumbnail"
                        key={item.id}
                        onClick={() => setModalItem(item)}
                    >
                        <VideoThumbnail id={item.id}/> 
                        <div className='foot'>
                            <div className="thumbnail-title">{item.title}</div>
                            <div className="thumbnail-subtitle">{item.what}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="thumbnail-row">
                {porfolio.slice(4).map(item => (
                    <div
                        className="thumbnail"
                        key={item.id}
                        onClick={() => setModalItem(item)}
                    >
                        <VideoThumbnail id={item.id}/> 
                        <div className='foot'>
                            <div className="thumbnail-title">{item.title}</div>
                            <div className="thumbnail-subtitle">{item.what}</div>
                        </div>
                    </div>
                ))}
            </div>
            {modalItem && (
                <Modal item={modalItem} onClose={() => setModalItem(null)} />
            )}

<div className='header'>
            <h2 className='mb60'>
                    Looking for my next creative challenge!
                </h2> 
                </div>
        </>
    );
}

function VideoThumbnail({ id }:{ id:string }) {
    const [playVideo, setPlayVideo] = useState(false);
    const vref = useRef<HTMLVideoElement>(null);

    useEffect(()=>{

        if( vref.current )
        {
            const video = vref.current;
            if( playVideo )
            { 
                video.play().catch(e => console.log("Play failed:", e));
            }
            else 
            {
                video.pause();
                video.currentTime = 0;
            }
        }

    }, [playVideo])

    useLayoutEffect(() => {
        const unsubs: VoidFunction[] = [];

        // Helper to detect touch device
        const isTouchDevice = () => {
            return (
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                // @ts-expect-error: msMaxTouchPoints is for legacy IE/Edge support
                navigator.msMaxTouchPoints > 0
            );
        };

        const video = vref.current!;

        // --- Mobile: play when near center of viewport ---
        let lastPlaying = false;
        const threshold = 200; // px from center

        function checkAndToggleVideo() {
            if (!isTouchDevice() || !video) return;
            const rect = vref.current!.getBoundingClientRect();
            const centerY = window.innerHeight / 2;
            const elemY = rect.top + rect.height / 2;
            if (Math.abs(elemY - centerY) < threshold) {
                if (!lastPlaying) {
                    setPlayVideo(true)
                    //video.play().catch(e => console.log("Play failed:", e));
                    lastPlaying = true;
                }
            } else {
                if (lastPlaying) {
                    setPlayVideo(false)
                    //video.pause();
                    //video.currentTime = 0;
                    lastPlaying = false;
                }
            }
        }

        // --- Desktop: play on hover ---
        const onMouseEnter = () => {
            if (isTouchDevice()) return;
            if (video) {
                //video.play().catch(e => console.log("Play failed:", e));
                setPlayVideo(true)
            }
        };
        const onMouseLeave = () => {
            if (isTouchDevice()) return;
            if (video) {
                //video.pause();
                //video.currentTime = 0;
                setPlayVideo(false)
            }
        };

        if (isTouchDevice()) {
            window.addEventListener('scroll', checkAndToggleVideo);
            window.addEventListener('resize', checkAndToggleVideo);
            // Initial check
            setTimeout(checkAndToggleVideo, 100);
            unsubs.push(() => window.removeEventListener('scroll', checkAndToggleVideo));
            unsubs.push(() => window.removeEventListener('resize', checkAndToggleVideo));
        }

        vref.current!.addEventListener('mouseenter', onMouseEnter as EventListener);
        vref.current!.addEventListener('mouseleave', onMouseLeave as EventListener);

        unsubs.push(() => vref.current!.removeEventListener('mouseenter', onMouseEnter as EventListener));
        unsubs.push(() => vref.current!.removeEventListener('mouseleave', onMouseLeave as EventListener));


        return () => {
            unsubs.forEach(unsub => unsub());
        };
    });

    return <div className='vid'>
            <video ref={vref} loop muted playsInline poster={`thumbnails/${id}.jpg`}>
                { playVideo && <source src={`thumbnails/${id}.mp4`} type="video/mp4" />}
           </video>
           </div>
}

export default App
