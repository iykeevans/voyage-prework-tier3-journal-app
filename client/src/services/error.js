/**
 * @function handleError
 * @param {object} error
 * @returns {object} error
 */
// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line import/prefer-default-export
export function handleError(error) {
  /**
   * @param {object} error
   * @returns {object} console
   */
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log('err response data', error.response.data);
    console.log('err response status', error.response.status);
    console.log('err response header', error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log('error request', error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
}
