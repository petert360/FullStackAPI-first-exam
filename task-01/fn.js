/**
 * 1. Objektumok tömbjéből egy elem kiválasztása az id alapján.
 * @param {Array} list egy objektumokat tartalmazó tömb
 * @param {Number} id az id, ami alapján keresünk a tömbben
 * @returns a tömbnek az az eleme, amelynek az id -je megegyezik a kapottal
 */
const get = (list = [], id = 0) => {
    // a paraméterben megadott listában megkeresi a kért id-jű elemet és visszaadja.
    return list.find(item => item.id === id);
};

/**
 * 2. Új objektum beszúrása a kapott tömbbe.
 * @param {Array} list egy objektumokat tartalmazó tömb
 * @param {*} entity egy objektum, amelyet be szeretnénk szúrni a tömbbe
 * @returns a létrehozott, beszúrt és id -vel ellátott objektum
 */
const create = (list = [], entity = null) => {
    // létrehozzuk az id-t ami a lista hosszából számolt utolsó elem indexe+1
    const id = list[list.length-1].id+1;
    // létrehozzuk a newEntity-t, ami a megadott entitás + az új id - obj.desctructuringgel
    const newEntity = {...entity, id};
    // új entitást elmentjük a list tömbben
    list.push(newEntity);
    // visszatérünk az új entitással
    return newEntity;
};

/**
 * 3. Egy meglévő objektum frissítése a kapott tömbben.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns a frissített objektum ha sikerült a frissítés, egyébként false
 */
const update = (list = [], entity = {}) => {
    // a lista tömb ürességét és az id-t ellenőrizzük
    if (list.length < 1 || !entity.id) return false;
    // megkeressük az id alapján a tömb indexét.
    const idx = list.findIndex( item => item === entity.id);
    // a lista adott indexű eleme legyen egyelő a kapott entitással.
    list[idx] = {...list[idx], ...entity};
    // visszatárünk a lista adott indexű elemével
    return list[idx];
};

/**
 * 4. Eltávolít a paraméterként kapott tömbből egy elemet az id alapján.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns true ha sikeres volt a törlés, egyébként false
 */
const remove = (list = [], id = 0) => {
    // ellenőrzés    
    if (list.length < 1 || !id) return false;
    // megkeressük az id alapján a tömb indexét.
    const idx = list.findIndex(item => item === id);
    // a talált indexnél splice segítségével eltávolítjuk a megadott elemet
    list.splice(idx, 1);
    // sikeres művelet esetén true a visszatérési érték
    return true;
};

/**
 * 5. Exportáld ki a négy függvényt, hogy más fájlokból is elérhetőek legyenek.
 */
module.exports = { get, create, update, remove };
