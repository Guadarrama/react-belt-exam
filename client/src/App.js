import React from 'react';
import { Router } from '@reach/router';
// import axios from 'axios';


import PetList from './Components/PetList'
import PetForm from './Components/PetForm'
import PetPage from './Components/PetPage'
import EditPet from './Components/EditPet'



function App() {

  // const [isLiked, setIsLiked] = useState([]);
  // const [pets, setPets] = useState([]);

  // let tempArr = []
  // for(let i=0; i < pets.length; i++){	
  //   tempArr.push({isThisLiked: 0, _id: pets[i]._id})
  // }
  // console.log(tempArr)
  // // setIsLiked(tempArr)
  // // console.log(isLiked)

  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/pets")
  //     .then(res => {
  //       console.log(res.data);
  //       setPets(res.data);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  return (
    <div className="container">
      <div className="bg-light p-2">
        <h2>Pet Shelter</h2>
      </div>

      <div className="p-2">
        <Router>
          <PetList path="/pets" />
          <PetForm path="/pets/new" />
          <PetPage path="pets/:_id" />
          <EditPet path="pets/:_id/edit" />
        </Router>

      </div>
    </div>
  );
}

export default App;
