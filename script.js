// Steps for creating a 3d scene 

const scene = new THREE.Scene()

// set up camera with perspective projection
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//set up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//create obj
const geometry = new THREE.BoxGeometry();
const texture = new THREE.TextureLoader().load('https://images.unsplash.com/photo-1616198866341-8747984a0bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80');
const material = new THREE.MeshBasicMaterial( { map: texture } );
const cube_mesh = new THREE.Mesh( geometry, material );
scene.add( cube_mesh );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	cube_mesh.rotation.x +=0.04
	cube_mesh.rotation.y +=0.04
}

animate();