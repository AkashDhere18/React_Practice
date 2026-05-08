import React, { useEffect, useState } from 'react'

const RandomJoke = () => {
    const [joke, setJoke] = useState('')

    const fetchJoke = async () => {
        try {
            let response = await fetch('https://official-joke-api.appspot.com/random_joke')

            let data = await response.json()

            setJoke(data)

        } catch (error) {
            console.log('Error')
        }
    }

    useEffect(() => {
        fetchJoke();
    }, [])

    return (
        <>
            <h1>RandomJoke</h1>
            <div>
                <p>{joke.setup}</p>
                <p>{joke.punchline}</p>
                <button onClick={fetchJoke}>Get new joke</button>
            </div>
        </>
    )
}

export default RandomJoke