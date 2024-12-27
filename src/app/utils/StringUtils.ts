export class StringUtils {

    public static isEmpty(value: string): boolean {
      return value === null || value === undefined || value.trim().length === 0;
    }
  
    public static addOneQueryParamToUrl(url, key, value) {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }
  
    public static addManyQueryParamsToUrl(url: string, paramsMap: Map<string, string>) {
      let updatedUrl = url;
      paramsMap.forEach((value, key) => {
        updatedUrl = StringUtils.addOneQueryParamToUrl(updatedUrl, key, value);
      });
      return updatedUrl;
    }
  
    public static generateUUID(length: number = 8): string {
      let result = "";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
      }
      return result;
    }
  }
  