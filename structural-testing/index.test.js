const produse = [
    { nume: 'Crocheta', categorie: 'hrana', pret: 15, livrare: true },
    { nume: 'Jucarie mingea', categorie: 'jucarii', pret: 10, livrare: true },
    { nume: 'Perie de toaleta', categorie: 'accesorii', pret: 8, livrare: false },
    { nume: 'Biscuiti', categorie: 'hrana', pret: 20, livrare: true },
];

const filtrareProduse = require('./filtrareProduse');

describe("filtrareProduse", () => {

    // Test 1: Produse în aceeași categorie și în limitele de preț
    test('Produse în aceeași categorie și în limitele de preț', () => {
        expect(filtrareProduse(produse, 'hrana', 10, 20)).toEqual([
            { nume: 'Crocheta', categorie: 'hrana', pret: 15, livrare: true },
            { nume: 'Biscuiti', categorie: 'hrana', pret: 20, livrare: true }
        ]);
    });

    // Test 2: Produse care nu se afla în magazin
    test('Produse care nu se afla în magazin', () => {
        expect(filtrareProduse(produse, 'electronice', 10, 20)).toEqual([]);
    });

    // Test 3: Produse cu preț peste limita maximă
    test('Produse cu preț peste limita maximă', () => {
        expect(filtrareProduse(produse, 'hrana', 25, 30)).toEqual([]);
    });

    // Test 4: Produse cu preț sub limita minimă
    test('Produse cu preț sub limita minimă', () => {
        expect(filtrareProduse(produse, 'hrana', 10, 12)).toEqual([]);
    });

    // Test 5: Produse care nu sunt disponibile pentru livrare
    test('Produse care nu sunt disponibile pentru livrare', () => {
        expect(filtrareProduse(produse, 'accesorii', 0, 10)).toEqual([]);
    });

    // Test 6: Categorie goală
    test('Categorie goală', () => {
        expect(filtrareProduse(produse, '', 0, 0)).toEqual([]);
    });
});