export const checkRefreshTokenExpired = lastUpdatedDateStr => {
  let lastUpdatedDate = new Date(lastUpdatedDateStr);
  let today = new Date();
  let diff = today - lastUpdatedDate;
  diff = diff / (3600 * 24 * 1000);
  if (diff <= 6) {
    return true;
  } else {
    return false;
  }
};
