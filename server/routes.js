const Pets = require('./controllers/Pets.controllers');

module.exports = app => {
    app.post("/api/pets", Pets.create);
    app.get("/api/pets", Pets.getAll);
    app.get("/api/pets/:_id", Pets.getOne);
    app.put("/api/pets/:_id", Pets.update);
    app.delete("/api/pets/:_id", Pets.deleteOne);
    app.put("/api/ninjutsu/:_id", Pets.removeItem);
    
}