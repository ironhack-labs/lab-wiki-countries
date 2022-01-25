import { Link } from 'react-router-dom';

export const CountriesList = ({ countries }) => {

    return (
        <div className='CountriesList' >
            <div className="row">
                {/* <!-- Countries List (Bootstrap column) --> */}
                <div className='list-group px-2'
                    style={{ width: '300px', height: 'calc(100vh - 88px)', overflow: 'auto' }}>

                    {countries.map((country) =>
                        <div className='list-group-item-action' key={`${country._id}_`}>
                            <Link to={`/country/${country.alpha3Code}`} className='list-group-item list-group-item-action'>
                                <p><img style={{ marginLeft: '80px' }} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={'text'} key={country._id} /></p>
                                <p style={{ textAlign: 'center' }}> {country.name.common} </p>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div >

    )
}

