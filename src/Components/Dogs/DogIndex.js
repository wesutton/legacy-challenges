import React, { Component } from 'react';

class DogIndex extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: null,
            loading: true,
            error: null
        };
        this.fetchDogImage = this.fetchDogImage.bind(this)
    };

    ImageHandler() {
        this.fetchDogImage();
    }

    async fetchDogImage() {
        const url = 'https://dog.ceo/api/breeds/image/random'
        await fetch(url)
            .then(response => response.json())
            .then(
                data => {
                    this.setState({
                        imageUrl: data.message,
                        isLoaded: true
                    })
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
      
    }

    componentDidMount() {
        this.fetchDogImage();
    }




    render() {
        let button = <button style={{ height: '35px', borderStyle: 'none', borderRadius: '2px', background: '#6495ed', color: 'white' }} onClick={this.fetchDogImage}>Random Dog</button>
        if (this.state.error) {
            return <div> <h4> Click Below:</h4><div>{button}</div><div>Error: {this.state.error.message}</div> </div>;
        } else if (!this.state.isLoaded) {
            return <div>loading... </div>;
        } else {
            return (
                <div>
                    <h4> Click Below: </h4>
                    <div>
                        {button}
                    </div>
                    <br></br>
                    <div>
                        <img src={this.state.imageUrl}></img>
                    </div>
                    <br />
                    <br />
                </div>
            )
        }

    }
}

export default DogIndex
