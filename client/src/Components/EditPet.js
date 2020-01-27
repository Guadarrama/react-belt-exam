import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const EditPet = props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");    
    const [skill2, setSkill2] = useState(""); 
    const [skill3, setSkill3] = useState("");

		const [errors, setErrors] = useState({});
		
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
					})
					.catch(err => console.log(err))
			console.log("write when found", props._id)
		}, [props._id])	

    const editPet = e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${props._id}`, {name, type, description, skill1, skill2, skill3})
            .then(res => {
                if(res.data.errors){
                    setErrors(res.data.errors);
                    console.log(res.data.errors);
                }
                else{
                    navigate("/pets");
                }
            })
            .catch(err=> {
                console.log(err)
            });

    }
   
    return(
        <div className="p-2">
            <h4>Edit Pet:</h4>
            <form onSubmit={ editPet }>
              <div className="form-group">
                  <label htmlFor="Name">Name </label>
                  {errors.name ?<span className ="text-danger">{errors.name.message}</span>: ""}
                  <input type="text"
                      className="form-control"
                      id = "Name"
											onChange={e => setName(e.target.value)}
											value={name}
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="petType">Pet Type </label>
                  {errors.type ?<span className ="text-danger">{errors.type.message}</span>: ""}
                  <input type="text"
                      className="form-control"
                      id = "petType"
											onChange={e => setType(e.target.value)}
											value={type}
                  />
              </div>
              <div className="form-group">
                  <label htmlFor = "Description">Description</label>
                  {errors.description ?<span className ="text-danger">{errors.description.message}</span>: ""}
                  <textarea rows="4" cols="20"
                      className="form-control"
											onChange={e => setDescription(e.target.value)}
											value={description}
                  >
                  </textarea>                    
              </div>
              <div className="form-group">
                  <label htmlFor="skill1">Skill 1</label>
                  {errors.skill1 ?<span className ="text-danger">{errors.skill1.message}</span>: ""}
                  <input type="text"
                      className="form-control"
                      id = "skill1"
											onChange={e => setSkill1(e.target.value)}
											value={skill1}
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="skill2">Skill 2</label>
                  {errors.skill2 ?<span className ="text-danger">{errors.skill2.message}</span>: ""}
                  <input type="text"
                      className="form-control"
                      id = "skill2"
											onChange={e => setSkill2(e.target.value)}
											value={skill2}
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="skill3">Skill 3</label>
                  {errors.skill3 ?<span className ="text-danger">{errors.skill3.message}</span>: ""}
                  <input type="text"
                      className="form-control"
                      id = "skill3"
											onChange={e => setSkill3(e.target.value)}
											value={skill3}
                  />
              </div>
                <hr/>
                <Link
                    className="btn btn-outline-danger"
                    to="/pets"
                >
                    Cancel
                </Link>
                <span> | </span>
                <input
                    type="submit"
                    value="Edit Pet"
                    className="btn btn-outline-primary"
                />
            </form>

        </div>
    )


}

export default EditPet;