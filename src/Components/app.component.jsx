import React, { Component } from 'react';
import Navbar from './navbar.component';
import Counters from './counters.component';
import Reset from './reset.component';


class App extends Component {
    state = {
        counters: [
            { id: 0, value: 5 },
            { id: 1, value: 7 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    }

    getNonZero = ()=> {
        let cnt = 0

        this.state.counters.forEach(counter =>{
            if(counter.value >0) cnt++;
        });

        return cnt
    }

    handleReset = () => {
        const alCounters = this.state.counters.map((counter, idx) => {
            const obj = { id: idx, value: 0 };
            console.log(obj);
            return obj;
        });

        this.setState({ counters: alCounters })
    }

    handleIncrement = (id) => {
        const counters = this.state.counters.map((counter, idx) => {
            if (counter.id === id) return { id: idx, value: counter.value + 1 };
            return counter;
        });

        this.setState({ counters: counters })
    }

    handleDecrement = (id) => {
        const counters = this.state.counters.map((counter, idx) => {
            if (counter.id === id) return { id: idx, value: counter.value - 1 };
            return counter;
        });

        this.setState({ counters: counters })
    }
    hendleDelete = (id) =>{
        const counters = this.state.counters.filter(counter => counter.id != id);
        this.setState({counters:counters})
    }
    render() {
        return (
            <>
                <Navbar
                    nonZeroItem={this.getNonZero()}
                />
                <Counters
                    counters={this.state.counters}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.hendleDelete}
                />
                <Reset
                    onReset={this.handleReset}
                />
            </>
        );
    }
}

export default App;