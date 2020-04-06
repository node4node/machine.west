import { Logger } from "winston";
import { autoInjectable, inject } from "tsyringe";
import { MovieMAPPER as MAPPER } from "../mappers/movieMapper";
import { Movie } from "../models/movie";
import { MovieDTO } from "../dtos";

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

  protected send(data: Movie[]): MovieDTO[];
  protected send(data: Movie): MovieDTO;
  protected send(data: any) {
    if (Array.isArray(data)) {
      return data.map(MAPPER.toDTO);
    } else return MAPPER.toDTO(data);
  }
}
