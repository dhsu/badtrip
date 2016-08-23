import THREE from "three";

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // fov, aspect ratio, near, far
camera.position.z = 30;

let scene = new THREE.Scene();

let img = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('images/yin_yang.jpg')});
img.map.needsUpdate = true; // ???

let plane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), img);
scene.add(plane);

let render = function () {
  requestAnimationFrame(render);

  plane.rotation.z -= 0.01;
  plane.rotation.x -= 0.01;
  plane.rotation.y -= 0.01;

  renderer.render(scene, camera);
};

render();