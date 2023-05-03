/* eslint-disable react/no-unknown-property */
import { useGLTF, useAnimations } from '@react-three/drei'
import { useControls } from 'leva'
import { useEffect } from 'react'
import { AnimationAction } from 'three'

export function Fox() {
  const foxModel = useGLTF('./Fox/glTF/Fox.gltf')
  const animations = useAnimations(foxModel.animations, foxModel.scene)

  const { animationName } = useControls('fox', {
    animationName: {
      options: animations.names,
    },
  })

  useEffect(() => {
    const action = animations.actions[animationName]
    action?.reset().fadeIn(0.5).play()

    return () => {
      action?.fadeOut(0.5)
    }

    // setTimeout(() => {
    //   animations.actions.Walk?.play()
    //   animations.actions.Walk?.crossFadeFrom(
    //     animations.actions.Run as AnimationAction,
    //     1,
    //     true,
    //   )
    // }, 2000)
  }, [animationName])

  return (
    <primitive
      scale={0.02}
      position={[-2.5, -1.5, 1]}
      rotation-y={0.3}
      object={foxModel.scene}
    />
  )
}

useGLTF.preload('./Fox/glTF/Fox.gltf')
