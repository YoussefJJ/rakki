import { useState } from "react"

export function useToaster () {
    const [show, setShow] = useState(false)
    
    const showToaster = () => {
        setShow(true)
        console.log("here")
        setTimeout(() => {
            setShow(false)
        }, 3000)
    }

    return [show, showToaster]
}