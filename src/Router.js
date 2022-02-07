
import {Routes, Route} from 'react-router-dom';
import CountryDetails from './components/CountryDetails';



function Router(){
    return(
        <Routes>
            <Route path="/:id" element={ <CountryDetails/>}/>
            <Route path="*" element={<h1> No existe una pagina bro</h1>}/>
        </Routes>
    )
}

export default Router