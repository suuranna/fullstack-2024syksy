# Tehtävä 5

Tilanne: 
Käyttäjä menee selaimella osoitteeseen https://studies.cs.helsinki.fi/exampleapp/spa eli muistiinpanojen Single Page App-versioon

```mermaid
sequenceDiagram
    participant käyttäjä
    participant selain
    participant palvelin
    
    käyttäjä->>selain: Käyttäjä menee sivulle
    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/spa
    palvelin->>selain: Palvelin palauttaa HTML-dokumentin
    
    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    palvelin-->>selain: Palvelin palauttaa css-tiedoston
    
    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    palvelin-->>selain: Palvelin palauttaa JavaScript-tiedoston
    Note right of selain: Selain alkaa toteuttamaan JavaScript-koodia, joka hakee JSON-muotoisen tiedon palvelimelta    
    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    palvelin-->>selain: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    Note right of selain: Selain toteuttaa takaisinkutsufunktion, joka renderöi haetut muistiinpanot 

```
