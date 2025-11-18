import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import tachyon from 'tachyons';
//import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(res=>{
           return res.json();
        }).then(users =>{
            return this.setState({robots:users})
        });
    }

    onSearchChanged = (event) => {
        this.setState({ searchfield: event.target.value })

    }

    render() {
        const filteredRobots = this.state.robots.filter(
            r => {
                return r.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
            }
        );

        return (
            <div className='tc'>
                <h1 className='f1'>Robo friends</h1>
                <SearchBox searchChanged={this.onSearchChanged}></SearchBox>
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
                
            </div>
        )
    }
}

export default App;