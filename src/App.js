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
      mesh: null,
    }
    this.mount = null;
    this.canvas = null;
    this.onMouseMove = this.onMouseMove.bind(this);

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
    this.canvas = renderer.domElement;
    var lightAmb = new THREE.AmbientLight(0xffff);
    scene.add(lightAmb);

    const geometry1 = new THREE.SphereGeometry(0.7,1);
    const material1 = new THREE.MeshBasicMaterial( { color: 'white'} );
    const sphere = new THREE.Mesh( geometry1, material1 );
    scene.add( sphere );
    this.setState({camera: camera, mesh: sphere})

    document.addEventListener('mousemove', this.onMouseMove, false);

    const animate = function () {
      requestAnimationFrame( animate );

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.render( scene, camera );
    };

    animate();

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
    var vector = new THREE.Vector3(x, y, 0.5);
    vector.unproject( camera );
    var dir = vector.sub( camera.position ).normalize();
    var distance = - camera.position.z / dir.z;
    var pos = camera.position.clone().add( dir.multiplyScalar( distance ) );
    mesh.position.copy(pos);


    const text = document.getElementById('enter')
    text.style.position = 'absolute';
    text.style.left = event.clientX - 50 + 'px'
    text.style.top = event.clientY -  40+ 'px'
  };

  render() {
    return (
      <div className="App">
        <div id="enter">enter</div>
        <div ref={ref => (this.mount = ref)}>
        </div>
        <div className="overlay">
          <video className="lightbox" autoPlay muted loop>
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="logo">
          <h1 className="logo__text">GRACE</h1>
        </div>
      </div>
    );
  }
}


export default App;
