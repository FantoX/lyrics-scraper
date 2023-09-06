
<h1 align="center"> <a href="https://github.com/FantoX001/lyrics-scraper">@fantox01/lyrics-scraper </a>
</h1>

<h4 align="center"> The simplest yet most powerful <a href="https://genius.com/">Genius Lyrics </a> scrapper
</h4>

<br>
<p align="center">

<a href="https://www.codefactor.io/repository/github/fantox001/lyrics-scraper">
<img src="https://www.codefactor.io/repository/github/fantox001/lyrics-scraper/badge" alt="CodeFactor" width="120px" /></a>

</p>

<p align="center">
<a href="https://www.npmjs.com/package/@fantox01/lyrics-scraper">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" width="140px">
</a>
  
</p>

<br>

# Description:
- This is a Scraper which can scrap and give you lyrics of any song that's available on [Genius Offitial Site](https://genius.com/). 
- This can return both album thumbnail and lyrics if they are available through thw power of web scraping.
- Scraping an website is not always allowed by the website owners. This project is made for educational purposes only.

<br>

# Installation:

```
npm i @fantox01/lyrics-scraper
```

```
yarn add @fantox01/lyrics-scraper
```

<br>

## Usage:
- Make sure to always use an asynchronous function to fetch the data.

```js
const lyrics = require("@fantox01/lyrics-scraper");

async function x() {
  const data = await lyrics("despacito");
  // All data
  console.log(data);

  // Specific data usage
  console.log(data.thumbnail);
  console.log(data.lyrics);
}

x();
  
```

<br>

## Output:

- It will automatically format the lyrics and add new lines ("\n").
- Use `console.log(data.lyrics)` to for only lyrics and `console.log(data.thumbnail);` to get only thumlnail.

