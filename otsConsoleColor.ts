
export class $$ {
  public static $ = console.log;
  public static tbl = console.table;
  public static dir = console.dir;
  public static error = console.error;

  public static red(...args: any): void {
    console.log(`%c${args}`, `color: red`);
  }
  public static blue(...args: any): void {
    console.log(`%c${args}`, `color: blue`);
  }
  public static green(...args: any): void {
    console.log(`%c${args}`, `color: green`);
  }

  public static orange(...args: any): void {
    console.log(`%c${args}`, `color: orange`);
  }

  public static color(color: string = "#000", ...args: any): void {
    console.log(`%c${args}`, `color: ${color}`);
  }

  public static err(...args: any): void {
    console.log(
      `%c${args}`,
      `background: red; color: yellow; padding: 3px; font-size: 16px`
    );
  }

  public static warn(...args: any): void {
    console.log(
      `%c${args}`,
      `background: orange; color: black; padding: 3px; font-size: 16px`
    );
  }

  public static succ(...args: any): void {
    console.log(
      `%c${args}`,
      `background: blue; color: white; padding: 3px; font-size: 16px`
    );
  }
  public static info(...args: any): void {
    console.log(
      `%c${args}`,
      `background: green; color: white; padding: 3px; font-size: 16px`
    );
  }

  public static bgBlue(...args: any): void {
    console.log(
      `%c${args}`,
      `background: blue; color: white; padding: 3px; font-size: 16px`
    );
  }
  public static bgGreen(...args: any): void {
    console.log(
      `%c${args}`,
      `background: green; color: white; padding: 3px; font-size: 24px"`
    );
  }

  public static title(title = "", ...args: any): void {
    console.log(`%c%s: ${args}`, "font-weight: 900; font-size: 24px", title);
  }
}