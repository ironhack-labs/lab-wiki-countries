import {createContext, useState, useEffect} from "react"
import axios from 'axios'

const DataContext = createContext()

function DataWrapper({children}) {
    const [allData, setAllData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries`)
            setAllData(response.data)
        }catch (error) {
            console.log(error)
        }
    }

    return(
        <DataContext.Provider value={{allData, setAllData}}>
            {children}
        </DataContext.Provider>
    )
}

export {
    DataWrapper,
    DataContext
}