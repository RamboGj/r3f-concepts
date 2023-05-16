import { BlendFunction, Effect } from 'postprocessing'
import { Uniform } from 'three'

interface DrunkProps {
  frequency: number
  amplitude: number
  blendFunction: BlendFunction
}

const fragmentShader = /* glsl */ `
  uniform float frequency;
  uniform float amplitude
  uniform float offset;

  void mainUv(inout vec2 uv) {
    uv.y += sin(uv.x * frequency + offset) * amplitude;
  }

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    outputColor = vec4(0.8, 1.0, 0.5, inputColor.a);
  }
`

export default class DrunkEffect extends Effect {
  constructor({
    amplitude,
    frequency,
    blendFunction = BlendFunction.DARKEN,
  }: DrunkProps) {
    super('DrunkEffect', fragmentShader, {
      uniforms: new Map([
        ['frequency', new Uniform(frequency)],
        ['amplitude', new Uniform(amplitude)],
        ['offset', new Uniform(0)],
      ]),
      blendFunction,
    })
  }

  update(renderer, inputBuffer, deltaTime) {
    if (typeof this.uniforms?.get('offset')?.value !== 'undefined') {
      this.uniforms.get('offset').value += deltaTime
    }
  }
}
