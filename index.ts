/* import axios from "axios";
import { inspect } from "util";

const premiumizeAPI = axios.create({
  baseURL: "https://www.premiumize.me/api/",
  timeout: 2500,
});

const premiumizeAPIParams = {
  apikey: "5fsjd5zipgq9cdch",
};

const getAllDownloads = async () => {
  try {
    const response = await premiumizeAPI.get(`item/listall`, {
      params: premiumizeAPIParams,
    });
    return response.data;
  } catch (e) {
    console.error(
      `Something went wrong, retrieving downloads:\n ${inspect(e)}`
    );
  }
};

interface RarBgResponse {
  provider: string; // 'Rarbg'
  title: string; //'Star.Wars.Episode.IX.The.Rise.of.Skywalker.2019.2160p.BluRay.HEVC.TrueHD.7.1.Atmos-EATDIK',
  time: string; // '2020-03-25 01:48:03 +0000',
  seeds: number; // 114,
  peers: number; // 174,
  size: string; // '61.1 GiB',
  magnet: string; // 'magnet:?xt=urn:btih:b172920a61b9ed00399a4ba72fd52bde31d85942&dn=Star.Wars.Episode.IX.The.Rise.of.Skywalker.2019.2160p.BluRay.HEVC.TrueHD.7.1.Atmos-EATDIK&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710&tr=udp%3A%2F%2F9.rarbg.to%3A2710&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce',
  desc: string; // 'https://torrentapi.org/redirect_to_info.php?token=f71i2cyts6&p=2_1_8_2_2_9_7__b172920a61'
} 
 */

import { TorrentModule } from "./modules";

const movieController1 = TorrentModule.Controllers.MovieController;

//const movieController2 = TorrentModule.Controllers.MovieController;

movieController1
  .getMovieInTopQuality("Joker")
  .then((movies) => {
    console.log(movies);
  })
  .catch(console.error);