```js
{
  thumbnail: 'https://images.genius.com/542c8a2c01584e9a8e58934dff54a654.300x300x1.jpg',
  lyrics: '[Letra de "Despacito (Remix)" ft. Justin Bieber]\n' +
    '\n' +
    '[Intro: Justin Bieber]\n' +
    "Comin' over in my direction\n" +
    "So thankful for that, it's such a blessin', yeah\n" +
    'Turn every situation into heaven, yeah\n' +
    'Oh-oh, you are\n' +
    'My sunrise on the darkest day\n' +
    "Got me feelin' some kind of way\n" +
    'Make me wanna savor every moment slowly, slowly\n' +
    'You fit me tailor-made, love how you put it on\n' +
    'Got the only key, know how to turn it on\n' +
    'The way you nibble on my ear, the only words I wanna hear\n' +
    'Baby, take it slow so we can last long\n' +
    '\n' +
    '[Verso 1: Luis Fonsi & Daddy Yankee]\n' +
    '¡Oh! Tú, tú eres el imán y yo soy el metal\n' +
    'Me voy acercando y voy armando el plan\n' +
    'Sólo con pensarlo se acelera el pulso (Oh, yeah)\n' +
    'Ya, ya me está gustando más de lo normal\n' +
    'Todos mis sentidos van pidiendo más\n' +
    'Esto hay que tomarlo sin ningún apuro\n' +
    '\n' +
    '[Coro: Justin Bieber & Luis Fonsi, Daddy Yankee]\n' +
    'Despacito\n' +
    'Quiero respirar tu cuello despacito\n' +
    'Deja que te diga cosas al oído\n' +
    'Para que te acuerdes si no estás conmigo\n' +
    'Despacito\n' +
    'Quiero desnudarte a besos despacito\n' +
    'Firmo en las paredes de tu laberinto\n' +
    'Y hacer de tu cuerpo todo un manuscrito\n' +
    '(Sube, sube, sube\n' +
    'Sube, sube)\n' +
    '\n' +
    '[Post-Coro: Luis Fonsi & Daddy Yankee]\n' +
    'Quiero ver bailar tu pelo, quiero ser tu ritmo (Woah, woah)\n' +
    'Que le enseñes a mi boca (Woah, woah)\n' +
    'Tus lugares favoritos (Favorito, favorito, baby)\n' +
    'Déjame sobrepasar tus zonas de peligro (Woah, woah)\n' +
    'Hasta provocar tus gritos (Woah, woah)\n' +
    'Y que olvides tu apellido\n' +
    '\n' +
    '[Verso 2: Daddy Yankee]\n' +
    'Si te pido un beso, ven, dámelo, yo sé que estás pensándolo\n' +
    'Llevo tiempo intentándolo, mami, esto es dando y dándolo\n' +
    'Sabes que tu corazón conmigo te hace bom, bom\n' +
    'Sabes que esa beba está buscando de mi bom, bom\n' +
    'Ven, prueba de mi boca para ver cómo te sabe\n' +
    'Quiero, quiero, quiero ver cuánto amor a ti te cabe\n' +
    'Yo no tengo prisa, yo me quiero dar el viaje\n' +
    'Empecemos lento, después salvaje\n' +
    '\n' +
    '[Pre-Coro: Daddy Yankee & Justin Bieber, Daddy Yankee]\n' +
    'Pasito a pasito, suave suavecito\n' +
    'Nos vamos pegando, poquito a poquito\n' +
    'Cuando tú me besas con esa destreza\n' +
    'Veo que eres malicia con delicadeza\n' +
    'Pasito a pasito, suave suavecito\n' +
    'Nos vamos pegando, poquito a poquito\n' +
    'Y es que esa belleza es un rompecabezas\n' +
    "Pero pa' montarlo aquí tengo la pieza\n" +
    '¡Oye!\n' +
    '\n' +
    '[Coro: Justin Bieber & Luis Fonsi, Daddy Yankee]\n' +
    'Despacito\n' +
    'Quiero respirar tu cuello despacito\n' +
    'Deja que te diga cosas al oído\n' +
    'Para que te acuerdes si no estás conmigo\n' +
    'Despacito\n' +
    'Quiero desnudarte a besos despacito\n' +
    'Firmo en las paredes de tu laberinto\n' +
    'Y hacer de tu cuerpo todo un manuscrito\n' +
    '(Sube, sube, sube\n' +
    'Sube, sube)\n' +
    '\n' +
    '[Post-Coro: Luis Fonsi & Daddy Yankee]\n' +
    'Quiero ver bailar tu pelo, quiero ser tu ritmo (Woah, woah)\n' +
    'Que le enseñes a mi boca (Woah, woah)\n' +
    'Tus lugares favoritos (Favorito, favorito, baby)\n' +
    'Déjame sobrepasar tus zonas de peligro (Woah, woah)\n' +
    'Hasta provocar tus gritos (Woah, woah)\n' +
    'Y que olvides tu apellido\n' +
    '\n' +
    '[Puente: Luis Fonsi]\n' +
    'Despacito\n' +
    'This is how we do it down in Puerto Rico\n' +
    'I just wanna hear you screaming, "¡Ay, bendito!"\n' +
    'I can move forever cuando esté contigo\n' +
    '¡Báilalo!\n' +
    '\n' +
    '[Outro: Daddy Yankee, Luis Fonsi & Justin Bieber]\n' +
    'Pasito a pasito, suave suavecito\n' +
    'Nos vamos pegando, poquito a poquito\n' +
    'Que le enseñes a mi boca\n' +
    'Tus lugares favoritos\n' +
    '(Favorito, favorito, baby)\n' +
    'Pasito a pasito, suave suavecito\n' +
    'Nos vamos pegando, poquito a poquito\n' +
    'Hasta provocar tus gritos (Fonsi)\n' +
    'Y que olvides tu apellido (DY)\n' +
    'Despacito'
}
```

# Making of @fantox01/lyrics-scraper

## How?
* Using [Axios](https://github.com/axios/axios) and [Cheerio](https://github.com/cheeriojs/cheerio)
* **Axios -** A promise based HTTP client for the browser and node.js
* **Cheerio -** A fast, flexible, and elegant library for parsing and manipulating HTML and XML.

## Why?
* IDK, scraping is fun to me and also legal upto a limited extend as long as you don't misuse it.
<br />

# Contributions
* Made by [FantoX](https://github.com/FantoX001)
* I don't have any other contributors in this project yet. Feel free to contribute.

<br />

# Support me
* Give this project a 🌟 if you like my project.
* Please follow me on GitHub to get notified about my upcoming projects.

<br />

