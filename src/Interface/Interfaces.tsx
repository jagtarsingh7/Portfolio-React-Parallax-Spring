import { IParallax } from "@react-spring/parallax";

export interface IScrollButtonProp {
  to: number,
  page:  React.MutableRefObject<IParallax >
}

export interface IViewDetectAnimationProp {
  direction: string,
  children: JSX.Element| JSX.Element[],
  styles: string,
  speed: number,
  level: number,
  to:number,
  repeat: boolean,
}
