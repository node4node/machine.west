import { Logger } from "winston";
import { autoInjectable, inject } from "tsyringe";

// @ts-ignore
@autoInjectable()
export abstract class CoreController {
  constructor(@inject("ILogger") private logger?: Logger) {}

  protected log(msg: string): void {
    /* if (this.logger) {
      this.logger.info(msg, {
        context: this.constructor.name,
      });
    } else throw new Error("Unable to log."); */
    this.logger!.info(msg, {
      context: this.constructor.name,
    });
  }
}
