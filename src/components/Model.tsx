/* eslint-disable react/no-unknown-property */
'use client'

import { useGLTF, Clone } from '@react-three/drei'

export function Model() {
  const model = useGLTF('./hamburger.glb')

  return (
    <>
      <Clone object={model.scene} scale={0.35} position-x={4} />
      <Clone object={model.scene} scale={0.35} position-x={0} />
      <Clone object={model.scene} scale={0.35} position-x={-3} />
    </>
  )
}

useGLTF.preload('./hamburger.glb')
