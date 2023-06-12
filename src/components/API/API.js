import ky from "ky";
const json = await ky
    .post("https://bestofjs-rankings.vercel.app/monthly/latest", {
        json: { foo: true },
    })
    .json();

console.log(json);
//
// export const apiProject =
//     "https://bestofjs-static-api.vercel.app/projects.json";
// export const apiRanking = "https://bestofjs-rankings.vercel.app/monthly/latest";
// https://bestofjs-static-api.vercel.app/hof.json hero
