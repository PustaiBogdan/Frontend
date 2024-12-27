export class NumberUtils {
    public static parseInt(value: string): number {
      if (value === undefined) {
        return undefined;
      }
  
      const parsedValue = parseInt(value, 10);
  
      return isNaN(parsedValue) ? undefined : parsedValue;
    }
  
    public static parseFloat(value: string): number {
      if (value === undefined) {
        return undefined;
      }
  
      const parsedValue = parseFloat(value);
  
      return isNaN(parsedValue) ? undefined : parsedValue;
    }
  
    public static roundedToFixed(input: number, digits: number): number {
      const rounded = Math.pow(10, digits);
      return parseFloat((Math.round(input * rounded) / rounded).toFixed(digits));
    }
  }
  