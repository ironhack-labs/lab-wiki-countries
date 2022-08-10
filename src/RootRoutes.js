import {Route,Routes} from 'react-router-dom'
import {CountryDetails} from './components'

function RootRoutes(){
    return (
        <Routes>

            <Route path="/:id" element={<CountryDetails/>}/>
        </Routes>
    )
}

export default RootRoutes;