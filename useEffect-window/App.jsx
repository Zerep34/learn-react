import WindowTracker from "./WindowTracker"
import {useState} from "react";

export default function App() {

    const [show, setShow] = useState(true)

    function toggle(){
        setShow(!show)
    }
    
    return (
        <main className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </main>
    )
}
