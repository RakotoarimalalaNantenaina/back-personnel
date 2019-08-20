module.exports = (app) => {

    const produit = require('./../Controlleur/Controlleur.atelier');
    app.post('/atelier', produit.create);
    app.post('/particulier/:_id', produit.particulier);
    app.get('/atelier', produit.findAll);

    app.get('/afficheatelier/:_id', produit.getaetelier);
    app.get('/masqueratelier/:_id', produit.masqueratelier);
    app.put('/afficheatelier/:_id', produit.modifatelier);

    app.get('/atelier/:image', produit.lireImage);
    app.put('/atelier/:profilId', produit.modifier);
}