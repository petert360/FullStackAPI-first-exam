/**
 * 1. A fájlok kezeléséhez az fs modul promise alapú verzióját használd.
 */

const fsp = require('fs').promises;

/**
 * 2. Állítsd be az azonos mappában található .json fájl elérési útját a path 
 * modul join metódusának segítségével.
 */

// path modul betöltése a join metódus használatához
const { join } = require('path');
const jsonPath = join(__dirname, 'db', 'products.json');

 /**
  * 3. A jsonPath útvonalon található fájl tartalmát beolvassa és értelmezi, 
  * majd visszaadja a kapott tömböt.
  * @returns objektumok tömbje
  */
const getList = async () => {
    // file betöltése aszinkron módon a readfile segítségével és visszaadjuk JSON formában
    const fileContent = await fsp.readFile(jsonPath, 'utf8');
    return JSON.parse(fileContent);
 };

/**
 * 4. A kapott tömböt json formátumra alakítja és beleírja a jsonPath útvonalon 
 * található fájlba.
 * @param {Array} list objektumok tömbje
 * @returns 
 */

// Létrehozunk egy külön aszinkron függvényt a kiírásra
const saveList = async (list = []) => {
    await fsp.writeFile(jsonPath, JSON.stringify(list, null, 2), 'utf8');
    return true;
};

/**
 * 5. Frissíti az id alapján kiválasztott entitást és visszaírja a .json fájlba.
 * A .json állomány írásához a saveList segédfüggvényt használd.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns a frissített objektum ha sikerült a frissítés, egyébként false
 */
const update = async (entity = {}) => {
    // hiba esetén false válasz
    if (!entity.id) return false;
    // beolvassuk a product listát
    const productList = await getList();
    // megkeressük az id alapján a tömb indexét, és a lista adott indexű eleme legyen egyelő a kapott entitással.
    const idx = productList.findIndex(item => item.id === entity.id);
    productList[idx] = { ...productList[idx], ...entity };
    // saveList segítségével kiírjuk az új listát
    await saveList(productList);
    return productList[idx];
};

module.exports = {
    update,
};
