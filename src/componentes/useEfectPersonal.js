import { useState, useEffect } from 'react';

const useEfectPersonal = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const miPeticion = async (url) => {
            try {
                let response = await fetch(url)
                let json = await response.json()

                if (!response.ok && response.status !== 200){
                    throw new Error ("Hubo un error en la petición 🤔")
                }

                json.results.forEach(el => {

                    let producto = {
                        price: el.price,
                        name: el.title,
                        image: el.thumbnail,
                        currency_id: el.currency_id,
                        id: el.id
                    }

                    setData(data => [...data, producto])
            })
            } catch (error) {
                setError(true)
                console.log(error)
            }
        }

        miPeticion(url)
    },[url])

    return {data, error}
}

export {useEfectPersonal}