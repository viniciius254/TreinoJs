import express from "express";

const routes = express.Router();

const autores = [
    {id: 1, name: "Machado de Assis"},
    {id: 2,name: "Monteiro Lobato"},
    {id: 3,name: "Dan Brown"}
]

routes.get('/', (req, res) => {
    res.send("Hello World");
});

routes.get('/autores', (request, response) => {
    response.json(autores);
});
let encontrado;
routes.get("/autores/:id", (req, res) => {
    

    const id = Number(req.params.id)

    // for(i=0;i<autores.length;i++){
    //     if(id == autores[1].id){
    //         encontrado = autores[1];
    //     };
    //     if(encontrado) {
    //         res.json(encontrado);
    //     } else {
    //         res.json("autor não encontrado")
    //     }
    // }
    
    encontrado = autores.filter((item) => item.id == id);

    });

export { routes as default };