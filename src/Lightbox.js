// import './App.css';
import video from './assets/video.mp4';
import * as THREE from 'three';
import React from 'react';

class Lightbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mouse: {x: 0, y: 0},
      camera: null,
      mesh: null,
      renderer: null,
      classes: 'Lightbox'
    }
    this.mount = null;
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setClearColor( 'black', 0.15);
		renderer.setSize( window.innerWidth, window.innerHeight );
    // https://blog.bitsrc.io/starting-with-react-16-and-three-js-in-5-minutes-3079b8829817
    this.mount.appendChild( renderer.domElement );
    var lightAmb = new THREE.AmbientLight(0xffff);
    scene.add(lightAmb);

    const geometry1 = new THREE.SphereGeometry(0.7,1);
    const material1 = new THREE.MeshBasicMaterial( { color: 'white'} );
    const sphere = new THREE.Mesh( geometry1, material1 );
    scene.add( sphere );
    this.setState({camera: camera, mesh: sphere, renderer})

    document.addEventListener('mousemove', this.onMouseMove, false);

    window.addEventListener('resize', this.onResize, false)

    const animate = function () {
      requestAnimationFrame( animate );
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.render( scene, camera );
    };

    animate();

  }

  onResize() {
    // Update camera
    const { camera, renderer } = this.state;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  onMouseMove(event) {
    // adapted from https://jsfiddle.net/atwfxdpd/10/
    // Update the mouse variable
    event.preventDefault();
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = - (event.clientY / window.innerHeight) * 2 + 1;
    this.setState({mouse: {x: x, y: y}})
  
    const {camera, mesh } = this.state;
    // Make the sphere follow the mouse
    const vector = new THREE.Vector3(x, y, 0.5);
    vector.unproject( camera );
    const dir = vector.sub( camera.position ).normalize();
    const distance = - camera.position.z / dir.z;
    const pos = camera.position.clone().add( dir.multiplyScalar( distance ) );
    mesh.position.copy(pos);


    const text = document.getElementById('enter')
    text.style.position = 'absolute';
    text.style.left = event.clientX - 50 + 'px'
    text.style.top = event.clientY -  40+ 'px'
  };

  onClick = () => {
      // makes sense to remove it here rather than later when component is being unmounted in lifecycle method
      document.getElementById("logo").className = 'logo-transformed'
      this.setState({classes: 'Lightbox animated'})
      document.removeEventListener('mousemove', this.onMouseMove, false);
      this.props.parentCallback();
  }

  render() {
    return (
    <div className={this.state.classes} onClick={this.onClick}>
        <div id="enter">enter</div>
        <div ref={ref => (this.mount = ref)}>
        </div>
        <div className="overlay">
          <video className="lightbox" autoPlay muted loop>
              <source src={video} type="video/mp4"/>
              Your browser does not support the video tag.
          </video>
        </div>
    </div>
    );
  }
}


export default Lightbox;
