import {Routes, Route} from "react-router-dom"
import CountryDetails from './components'

function Router(){
    return (
        <Routes>
            <Route path="" element={ <CountryDetails/>}/>
            {/* 404  v6 */}
            <Route path="*" element={<h1>No existe la Pagina</h1>}/>
        </Routes>
    )
};

export default Router;