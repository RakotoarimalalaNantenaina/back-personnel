module.exports = (app) => {

    const produit = require('./../Controlleur/Controlleur.atelier');

    app.get('/administration', produit.admin);
    app.post('/administration', produit.postadmin);
    app.post('/atelier', produit.create);
    app.post('/panier/:_id', produit.particulier);
    app.get('/panier/:_id', produit.getpanier)
    app.get('/atelier', produit.findAll);

    app.get('/afficheatelier/:_id', produit.getaetelier);
    app.get('/masqueratelier/:_id', produit.masqueratelier);
    app.put('/afficheatelier/:_id', produit.modifatelier);
    app.get('/supprimer/:_id', produit.supprimer);
    app.get('/:id',produit.getid);
    app.post('/panier/:_id',produit.ajoutpanier);

    app.get('/atelier/:image', produit.lireImage);
    app.put('/atelier/:profilId', produit.modifier);
}