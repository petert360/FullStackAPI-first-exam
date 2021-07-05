const carController = require('../controller/countryController');

/**
 * 1. Készíts egy router objektumot, ami a get kulcsnál meghívja a carController 
 * getAll nevű metódusát és string típusként visszaadja az adatok tömbjét.
 */

const router = {
    // az adatokat formázott módon adja vissza válaszként
    'get': async (res) => {
        // a header beállítása, hogy a böngésző JSON formátumot és utf8 forában kap adatot
        res.setHeader('Content-Type', 'application/json');
        // a Stringify gondoskodik a getAll() által lekért adatok array -> string átalakításáért
        res.end(JSON.stringify(await carController.getAll(), null, 2));
    }
}

/**
 * 2. A module az előző pontnál elkészített router objektumot adja vissza.
 */

module.exports = Object.freeze(router);
