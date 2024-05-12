const { isModuleNamespaceObject } = require("util/types");

function filtrareProduse(produse, categorieSelectata, pretMinim, pretMaxim) {
    let produseFiltrate = [];

    for (let i = 0; i < produse.length; i++) {
        // Verificăm dacă produsul este din categoria selectată
        if (produse[i].categorie === categorieSelectata) {
            // Verificăm dacă prețul produsului este între limitele date
            if (produse[i].pret >= pretMinim && produse[i].pret <= pretMaxim) {
                // Verificăm dacă produsul poate fi livrat
                if (produse[i].livrare === true) {
                    produseFiltrate.push(produse[i]);
                }
            }
        }
    }

    return produseFiltrate;
}

module.exports = filtrareProduse;