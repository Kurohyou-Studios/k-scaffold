export const parseLink = (str) => str ?
  str.replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank">$1</a>') :
  str;