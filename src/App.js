import React from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
//import {robots} from './robots';


import './App.css';

class App extends React.Component{
	constructor(){
		super()
		this.state ={
			robots: [],
			searchfield: ''
		}
	}

	onSearchChange =(event)=>{
		this.setState({searchfield: event.target.value })
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users})); 
	}


	render(){
		 const filteredRobots = this.state.robots.filter(robots =>
		 robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
	return !this.state.robots.length ?
	<h1>Loading</h1>:

	(
		<div className='tc'>
			<h1 className='tracked-mega f1'>RoboFriends</h1>

			<SearchBox onSearchChange={this.onSearchChange}/>

			<Scroll>
				<CardList robots={filteredRobots}/>
			</Scroll>
			


		</div>

		);
	}
}

export default App;