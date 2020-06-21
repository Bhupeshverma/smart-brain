import React, { useContext } from 'react'
import Particles from 'react-particles-js';
import { AppContext } from '../Context/AppProvider';


export default function Particle() {
    const {currentTheme} = useContext(AppContext)
    return (
       
        <Particles
            params={{
                "fps_limit": 28,
                "particles": {
                    "number": {
                        "value": 200,
                        "density": {
                            "enable": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 30,
                        "opacity": 0.4,
                        "color": currentTheme.textColor
                    },
                    "move": {
                        "speed": 1
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "opacity_min": 0.05,
                            "speed": 2,
                            "sync": false
                        },
                        "value": 0.4
                    },
                    "color": {
                        "value": currentTheme.textColor
                    },
                    
                },
                "polygon": {
                    "enable": true,
                    "scale": 0.5,
                    "type": "inline",
                    "move": {
                        "radius": 10
                    },
                    "url": "/brain.svg",
                    "inline": {
                        "arrangement": "equidistant"
                    },
                    "draw": {
                        "enable": true,
                        "stroke": {
                            "color": "rgba(255, 255, 255, .2)"
                        }
                    }
                },
                "retina_detect": false,
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "size": 6,
                            "distance": 40
                        }
                    }
                }
            }} className="particles" />
    )
}
