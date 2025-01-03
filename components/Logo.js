"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Center, useAnimations, useGLTF } from "@react-three/drei"

useGLTF('/postedM.gltf')

function Logo(){
    const {nodes, animations, scene} = useGLTF('/postedM.gltf')
    const {actions} = useAnimations(animations, scene)
    return(
        <group>
            <primitive 
            object={scene}
            />
        </group>    
    )
}

export default function Scene(){
    return(
    <Canvas gl={{antialias: true}} dpr={[1,1.5]}>
        <directionalLight position={[-5,-5,5]} intensity={2} />
        <Suspense fallback={null}/>
        <Center>
            <Logo/>
        </Center>
    </Canvas>
   )
}