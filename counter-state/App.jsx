import React, {useState} from "react"

export default function App() {

    const [count, setCount] = useState(0)

    function increaseOnClick(){
        setCount(prevCount => prevCount + 1)
    }

    function decreaseOnClick(){
        setCount(prevCount => prevCount - 1)
    }

    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={decreaseOnClick} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={increaseOnClick} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
