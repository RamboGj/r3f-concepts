/* eslint-disable react/no-unknown-property */
import { useAnimations, useFBX } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Mesh } from 'three'

export function Figure() {
  const fbx = useFBX('/Rapping.fbx')

  const figure = useRef<Mesh>(null!)

  const { actions } = useAnimations(fbx.animations, figure)

  useEffect(() => {
    console.log('actions', actions)
    actions.CINEMA_4D_Main?.play()
  }, [])

  return (
    <mesh ref={figure}>
      <primitive object={fbx} />
    </mesh>
  )
}
