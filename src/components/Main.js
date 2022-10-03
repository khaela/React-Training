import React, { Component } from "react";

export class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {count: 1, pokemon: [{name: "Bulbasaur", type: "Leaf"}, {name: "Charmander", type: "Fire"}, {name: "Squirtle", type: "Water"}]};
   
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.state = {count: 1};
    }

    handleIncrement() {
        this.setState(prevState => ( {
            count: prevState.count + 1
        }));
    }

    handleDecrement() {
        this.setState(prevState => ( {
            count: prevState.count - 1
        }));
    }

    render() {
        return (
           <main>
            <button onClick={this.handleIncrement}>-</button>
            {this.state.count}
            <button onClick={this.handleIncrement}>+</button>
            <ul>
            
            </ul>
           <div>
            {this.state.count % 2 === 0 ? <h1>Even</h1> : <h1>Odd</h1>}
           </div>
           </main>
        );
    }
}

//{this.state.pokemon.map(pokemon => <li key={pokemon.name}>{pokemon.name} - {pokemon.type}</li>)}

/*export function Main (props) {
    const quotes = "Lorems";
    
    return (
        <main>
            {quotes}
        </main>
    )
}*/

