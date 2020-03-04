import React ,{Component} from 'react';
import CountrieItem from './CountrieItem'
class CountryList extends Component {
    state ={
        countryList : this.props.countries
    }
  /*   deleteMovieHandler = id =>{
        const moviesCopy = [...this.state.movies];
        const movieIndex = moviesCopy.findIndex( item => item.id === id);
        moviesCopy.splice(movieIndex , 1);
        this.setState({
            movies: moviesCopy
        })
    } */
    showDetailsHandler = id =>{
       
      const itemSelect = this.state.countryList.filter( countrie =>{
           return countrie.cca3 === id
       }) 
       console.log(itemSelect)
    }
/*     var bigCities = cities.filter(function (e) {
        return e.population > 3000000;
    });
    console.log(bigCities) */
    render() {
        return(
            <div className="row">
                <div className="list-group">

                    {
                        this.props.countries.map((country,index) =>{
                         return   <CountrieItem key={country.cca3} {...country}  showDetails ={ () => this.showDetailsHandler(country.cca3)} />
                        })
                    }
                </div>
        |   </div>
            
        )
    }
}
export default CountryList
