import React from 'react';
import './Slider.css'
import img1 from '../assets/image1.jpeg';
import img2 from '../assets/image2.jpeg';
import * as THREE from 'three';
import fragmentShader from './fragment.js'
import vertexShader from './vertex.js'

class Slider extends React.Component {
    
    constructor(props) {
        super(props);
        this.camera = null; 
        this.scene = null; 
        this.renderer = null;
        this.geometry = null; 
        this.material = null; 
        this.mesh = null;
        this.time = 0;
        this.progress = 0;
        this.state = {
            currentImg: img1
        }
        this.animation = this.animation.bind(this)
    }

    componentDidMount() {
        this.initContainer();
        window.addEventListener('keydown', (e) => { //change it to scroll by editing sections
            console.log('scrolled')
            this.setState({currentImg: img2})
        });
        window.addEventListener('resize', () =>
        {
            // Update camera
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix()

            // Update renderer
            this.renderer.setSize(window.innerWidth, window.innerHeight)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

    }

    initContainer() {
        const canvas = document.querySelector('canvas.webgl')
        const width = window.innerWidth - canvas.parentElement.previousElementSibling.offsetWidth;

        this.scene = new THREE.Scene();

        const textureLoader = new THREE.TextureLoader()
        const texture = textureLoader.load(img1)
        const texture2 = textureLoader.load(img2)
        // this.geometry = new THREE.SphereGeometry( 5, 120, 120 );
        // this.geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
        this.geometry = new THREE.PlaneGeometry(1, 1)
        this.material = new THREE.RawShaderMaterial({
            side: THREE.DoubleSide,
            vertexShader,
            fragmentShader,
            transparent: true,
            uniforms: {
                uTexture: {value: texture},
                uTexture2: {value: texture2},
                time: {type: 'f', value: this.time},
                progress: { type: 'f', value: 0 },
                pixels: {type: 'v2', value: new THREE.Vector2(width, window.innerHeight)}
            }
        });

        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.scene.add( this.mesh );

        this.renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );
        
        this.camera = new THREE.PerspectiveCamera( 70, width / window.innerHeight, 0.01, 10 );
	    this.camera.position.set(0, 0, 1)
        const dist = this.camera.position.z - this.mesh.position.z
        this.camera.fov = 2 * (180 / Math.PI) * Math.atan(1.0 / (2 * dist))
        this.mesh.scale.x = width / window.innerHeight
        this.camera.updateProjectionMatrix()
        
        this.renderer.setSize( width, window.innerHeight );
        this.renderer.setAnimationLoop( this.animation );
    }

    animation (time) {
        // this.mesh.rotation.x = time / 2000;
        // this.mesh.rotation.z = time / 1000;
        this.time += 0.05
        this.progress *= 0.7 + 1
        this.material.uniforms.time.value = this.time
        this.renderer.render( this.scene, this.camera );
    }

    render() {
        return (
            <div className='slider'>
                <canvas className="webgl"></canvas>
                {/* <img className='slider__img' src={this.state.currentImg}/> */}
            </div>

        )
    }
}

export default Slider;
