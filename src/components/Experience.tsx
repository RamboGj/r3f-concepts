/* eslint-disable react/no-unknown-property */
'use client'

// import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group, Mesh } from 'three'
import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'

export function Experience() {
  const { perfVisible } = useControls({
    perfVisible: false,
  })

  const cube = useRef<Mesh>(null!)
  const sphere = useRef<Mesh>(null!)
  const groupRef = useRef<Group>(null!)

  useFrame((state, delta) => {
    cube.current.rotation.y += delta
  })

  return (
    <>
      {perfVisible ? <Perf position="top-left" /> : null}

      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group ref={groupRef}>
        <mesh ref={sphere} position={[-2, -0.5, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>

        <mesh
          ref={cube}
          position={[2, -0.5, 0]}
          scale={1.5}
          rotation-y={Math.PI * 0.25}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>
      <mesh scale={10} position={[0.5, -1.5, -1.5]} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  )
}
