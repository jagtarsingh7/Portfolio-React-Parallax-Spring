import { useInView, animated } from "@react-spring/web"
import { IViewDetectAnimationProp } from "../Interface/Interfaces"

export default function ViewDetectAnimation(props:IViewDetectAnimationProp) {

    const { direction, children, styles, speed, level,to, repeat}=props
    const [ref, animationApi] = useInView(
        () => ({
            to: { opacity: 1, transform: `translate${direction}(${to?to:0})` },
            from: { opacity: 0, transform: `translate${direction}(${level ? level : 50}%)` },
            config: { duration: speed? speed: 500 },
          
        }),
        {
            once: repeat?repeat:false,
        }
    )

    return (
        <>  
            <animated.div ref={ref} style={animationApi} className={styles}  >
                {children}
            </animated.div>

        </>
    )
}

