import React, { Component } from 'react';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [],
            selectedPlanet: '',
            planetDetails: ''
        };
    }

    componentDidMount() {
        fetch("https://sw-info-api.herokuapp.com/v1/planets")
            .then(response => response.json())
            .then(data => {
                this.setState({ planets: data });
            })
            .catch(e => {
                console.log(e.message);
            });
    }

    handleSelectChange = (event) => {
        const selectedPlanetName = event.target.value;
        const selectedPlanet = this.state.planets.find(planet => planet.name === selectedPlanetName);

        if (selectedPlanet) {
            this.setState({
                selectedPlanet: selectedPlanetName,
                planetDetails: `Climate: ${selectedPlanet.climate}, Surface Water: ${selectedPlanet.surface_water}`
            });
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='box'>
                    <form>Choose your Topic:
                        <input type='text' placeholder='Enter your Topic' />
                    </form>
                </div>
                <div className='box'>
                    <form>
                        <label>Select a planet:</label>
                        <select value={this.state.selectedPlanet} onChange={this.handleSelectChange}>
                            <option value="">Select a planet</option>
                            {this.state.planets.map(planet => (
                                <option key={planet.id} value={planet.name}>{planet.name}</option>
                            ))}
                        </select>
                    </form>
                </div>
                <div className='box'>
                    <form>
                        <p>{this.state.planetDetails}</p>
                    </form>
                </div>
                <form>
                    <button className='btn btn-success'>Send</button>
                </form>
            </div>
        );
    }
}

export default Contacts;
