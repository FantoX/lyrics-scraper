import axios from "axios";

export const fetchData = (searchTerm: string) => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      const target =
        "https://genius.com/api/search/multi?per_page=1&q=" + searchTerm;
      const res = await axios.get(target);
      //   const mainData = JSON.stringify(res.data);
      if (res.data.response.sections[0].hits.length > 2) {
        var data: any = {
          status: 200,
          url: res.data.response.sections[1].hits[0]?.result.url || "Not found",
          album:
            res.data.response.sections[1].hits[0]?.result.full_title ||
            "Not found",
          thumbnail:
            res.data.response.sections[1].hits[0]?.result.header_image_url,
          artist:
            res.data.response.sections[1].hits[0]?.result.primary_artist
              ?.name || "Not found",
          release_date:
            res.data.response.sections[1].hits[0]?.result
              .release_date_for_display || "Not found",
        };
        resolve(data);
      } else {
        var data: any = {
          status: 500,
          message:
            "Unable to find song: " +
            searchTerm +
            " or Internal Server Error !",
        };
        resolve(data);
      }
    } catch (err: any) {
      reject(err);
    }
  });
};
