import {Routes, Route} from 'react-router-dom'
import {Home} from './views'

function Router(){
    return (
        <Routes>
            <Route 
                path="/:country"
                element={<Home/>}
            />

            <Route
                path='*'
                element={<h1>No existe esta página</h1>}
            />
        </Routes>
    )
}

export default Router;