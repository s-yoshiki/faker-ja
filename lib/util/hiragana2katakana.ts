
export default (str: string): string => {
  return str.replace(/[\u3041-\u3096]/g, (match: string): string => {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}