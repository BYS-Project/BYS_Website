const GITHUB_URL =
  "https://raw.githubusercontent.com/BYS-Project/BYS_Website/main/public/";
const USING_PAGES = true;
export function translateSrc(src) {
  if (USING_PAGES) {
    return GITHUB_URL + src;
  } else {
    return src;
  }
}
