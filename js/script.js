const THREE = window.MINDAR.IMAGE.THREE;
import {mockWithVideo, mockWithImage} from '../libs/camera-mock.js';

document.addEventListener('DOMContentLoaded', () => {
    const start = async () => {

        //mockWithVideo("../assets/mock-videos/banner1.mp4");
        mockWithImage("../assets/mock-videos/banner.png");

        // navigator.mediaDevices.getUserMedia = () => {
        //     return new Promise((resolve, reject) => {
        //         const video = document.createElement("video");
        //         video.setAttribute("src", "../assets/mock-videos/banner1.mp4");
        //         video.setAttribute("loop", "");

        //         video.oncanplay = () => {
        //             video.play();
        //             resolve(video.captureStream());
        //         }
        //     });
        // }

        const mindarThree = new window.MINDAR.IMAGE.MindARThree({
            container: document.body,
            imageTargetSrc: '../assets/targets/banner.mind'
        });
        const {renderer, scene, camera} = mindarThree;
    
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({color: 0x0000ff, transparent: true, opacity: 0.5 });
        const plane = new THREE.Mesh(geometry, material);
    
        const anchor = mindarThree.addAnchor(0);
        anchor.group.add(plane); // THREE.Group
    
        await mindarThree.start();
        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });
    }
    start();
});