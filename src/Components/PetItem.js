import { useState } from "react";

export default function PetItem({ pet }) {
	const [image, setImage] = useState(pet.image);
	const changePetImage = () => setImage(pet.image2);

	return (
		<div className='col-lg-4 col-md-8 col-sm-10'>
			<div className='single-doctor'>
				<img className='image' alt={pet.name} src={image} />
				<div className='content'>
					<h3>{pet.name}</h3>
					<button
						onClick={changePetImage}
						type='button'
						className='btn btn-info mb-2'>
						Pet
					</button>
					{/* <br />
					<button onClick={changePetImage} type='button' className='btn btn-info'>
						Delete
					</button> */}
				</div>
			</div>
		</div>
	);
}
