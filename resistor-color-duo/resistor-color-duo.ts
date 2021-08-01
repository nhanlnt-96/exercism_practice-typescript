export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    if (colors.length <= 1) throw 'At least two colors need to be present';
    this.colors = colors
  }

  value = (): number => {
    const colorBands = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
    const colorOne = colorBands.indexOf(this.colors[0].toLowerCase());
    const colorTwo = colorBands.indexOf(this.colors[1].toLowerCase());

    return Number(`${colorOne}${colorTwo}`);
  }
}
