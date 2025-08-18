export const isValidProfile = (url) => {
  const fbRegex = /^https?:\/\/(www\.)?facebook\.com\/[A-Za-z0-9\.]+\/?$/i;
  const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9\-_]+\/?$/i;
  return fbRegex.test(url) || linkedinRegex.test(url);
};