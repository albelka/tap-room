export class Keg {
  public pintsLeft: number = 124;
  public onSale: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) {}
}
