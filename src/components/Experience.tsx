/* eslint-disable react/no-unknown-property */
'use client'

import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'

// import { Model } from './Model'
import { Placeholder } from './Placeholder'
import { Hamburger } from './Hamburguer'
import { Fox } from './Fox'

export function Experience() {
  const { perfVisible } = useControls({
    perfVisible: false,
  })

  return (
    <>
      {perfVisible ? <Perf position="top-left" /> : null}

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5} />

      <mesh
        receiveShadow
        scale={10}
        position={[0.5, -1.5, -1.5]}
        rotation-x={-Math.PI * 0.5}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <Suspense fallback={<Placeholder />}>
        <Hamburger scale={0.35} position-y={-1} />
        <Fox />
      </Suspense>
    </>
  )
}
