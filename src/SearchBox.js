import React from 'react';
//import CardList from './CardList.js';


const SearchBox = ({onSearchChange})=>{
	return(
		<div className=''>
			<input className='mv3 pa2 br3 w-40  b--light-blue bg-light-blue' 
			type='search' 
			placeholder='search robots' 
			onChange={onSearchChange}
			/>
			


		</div>
		
   


		);
}

export default SearchBox;