import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    function toggle(id) {
        setPads(prevPads =>
            prevPads.map(item => {
                return item.id === id ? {...item, on: !item.on} : item
            }))
    }

    const buttonElements = pads.map(pad => (
        <Pad
            key={pad.id}
            id={pad.id}
            color={pad.color}
            on={pad.on}
            toggle={toggle}
        />
    ))

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
            {/*<button className="all-off" onClick={turnAllPadsOff}>Turn All Off</button>*/}
        </main>
    )
}
