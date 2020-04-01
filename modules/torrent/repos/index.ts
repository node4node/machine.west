import { TorrentRepo as TorrentRepoClass } from "./torrentRepo";
const TorrentSearchAPI = require("torrent-search-api");

// TorrentSearchAPI.disableAllProviders();
TorrentSearchAPI.enableProvider("Rarbg");

const TorrentRepo = new TorrentRepoClass(TorrentSearchAPI);

export { TorrentRepo };
