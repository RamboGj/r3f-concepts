/* eslint-disable react/no-unknown-property */
import { forwardRef } from 'react'
import DrunkEffect from './DrunkEffect'
import { BlendFunction } from 'postprocessing'

interface DrunkProps {
  blendFunction: BlendFunction
  frequency: number
  amplitude: number
}

export default forwardRef(function Drunk(props: DrunkProps, ref) {
  const effect = new DrunkEffect(props)

  return <primitive ref={ref} object={effect} />
})
