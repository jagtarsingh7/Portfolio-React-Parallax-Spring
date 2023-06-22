import { IParallaxLayer } from "@react-spring/parallax"
import { Controller } from "@react-spring/web"

export default interface IParallax {
    config: any
    horizontal: boolean
    busy: boolean
    space: number
    offset: number
    current: number
    controller: Controller<{ scroll: number }>
    layers: Set<IParallaxLayer>
    container: React.MutableRefObject<any>
    content: React.MutableRefObject<any>
    scrollTo(offset: number): void
    update(): void
    stop(): void
  }
  