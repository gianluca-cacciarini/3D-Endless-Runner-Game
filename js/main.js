window.onload = async () => {
    const scene = new THREE.Scene();
    // ** Set up the camera ***
    const camera = new THREE.PerspectiveCamera(
        80, // vertical field of view
        window.innerWidth / window.innerHeight, // aspect ratio
        0.1, // near plane
        200 //far plane
    );

    window.addEventListener('resize', () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(newWidth, newHeight);
    });

    // *** Set up lights ***
    // The ambient light is shining from every direction, we use it to have a base color
    // for our objects
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    /* With the position we define the direction of these light rays
    from all the parallel rays we define one, this specific light ray will
    shine from the position we define to the 0,0,0 coordinate. The rest will
    be in parallel . By setting the position of the light we determine which side
    of our objects will be brightest and which ones stay in the dark */
    dirLight.position.set(0, 100, -10);
    scene.add(dirLight);
    
    // *** Set up the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );

    const gameInstance = new Game(scene, camera);

    function animate() {
        requestAnimationFrame(animate);
        gameInstance.update();
        renderer.render(scene, camera);
    }

    animate();
}


