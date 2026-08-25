const paises = {
    "argentina": "AR",
    "alemania": "DE",
    "arabia saudita": "SA",
    "argelia": "DZ",
    "australia": "AU",
    "austria": "AT",
    "bélgica": "BE",
    "bosnia y herzegovina": "BA",
    "brasil": "BR",
    "cabo verde": "CV",
    "canadá": "CA",
    "colombia": "CO",
    "corea del sur": "KR",
    "costa de marfil": "CI",
    "croacia": "HR",
    "curazao": "CW",
    "checa, república": "CZ",
    "ecuador": "EC",
    "egipto": "EG",
    "escocia": "SCO",
    "españa": "ES",
    "estados unidos": "US",
    "francia": "FR",
    "ghana": "GH",
    "haití": "HT",
    "inglaterra": "ENG",
    "irak": "IQ",
    "irán": "IR",
    "japón": "JP",
    "jordania": "JO",
    "marruecos": "MA",
    "méxico": "MX",
    "noruega": "NO",
    "nueva zelanda": "NZ",
    "países bajos": "NL",
    "panamá": "PA",
    "paraguay": "PY",
    "portugal": "PT",
    "qatar": "QA",
    "república democrática del congo": "CD",
    "senegal": "SN",
    "suecia": "SE",
    "suiza": "CH",
    "sudáfrica": "ZA",
    "túnez": "TN",
    "turquía": "TR",
    "uruguay": "UY",
    "uzbekistán": "UZ"
};

function getBandera(nombrePais) {
    if (!nombrePais) return "🏴"; // Manejo de caso vacío
    const paisLimpio = nombrePais.toLowerCase().trim();
    
    const codigo = paises[paisLimpio];
    
    if (codigo === 'ENG') return '🏴󠁧󠁢󠁥󠁮󠁧󠁿';
    if (codigo === 'SCO') return '🏴󠁧󠁢󠁳󠁣󠁴󠁿';
    if (!codigo) return "🏴";
    
    const codePoints = codigo
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));

    return String.fromCodePoint(...codePoints);
}

export default getBandera;
