/*
❖ Copyright- @FantoX001 
❖ This project is made for educational purposes only, feel free to use or contribute.
❖ It's a simple demonstration of how Web Scraping works.
❖ I hope i have able to make it as easy to understand as possible.
*/

const axios = require("axios");
const cheerio = require("cheerio");

async function lyrics(query) {
  const lookupUrl = "https://genius.com/api/search/multi?per_page=1&q=" + query;
  const response = await axios.get(lookupUrl);
  thumbnailUrl =
    response.data.response.sections[0].hits[0].result.cover_art_thumbnail_url;

  const lyricsUrl = response.data.response.sections[0].hits[1]?.result.url;

  if (thumbnailUrl == undefined || thumbnailUrl == null) {
    thumbnailUrl =
      "https://t2.genius.com/unsafe/409x409/https%3A%2F%2Fimages.genius.com%2F08c6cf3234ccbad210617ba252eee193.999x999x1.png";
  }

  const lyricsPageData = await axios.get(lyricsUrl);
  var $ = cheerio.load(lyricsPageData.data);
  const dataX = $(".Lyrics__Container-sc-1ynbvzw-5.Dzxov");
  arrX = [];
  dataX.each((i, el) => {
    dtx = $(el).html();
    $ = cheerio.load(dtx, {
      normalizeWhitespace: true,
    });
    $("br").replaceWith("\n");
    XRT = $.text();
    arrX.push(XRT);
  });
  prepare = {
    thumbnail: thumbnailUrl,
    lyrics: arrX.join("\n"),
  };
  return prepare;
}

module.exports = lyrics;
