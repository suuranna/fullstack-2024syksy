# Tehtävä 4

Tilanne: 
Käyttäjä luo uuden muistiinpanon ollessaan sivulla https://studies.cs.helsinki.fi/exampleapp/notes eli kirjoittaa tekstikenttään jotain ja painaa nappia tallenna.

```mermaid
sequenceDiagram
    participant käyttäjä
    participant selain
    participant palvelin

    Note left of käyttäjä: Käyttäjä kirjoittaa uuden muistiinpanon
    käyttäjä->>selain: Käyttäjä painaa save-nappia
    selain->>palvelin: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    palvelin->>selain: vastauskoodi 301
    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/notes
    palvelin->>selain: Palvelin palauttaa HTML-dokumentin
    
    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    palvelin-->>selain: Palvelin palauttaa css-tiedoston
    
    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    palvelin-->>selain: Palvelin palauttaa JavaScript-tiedoston
    
    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    palvelin-->>selain: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
