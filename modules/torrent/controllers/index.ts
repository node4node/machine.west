import { MovieController } from "./movieController";
import { MovieService } from "../services";

class ControllersClass {
  public get MovieController(): MovieController {
    return new MovieController(MovieService);
  }
}
const Controllers = new ControllersClass();
export { Controllers };
