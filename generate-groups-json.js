const fs = require('fs');

// List of groups from the spreadsheet
const a = {}

/*
Groups.json format:

  {
    "institute": "Instituto de Ciências Matemáticas e de Computação",
    "name": "GANESH",
    "logo": "https://yt3.googleusercontent.com/ytc/AIdro_kNxCzmKdVsP-YU2agg348XdvvHt9XzgVSQujyKx4IELPQ=s200-c-k-c0x00ffffff-no-rj",
    "description": "Grupo extracurricular focado em segurança da informação",
    "link": "https://ganesh.icmc.usp.br/",
    "campus": "São Carlos",
    "tags": ["Segurança"]
  },

*/

const r = []

for (const institute in a) {
    for (const group of a[institute]) {
        r.push({
        institute: institute,
        name: group.name,
        logo: group.logo,
        description: group.description,
        link: group.link,
        campus: "São Carlos",
        tags: group.tags.split(',').map(tag => tag.replace(/"/g, '').trim())
        })
    }
}

fs.writeFileSync('groups.json', JSON.stringify(r, null, 2));