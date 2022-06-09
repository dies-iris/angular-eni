import {Member} from "./Member";

export class Equipe {


  public name: string = ''
  public members: Member[] = []

  constructor(equipeName: string) {
    this.name = equipeName;
  }
}
