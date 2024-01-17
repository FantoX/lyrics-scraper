import { fetchData } from "./Driver/request";
import axios from "axios";
import * as cheerio from "cheerio";

/**
 * Returns
 *
 * @param {string} query - The name of the song
 * @description It will return an object with status, url, album, artist, release_date, thumbnail, lyrics
 * @author FantoX
 * @see {@link https://github.com/FantoX/lyrics-scraper} Source code on GitHub
 * @returns
 */

export const getLyrics = async (query: String) => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      if (!query) {
        var data: any = {
          status: 400,
          message: "Song name qurey is required!",
        };
        resolve(data);
      }
      const res: any = await fetchData(query as any);
      if (res.status == 200 && res.url !== "Not found") {
        const headers = {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          "Cache-Control": "max-age=0",
          "Sec-Fetch-Dest": "document",
          "Sec-Fetch-Mode": "navigate",
          "Sec-Fetch-Site": "none",
          "Sec-Fetch-User": "?1",
          "Sec-Gpc": "1",
          "Upgrade-Insecure-Requests": "1",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        };
        let targetHtml: any = await axios.get(res.url, { headers: headers });
        let $ = cheerio.load(targetHtml.data);
        let data1 = $(".kUgSbL");
        let arrX: string[] = [];
        data1.each((i, el) => {
          let dtx: any = $(el).html();
          $ = cheerio.load(dtx, {
            normalizeWhitespace: true,
          } as any);
          $("br").replaceWith("\n");
          let XRT = $.text();
          arrX.push(XRT);
        });
        let maindata: any = arrX.join("\n");
        if (
          !maindata ||
          maindata == "" ||
          maindata == null ||
          maindata == undefined
        ) {
          var data: any = {
            status: 500,
            message:
              "Unable to find song: " + query + " or Internal Server Error !",
          };
          resolve(data);
        } else {
          var data: any = {
            status: 200,
            url: res.url || "Not Found",
            album: res.album || "Not Found",
            artist: res.artist || "Not Found",
            release_date: res.release_date || "Not Found",
            thumbnail: res.thumbnail || "Not Found",
            lyrics: maindata || "Not Found",
          };
          resolve(data);
        }
      } else {
        resolve(res);
      }
    } catch (err: any) {
      reject(err);
    }
  });
};
