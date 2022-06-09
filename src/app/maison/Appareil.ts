export class Appareil{
  public name: string = '';
  public isOn: boolean = false;

  constructor(name: string) {
    this.name = name;
    this.isOn = false;
  }
}
