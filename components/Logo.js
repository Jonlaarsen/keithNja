// "use client"

// import { Canvas } from "@react-three/fiber"
// import { Suspense } from "react"
// import { Center, useAnimations, useGLTF } from "@react-three/drei"

// useGLTF('/postedM.gltf')

// function Logo(){
//     const {nodes, animations, scene} = useGLTF('/postedM.gltf')
//     const {actions} = useAnimations(animations, scene)
//     return(
//         <group>
//             <primitive 
//             object={scene}
//             />
//         </group>    
//     )
// }

// export default function Scene(){
//     return(
//     <Canvas gl={{antialias: true}} dpr={[1,1.5]}>
//         <directionalLight position={[-5,-5,5]} intensity={2} />
//         <Suspense fallback={null}/>
//         <Center>
//             <Logo/>
//         </Center>
//     </Canvas>
//    )
// }


// 'use client';

// import { Canvas } from '@react-three/fiber';
// import { useFrame } from '@react-three/fiber';
// import { Suspense, useRef } from 'react';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// function RotatingLogoModel() {
//   const logoRef = useRef();

//   // Rotate the logo on every frame
//   useFrame(() => {
//     if (logoRef.current) {
//       logoRef.current.rotation.y += 0.01; // Adjust rotation speed here
//     }
//   });

//   // Load your 3D model (useGLTF requires a .gltf or .glb file)
//   const { scene } = useGLTF('/postedM.gltf'); // Ensure the logo file is in the public/models directory

//   return <primitive ref={logoRef} object={scene} scale={0.5} />;
// }

// export default function RotatingLogo() {
//   return (
//     <div style={{ width: '100%', height: '400px' }}>
//       <Canvas>
//         <Suspense fallback={null}>
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} />
//           <RotatingLogoModel />
//           <OrbitControls enableZoom={false} />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }
