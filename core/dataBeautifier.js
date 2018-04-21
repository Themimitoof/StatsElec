/**
 * Return a string if the installation is monophase or threephase
 * @param {String} value
 * @return {String} "monophasé" or "triphasé"
 */
function threephasesToString(value) {
    return value == true ? "triphasé" : "monophasé";
}


/**
 * Return the name of the counter
 * @param {Integer} value
 * @return {String} "Electronique", "Linky" or "Electronique ou Linky" (the last is if the counter is not recognized)
 */
function counterTypeToString(value) {
    switch(value) {
        case 0: return "Electronique";
        case 1: return "Linky";
        case 99: return "Electronique ou Linky";
        default: return "Inconnu";
    }
}


/**
 * Return a string with the complete name of the contract
 * @param {String} value
 */
function contractToString(value) {
    switch(value.toLowerCase()) {
        case "base": return "Tarification de base";
        case "hchp": return "Tarification heures creuses/heures pleines";
        case "ejp":  return "Tarification EJP";
        case "tempo": return "Tarification Tempo";
        default: return `inconnu (${value})`;
    }
}

/**
 * Return the real name of a tag
 * @param {String} tag 
 */
function tagName(tag) {
    switch(tag.toUpperCase()) {
        case "ADCO": return "Adresse du compteur";
        case "OPTARIF": return "Option tarifaire";
        case "ISOUSC": return "Intensité souscrite";
        case "BASE": return "Index option Base";
        case "HCHC": return "Index heures creuses";
        case "HCHP": return "Index heures pleines";
        case "EJPHN": return "Index EJP heures normales";
        case "EJPHPM": return "Index EJP heures mobiles";
        case "BBRHCJB": return "Index Bleu heures creuses";
        case "BBRHPJB": return "Index Bleu heures pleines";
        case "BBRHCJW": return "Index Blanc heures creuses";
        case "BBRHPJW": return "Index Blanc heures pleines";
        case "BBRHCJR": return "Index Rouge heures creuses";
        case "BBRHPJR": return "Index Rouge heures pleines";
        case "PEJP": return "Préavis du début EJP";
        case "PTEC": return "Période tarifaire en cours";
        case "DEMAIN": return "Couleur du lendemain";
        case "IINST": return "Intensité instantanée";
        case "IINST1": return "Intensité instantanée phase 1";
        case "IINST2": return "Intensité instantanée phase 2";
        case "IINST3": return "Intensité instantanée phase 3";
        case "ADPS": return "Avertissement de dépassement de puissance souscrite";
        case "PMAX": return "Puissance maximale";
        case "IMAX": return "Intensité maximale";
        case "IMAX1": return "Intensité maximale phase 1";
        case "IMAX2": return "Intensité maximale phase 2";
        case "IMAX3": return "Intensité maximale phase 3";
        case "PAPP": return "Puissance apparente";
        case "HHPHC": return "Horaire heures plaines heures creuses";
        case "PPOT": return "Présence des potentiels";
        default: return null;
    }
}


/**
 * Return the unit associated to the tag
 * @param {String} tag 
 */
function tagUnit(tag) {
    switch(tag.toUpperCase()) {
        case "ADCO": return null;
        case "OPTARIF": return null;
        case "ISOUSC": return "A";
        case "BASE": return "Wh";
        case "HCHC": return "Wh";
        case "HCHP": return "Wh";
        case "EJPHN": return "Wh";
        case "EJPHPM": return "Wh";
        case "BBRHCJB": return "Wh";
        case "BBRHPJB": return "Wh";
        case "BBRHCJW": return "Wh";
        case "BBRHPJW": return "Wh";
        case "BBRHCJR": return "Wh";
        case "BBRHPJR": return "Wh";
        case "PEJP": return "min";
        case "PTEC": return null;
        case "DEMAIN": return null;
        case "IINST": return "A";
        case "IINST1": return "A";
        case "IINST2": return "A";
        case "IINST3": return "A";
        case "ADPS": return "A";
        case "PMAX": return "W";
        case "IMAX": return "A";
        case "IMAX1": return "A";
        case "IMAX2": return "A";
        case "IMAX3": return "A";
        case "PAPP": return "VA";
        case "HHPHC": return null;
        case "PPOT": return null;
        default: return null;
    }
}


/**
 * Return the number of charts needed for the specified contract
 * @param {String} contract the contract tag
 * @param {Boolean} threephase 
 */
function nbCharts(contract, threephase) {
    var nbCharts = threephase == true ? 3 : 1;

    switch(contract.toLowerCase()) {
        case "base":  nbCharts += 1;
        case "hchp":  nbChars += 2;
        case "ejp":   nbCharts += 2;
        case "tempo": nbCharts += 6;
        default: nbCharts += 1;
    }

    return nbCharts;
}


module.exports = { threephasesToString, counterTypeToString, contractToString, tagName, tagUnit, nbCharts };