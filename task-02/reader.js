/**
 * 1. A fájlok kezeléséhez az fs modul promis alapú verzióját használd.
 */
const fsp = require('fs').promises;

/**
 * 2. Állítsd be az azonos mappában található .json fájl elérési útját a path 
 * modul join metódusának segítségével.
 */

const { join } = require('path');
const jsonPath = join(__dirname, 'db', 'users.json');

/**
 * 3. A jsonPath útvonalon található fájl tartalmát beolvassa és értelmezi, 
 * majd visszaadja a kapott tömböt.
 * 
 * @returns objektumok tömbje
 */
const getList = async () => {
    // file betöltése aszinkron módon a readfile segítségével és visszaadjuk JSON formában
    const fileContent = await fsp.readFile(jsonPath, 'utf8');
    return JSON.parse(fileContent);
};

/**
 * 4. A db/users.json fájlban tárolt 'users' tömbből egy elem kiválasztása az id 
 * alapján. A fájl beolvasását és értelmezését a getList segédfüggvény végzi.
 * 
 * @param {Array} list egy objektumokat tartalmazó tömb
 * @param {Number} id az id, ami alapján keresünk a tömbben
 * @returns a tömbnek az az eleme, amelynek az id -je megegyezik a kapottal
 */
const get = async (id = 0) => {
    // getList() függvény felhasználása
    const userList = await getList();
    // visszatérés a .find() segítségével megtalált id-jú tömbelemmel
    return userList.find(item => item.id === id);
};

module.exports = {
    get,
};
