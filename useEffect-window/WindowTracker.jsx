import React, {useEffect, useState} from "react"

export default function WindowTracker() {
    const [windowWith, setWindowWith] = useState(window.innerWidth)


    // Dans ce cas la fonction watchWindowWidth est appelé alors que le composant WindowTracker n'est pas rendu
    // Car la fonction React.useEffect() utilise l'objet window du DOM qui est utilisé hors du composant
    // Il est donc nécessaire de retourner une useEffect cleanup function afin de retirer le listener
    useEffect(() => {
        function watchWindowWidth() {
            console.log("Resized")
            setWindowWith(window.innerWidth)
        }
        window.addEventListener("resize", watchWindowWidth)
        return () => {
            console.log("Cleanin up...")
            window.removeEventListener("resize", watchWindowWidth)
        }
    }, [])

    return (
        <h1>Window width: {windowWith}</h1>
    )
}
