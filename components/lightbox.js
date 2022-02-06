import * as THREE from 'three';
import React from 'react';
import styles from './lightbox.module.css'

class Lightbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mouse: {x: 0, y: 0},
      camera: null,
      mesh: null,
      renderer: null,
      classes: 'lightbox'
    }
    this.mount = React.createRef();
    this.rootElement = React.createRef();
    this.enterElement = React.createRef();
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onResize = this.onResize.bind(this);
    this.isPhone = this.isPhone.bind(this);
  }

  isPhone() {
    return window.screen.width < 640
  }

  componentDidMount() {
    if(this.isPhone()) {
      setTimeout(() => {
        this.props.parentCallback();
      }, 3000);
      return;
    }
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setClearColor( 'black', 0.15);
		renderer.setSize( window.innerWidth, window.innerHeight );
    // https://blog.bitsrc.io/starting-with-react-16-and-three-js-in-5-minutes-3079b8829817
    this.mount.current.appendChild( renderer.domElement );
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


    const text = this.enterElement.current
    text.style.position = 'absolute';
    text.style.left = event.clientX - 50 + 'px'
    text.style.top = event.clientY -  40+ 'px'
  };

  onClick = () => {
      // makes sense to remove it here rather than later when component is being unmounted in lifecycle method
      document.getElementById("logo").className = 'logo-transformed'
      this.rootElement.current.classList.add('animated')
      document.removeEventListener('mousemove', this.onMouseMove, false);
      this.props.parentCallback();
  }

  render() {
    const videoDiv = (
      <div className={styles.overlay}>
      <video className={styles.lightbox} autoPlay muted loop>
          <source src='/assets/video.mp4' type="video/mp4"/>
          Your browser does not support the video tag.
      </video>
      </div>
    )
    return (
      <>
      {/* mobile */}
      <div className={`sm:hidden ${styles.transitionLightbox}`}>
        <div className={`tracking-[.5em] z-1 text-white text-6xl ${styles.centre}`}>GRACE</div>
        {videoDiv}
      </div>
      {/* desktop */}
      <div className={`${styles.desktopLightbox}  ${styles.clickable}`} onClick={this.onClick} ref={this.rootElement}>
          <div className={styles.enter} ref={this.enterElement}>enter</div>
          <div ref={this.mount}></div>
          {videoDiv}
      </div>
      </>
    )
  }
}


export default Lightbox;
