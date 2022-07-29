import { Link } from "react-router-dom";

function CountriesList(props) {

    const listStyle = {'maxHeight': '90vh', 'overflow': 'scroll'};

    return (
        <div className="col-5" style={listStyle} >
            <div className="list-group">
                {props.data.map((element) => {
                    return (
                        <>
                            <img src={'https://flagpedia.net/data/flags/icon/72x54/' + element.alpha2Code.toLowerCase() + '.png'} className="col-1"></img>
                            <Link to={'/' + element.alpha3Code} key={element.alpha3Code} className="list-group-item list-group-item-action"> {element.alpha3Code} </Link>
                        </>
                    )
                })
                }
            </div>
        </div>
    )
}

export default CountriesList;