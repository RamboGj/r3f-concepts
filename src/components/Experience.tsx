/* eslint-disable react/no-unknown-property */
'use client'

// import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group, Mesh } from 'three'
import {
  ContactShadows,
  ContactShadowsProps,
  Environment,
  Lightformer,
  OrbitControls,
  Sky,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls, button } from 'leva'
import { Perf } from 'r3f-perf'

export function Experience() {
  const { perfVisible } = useControls({
    perfVisible: false,
  })

  const { position, color, visible } = useControls('sphere', {
    position: {
      value: { x: -2, y: 0 },
      step: 0.01,
      joystick: 'invertY',
    },
    color: '#ff0000',
    visible: true,
    clickMe: button(() => {
      console.log('Ok!')
    }),
    choice: {
      options: ['a', 'b', 'c'],
    },
  })

  const { scale } = useControls('cube', {
    scale: {
      value: 1.5,
      step: 0.01,
      min: 0,
      max: 5,
    },
  })

  const { shadowBlur, shadowColor, shadowOpacity } = useControls('Shadow', {
    shadowColor: '#4b2709',
    shadowBlur: {
      value: 2.8,
      min: 0,
      max: 10,
      step: 0.1,
    },
    shadowOpacity: {
      value: 0.4,
      max: 1,
      min: 0,
      step: 0.1,
    },
  })

  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
    useControls('env', {
      envMapIntensity: {
        value: 3.5,
        min: 0,
        max: 12,
      },
      envMapHeight: {
        value: 7,
        min: 0,
        max: 100,
      },
      envMapRadius: {
        value: 20,
        min: 10,
        max: 1000,
      },
      envMapScale: {
        value: 100,
        min: 10,
        max: 1000,
      },
    })

  // const { sunPosition } = useControls('sun', {
  //   sunPosition: {
  //     value: [1, 2, 3],
  //   },
  // })

  const cube = useRef<Mesh>(null!)
  const sphere = useRef<Mesh>(null!)
  const groupRef = useRef<Group>(null!)

  useFrame((state, delta) => {
    // cube.current.rotation.y += delta * 0.2
  })

  return (
    <>
      {perfVisible ? <Perf position="top-left" /> : null}

      <OrbitControls makeDefault />
      {/* <SoftShadows samples={17} size={10} /> */}

      {/* <AccumulativeShadows
        color="#316d39"
        opacity={0.8}
        position={[0, -0.99, 0]}
        frames={Infinity}
        temporal
        blend={100}
      >
        <RandomizedLight
          position={[1, 2, 3]}
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          bias={0.001}
        />
      </AccumulativeShadows> */}
      {/* 
      <ContactShadows
        blur={shadowBlur}
        opacity={shadowOpacity}
        color={shadowColor}
        position={[0, 0, 0]}
        scale={10}
        resolution={512}
        far={5}
        frames={1}
      /> */}

      {/* <directionalLight
        position={sunPosition}
        castShadow
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      /> */}
      {/* <ambientLight intensity={0.5} /> */}

      {/* <Sky sunPosition={sunPosition} /> */}
      {/* <Environment
        background
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale,
        }}
        preset="sunset"
        resolution={32}
        files={'./environmentMaps/the_sky_is_on_fire_2k.hdr'}
      > */}
      {/* <color args={['#000000']} attach="background" />
        <Lightformer
          position-z={-5}
          scale={10}
          color="red"
          intensity={2}
          form="ring"
        /> */}
      {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={[10, 0, 0]} />
        </mesh> */}
      {/* </Environment> */}

      {/* <group ref={groupRef}>
        <mesh
          castShadow
          position-y={1}
          ref={sphere}
          position={[position.x, position.y, 0]}
          visible={visible}
        >
          <sphereGeometry />
          <meshStandardMaterial
            color={color}
            envMapIntensity={envMapIntensity}
          />
        </mesh>

        <mesh
          castShadow
          ref={cube}
          position-x={2}
          position-y={1}
          scale={scale}
          rotation-y={Math.PI * 0.25}
        >
          <boxGeometry />
          <meshStandardMaterial
            envMapIntensity={envMapIntensity}
            color="mediumpurple"
          />
        </mesh>
      </group> */}
      {/* <mesh scale={10} position-y={0} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial
          color="greenyellow"
          envMapIntensity={envMapIntensity}
        />
      </mesh> */}
    </>
  )
}
