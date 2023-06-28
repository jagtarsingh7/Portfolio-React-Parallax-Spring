import { IScrollButtonProp} from "../Interface/Interfaces"

export default function ScrollButton(props:IScrollButtonProp)
{

    const {to, page}=props
    
    const scroll = (offset:number) => {
        if (page.current) {
            page.current.scrollTo(offset)
        }
    }
    return(
       
                <svg
                className="h-7 w-7 mt-20 shrink-0 transition duration-300 animate-bounce group-open:-rotate-180 z-50 text-blue-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={()=>scroll(to)}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                />
            </svg> 
          

            
        
    )
}