import './App.css';
import video from './assets/video.mp4';
import * as THREE from 'three';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mouse: {x: 0, y: 0},
      camera: null,
      mesh: null
    }

    this.onMouseMove = this.onMouseMove.bind(this);

  }

  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setClearColor( 0xffffff, 0);
		renderer.setSize( window.innerWidth, window.innerHeight );
    this.mount.appendChild( renderer.domElement );

    const geometry = new THREE.CircleGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    this.setState({camera: camera, mesh: cube})
    scene.add( cube );

    document.addEventListener('mousemove', this.onMouseMove, false);

    const animate = function () {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render( scene, camera );
    };

    animate();

  }

  onMouseMove(event) {
    
    // Update the mouse variable
    event.preventDefault();
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = - (event.clientY / window.innerHeight) * 2 + 1;
    this.setState({mouse: {x: x, y: y}})

  
    const {camera, mesh } = this.state;
   // Make the sphere follow the mouse
    var vector = new THREE.Vector3(x, y, 0.5);
    vector.unproject( camera );
    var dir = vector.sub( camera.position ).normalize();
    var distance = - camera.position.z / dir.z;
    var pos = camera.position.clone().add( dir.multiplyScalar( distance ) );
    mesh.position.copy(pos);
    
    // Make the sphere follow the mouse
  //	mouseMesh.position.set(event.clientX, event.clientY, 0);
  };

  render() {
    return (
      <div className="App">
        <div ref={ref => (this.mount = ref)} />
        <div className="overlay">
          <video className="lightbox" autoPlay muted loop>
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="circle">
          <p>enter</p>
        </div>
        <div className="logo">
          <h1 className="logo__text">GRACE</h1>
        </div>
      </div>
    );
  }
}


export default App;
