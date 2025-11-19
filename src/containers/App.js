import React, { useState, useEffect  } from 'react';
import ReactDom from 'react-dom';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import tachyon from 'tachyons';
//import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

function App()  {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }
    const [robots, setRobots] =  useState([]);
    const [searchfield,setSearchfield] = useState('')
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(res=>{
           return res.json();
        }).then(users =>{
            return setRobots(users);
        });
    },[])
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users').then(res=>{
    //        return res.json();
    //     }).then(users =>{
    //         return this.setState({robots:users})
    //     });
    // }

    const onSearchChanged = (event) => {
        setSearchfield(event.target.value )
    }

    const filteredRobots = robots.filter(
        r => {
            return r.name.toLocaleLowerCase().includes(
                searchfield.toLocaleLowerCase());
        }
    );

    return (
        <div className='tc'>
            <h1 className='f1'>Robo friends</h1>
            <SearchBox searchChanged={onSearchChanged}></SearchBox>
            <Scroll>
                <ErrorBoundry>
                    <Cardlist robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
            
        </div>
    )
}

export default App;