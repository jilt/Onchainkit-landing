/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public\models\items\draum.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Draum(props) {
  const { nodes, materials } = useGLTF('/models/items/draum.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.draumstafur.geometry} material={materials['Material.001']} />
    </group>
  )
}

useGLTF.preload('models/items/draum.glb')
