import { TorrentModule } from "../modules";
import { ShowController } from "../modules/torrent/controllers";
import { QUALITIES } from "../utils";
import { ShowDTO } from "../modules/torrent/dtos";

describe("A ShowController", () => {
  let showController: ShowController;
  beforeAll(() => {
    showController = TorrentModule.ShowController;
  });
  test("Should return at least one show", async () => {
    const result = await showController.getShow("The Last Dance");
    const { title } = result;
    expect(title).toMatch("Dance");
  }, 14000);

  test("Should return show by IMDB id", async () => {
    const id = "tt2442560";
    const result: ShowDTO[] = await showController.getShowByImdbId(id);
    const { imdb_id } = result[0]!;
    expect(imdb_id).toMatch(id);
  }, 14000);
});
