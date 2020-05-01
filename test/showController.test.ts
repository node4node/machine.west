import { TorrentModule } from "../modules";
import { ShowController } from "../modules/torrent/controllers";
import { QUALITIES } from "../utils";

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
});
