/**
 * @function getToken
 * @description gets a token sring from the localstorage
 * @returns {string} token
 */
export function getToken() {
  // eslint-disable-next-line no-undef
  return localStorage.getItem('token');
}

/**
 * @function setToken
 * @description sets a token string to the localstorage
 * @param {string} token
 * @returns {string} token
 */
export function setToken(token) {
  // eslint-disable-next-line no-undef
  return localStorage.setItem('token', token);
}

/**
 * @function crushToken
 * @description removes a token string from the localstorage
 * @returns {string} token
 */
export function crushToken() {
  // eslint-disable-next-line no-undef
  return localStorage.removeItem('token');
}
