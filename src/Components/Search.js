import React from "react";

const Search = ({ search }) => {
	return (
		<div className='input-group rounded'>
			<input
				type='search'
				className='form-control rounded'
				placeholder='Search'
				aria-label='Search'
				aria-describedby='search-addon'
				onChange={search}
			/>
		</div>
	);
};

export default Search;
