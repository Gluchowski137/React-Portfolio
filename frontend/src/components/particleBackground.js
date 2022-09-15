import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
  return (
    <div className="App">
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000",
                    },
                    },
                    fpsLimit: 120,
                    interactivity: {
                    events: {
                        onClick: {
                        enable: false,
                        mode: "push",
                        },
                        onHover: {
                        enable: false,
                        mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                        quantity: 4,
                        },
                        repulse: {
                        distance: 25,
                        duration: 1,
                        },
                    },
                },
                particles: {
                color: {
                    value: "#fff",
                },
                move: {
                    directions: "random",
                    distance: 150,
                    enable: true,
                    outModes: {
                    default: "out",
                    },
                    random: false,
                    speed: 0.1,
                    straight: false,
                },
                number: {
                    density: {
                    enable: true,
                    area: 800,
                    },
                    value: 150,
                },
                opacity: {
                    anim: { enable: true, opacity_min: 0.3, speed: 5, sync: false },
                    random: {
                        enable: true,
                        minimumValue: 0.3
                    }},
                twinkle: {
                    enable: true, 
                    Frequency: 0.1
                },
                shape: {
                    type: "star",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
                },
                detectRetina: true,
            }}
        />
    </div>
  );
}

export default ParticleBackground;