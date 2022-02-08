import {Routes, Route} from 'react-router-dom'
import {Home} from './views'
import data from './countries.json'

function Router(){

    return (
        <Routes>
            <Route 
                path="/:country"
                element={<Home json={data}/>}
            />

            <Route
                path='*'
                element={<h1>No existe esta página</h1>}
            />
        </Routes>
    )
}

export default Router;