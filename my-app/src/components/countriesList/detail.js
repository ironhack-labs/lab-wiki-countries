

import countries from '../../countries.json'
export default props => {

    const copy = [...countries]
    const path = props.location.pathname.substring(1)
    let name = ''
    let capital = ''
    let area = ''
    const borders=[]
    copy.filter(elm => {
        if (elm.cioc === path|| elm.cca3===path) {
            console.log(elm)
            name = elm.name.common
            borders.push(elm.borders)
            capital = elm.capital
            area=elm.area

        } else {
            console.log('NAI')
        }




    })
  
        return (
            <>
                <h2>País</h2>
                <p>{name}</p>
                <h3>iniciales seguidas de los borders</h3>
                {borders}
                <br/>
            <h3>Capital</h3>
                {capital}
                <h3>Área</h3>
                {area}
            </>
        )
}