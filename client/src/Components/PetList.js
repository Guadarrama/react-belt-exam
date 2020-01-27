import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const PetList = props => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8000/api/pets")
        .then(res => {
          setPets(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err));
    }, []);


    return (
        <div>
            <h4>Thesee pets are looking for a home!</h4>
            <h4>
                <Link to={"/pets/new"}>Add Pets to list</Link>
            </h4>
            <table>
								<tbody>
									<tr>
										<th className="border border-dark text-center">Name</th>
										<th className="border border-dark text-center">Type</th>
										<th className="border border-dark text-center">Actions</th>
									</tr>
                {
                    pets.map(pet => 
												<tr key={pet._id}>
													<td className="border border-primary p-3">{pet.name}</td>
													<td className="border border-primary p-3">{pet.type}</td>
													<td className="border border-primary p-3">
														<Link to={`/pets/${pet._id}`}
															className="btn btn-outline-info m-1"
														>
															Details
														</Link>

														<Link to={`/pets/${pet._id}/edit`}
															className="btn btn-outline-primary m-1"
														>
															Edit
														</Link>
													</td>
												</tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default PetList;