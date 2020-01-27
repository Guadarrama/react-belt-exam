const Pet = require('../models/Pet.model')

class PetsController {
    create (req, res) {
        let newPet = new Pet(req.body);
        newPet.save()
            .then(() => res.json({msg: "Pet created"}))
            .catch(err => res.json(err));
    }
    getAll(req, res){
        Pet.find({})
            .sort("type").exec()
            .then(pets => res.json(pets))
            .catch(err => res.json(err));
    }
    getOne(req, res){
        console.log(req.url)
        Pet.findOne({_id: req.params._id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    }
    update(req, res){
        Pet.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then(() => res.json({msg: "Pet updted"}))
            .catch(err => res.json(err));
    }
    deleteOne(req, res){
        Pet.findOneAndDelete({_id: req.params._id})
            .then(() => res.json({msg: "deleted"}))
            .catch(err => res.json(err));
    }
    addNinjutsu(req, res){
        Pet.findOneAndUpdate(
            {_id: req.params._id},
            {$push: {ninjutsu: req.body.item}}
        )
            .then(() => res.json({msg: "item added"}))
            .catch(err => res.json(err));
    }
    removeItem(req, res){
        Pet.findOneAndUpdate(
            {_id: req.params._id},
            {$pull: {ninjutsu: req.body.item}}
        )
            .then(() => res.json({msg: "item added"}))
            .catch(err => res.json(err));        
    }
}

module.exports = new PetsController();