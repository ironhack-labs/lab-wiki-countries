import React, { Component } from 'react'
import countries from "../countries.json"

export default class Detail extends Component {
    state = {
        country : {},
        borders : []
    }

    componentDidMount() {
        const country = countries.find( country => 
            country.cca3 === this.props.match.params.id
        )
        if(this.state.country.name) {
            this.state.country.borders.map((border, index) => {
                const newBorder = countries.find( country => 
                    country.cca3 === border
                )
                console.log(newBorder)
            })
        }
        this.setState({
            country
        })
    }

    render() {
        console.log(this.state.country)
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: "5vw"
            }}>
                {(this.state.country.name) ?
                <>
                    <h1>{this.state.country.name.common}</h1>
                    <div>
                        <p>Capital <span>{this.state.country.capital[0]}</span></p> 
                    </div>
                    <div>
                        <p>Area <span>{this.state.country.area}</span></p>
                    </div>
                    <div>
                        <p>Borders</p>
                        {this.state.country.borders.map((border, index) => (
                            <p>·{ () => countries.find( country => 
                                country.cca3 === border
                            )}</p>
                        ))}
                    </div>
                </>
                :
                ""
                }
            </div>
        )
    }
}
