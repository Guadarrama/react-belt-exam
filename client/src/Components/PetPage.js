import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const PetPage = props =>{
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");    
    const [skill2, setSkill2] = useState(""); 
	const [skill3, setSkill3] = useState("");
	const [likes, setLikes] = useState(0);
	const [_id, setPetId] = useState("");

		const deletePet = _id =>{
			//console.log(props._id)
			axios.delete(`http://localhost:8000/api/pets/${props._id}`)
				.then(res =>{
					navigate("/pets");
					console.log("deleted")
				});
		}

		const likePet = _id =>{};
		
    useEffect(() => {
			axios.get(`http://localhost:8000/api/pets/${props._id}`)
					.then(res => {
							console.log(res.data)
							setName(res.data.name);
							setType(res.data.type);
							setDescription(res.data.description);
							setSkill1(res.data.skill1);
							setSkill2(res.data.skill2);
							setSkill3(res.data.skill3);
							setPetId(res.data._id);
							setLikes(res.data.likes);
					})
					.catch(err => console.log(err))
			console.log("write when found", props._id)
        }, [props._id])
				
		return(
			<div>
				<Link to={"/pets"}
						className="btn btn-outline-info"
				>
						Home
				</Link>
				<h4>Details about<em> {name}</em></h4>
				<hr/>
				<div><b>Pet Type:</b> {type}</div>
				<div><b>Description:</b> {description} </div>
				<div>
				<b>Skills:</b> 
					{skill1 ? <span> {skill1}, </span>: ""}
					{skill2 ? <span> {skill2}, </span>: ""}
					{skill3 ? <span> {skill3}.</span>: ""}
				
				</div>
				<div>
					<b>Likes:</b> {likes}
				</div>

				<div>
					<button
						onClick = {e => {deletePet(_id)} }
						className = "btn btn-outline-primary d-inline-block m-1"
					>
							Adopt this pet
					</button>
					<button
						onClick = {e => {likePet(_id)} }
						className = "btn btn-outline-warning d-inline-block m-1"
					>
							Like
					</button>

				</div>
			</div>
		)
}

export default PetPage;