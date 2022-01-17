import { useState } from "react";

export default function PetItem(props) {
	const pet = props.pet;
	const [image, setImage] = useState(pet.image);
	const petPet = () => setImage(pet.image2);

	return (
		<div className='col-lg-4 col-md-8 col-sm-10'>
			<div className='single-doctor'>
				<img className='image' alt={pet.name} src={image} />
				<div className='content'>
					<h3>{pet.name}</h3>
					<button onClick={petPet} type='button' className='btn btn-info'>
						Pet
					</button>
				</div>
			</div>
		</div>
	);
}
