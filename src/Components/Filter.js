import React from "react";

const Filter = ({ filter }) => {
	return (
		<div>
			Type:
			<select className='form-select' onChange={filter}>
				<option value=''>All</option>
				<option value='Cat'>Cat</option>
				<option value='Dog'>Dog</option>
				<option value='Rabbit'>Rabbit</option>
			</select>
		</div>
	);
};

export default Filter;
