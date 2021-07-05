/**
 * 1. Töltsd be a szükséges modulokat: http és az általad írt router modul.
 */
const http = require('http');
const countryRouter = require('./router/countryRouter');


// 2. Definiáld a port értékét 8080 -ra a port változóban.
const port = 8080;

/**
 * 3. Hozz létre egy http szervert.
 * A szerver get kérés esetén meghívja a router kapcsolódó metódusát, 
 * amely válaszol a kérésre.
 */
const httpServer = http.createServer(async (req, res) => {
    countryRouter[req.method.toLowerCase()](res)
})

// 4. Állítsd be, hogy a szerver figyelje a port változóban definiált portot.
httpServer.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
