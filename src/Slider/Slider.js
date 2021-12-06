import React from 'react';
import './Slider.css'
import img1 from '../assets/image1.jpeg';
import img2 from '../assets/image2.jpeg';
import * as THREE from 'three';
import fragmentShader from './fragment.fs'
import vertexShader from './vertex.vs'

class Slider extends React.Component {
    
    constructor(props) {
        super(props);
        this.camera = null; 
        this.scene = null; 
        this.renderer = null;
        this.geometry = null; 
        this.material = null; 
        this.mesh = null;
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
        this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	    this.camera.position.z = 1;

        this.scene = new THREE.Scene();

        const textureLoader = new THREE.TextureLoader()
        const texture = textureLoader.load(img1)
        this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32)
        this.material = new THREE.RawShaderMaterial({
            vertexShader,
            fragmentShader,
            transparent: true,
            uniforms: {
                uTexture: {value: texture}
            }
        });

        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.scene.add( this.mesh );

        const canvas = document.querySelector('canvas.webgl')
        this.renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );
        const width = window.innerWidth - canvas.parentElement.previousElementSibling.offsetWidth;
        this.renderer.setSize( width, window.innerHeight );
        this.renderer.setAnimationLoop( this.animation );
    }

    animation (time) {
        this.mesh.rotation.x = time / 2000;
        this.mesh.rotation.y = time / 1000;

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
