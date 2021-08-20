import React, { Component } from 'react';
import Navbar from './navbar.component';
import Counters from './counters.component';


class App extends Component {
    state = {  }
    render() { 
        return (  
            <>
                <Navbar />
                <Counters />
            </>
        );
    }
}
 
export default App;