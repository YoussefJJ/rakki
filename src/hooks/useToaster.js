import { useState } from "react"

export function useToaster () {
    const [show, setShow] = useState(false)
    const [tOut, setTOut] = useState(null)
    
    const showToaster = () => {
        if (tOut) {
            clearTimeout(tOut)
            setTOut(null)
        }
        setShow(true)
        console.log("here")
        const timeout = setTimeout(() => {
            setShow(false)
        }, 3000)
        setTOut(timeout)
    }

    return [show, showToaster]
}