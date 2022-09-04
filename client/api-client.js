import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

/**
 *  retrieves an article
 * @param {string} id
 * @returns {Object}
 */
export async function getArticle(id) {
  const endpoint = `${publicRuntimeConfig.API}/api/article/${id}`;
  const options = buildGetOptions();

  return await makeRequest(endpoint, options);
}

/**
 *  retrieves all articles
 * @returns {Object}
 */
 export async function getArticles() {
  const endpoint = `${publicRuntimeConfig.API}/api/articles`;
  const options = buildGetOptions();

  return await makeRequest(endpoint, options);
}

/**
 *  retrieves all page listings
 * @returns {Object}
 */
 export async function getPagesList() {
  const endpoint = `${publicRuntimeConfig.API}/api/pages`;
  const options = buildGetOptions();

  return await makeRequest(endpoint, options);
}


/**
 *  builds options for a PATCH request
 * @param {Object} payload
 * @returns {Object}
 */
 function buildPatchOptions(payload) {
  const cookie = buildCookie();

  return {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload), // body data type must match "Content-Type" header
  };
}

/**
 * builds options for a GET request
 * @returns {Object}
 */
function buildGetOptions() {
  // const cookie = buildCookie(userToken, adminToken);

  return {
    method: 'GET',
    // credentials: 'include',
    // headers: {
    //   Cookie: cookie,
    // },
  };
}

/**
 * builds cookie string for authentication
 * @returns {string}
 */
function buildCookie(userToken, adminToken) {
  let cookie = ``;
  return cookie;
}

/**
 * performs a request to the API
 * @param {string} endpoint
 * @param {Object} options
 * @returns Promise<Object>
 */
async function makeRequest(endpoint, options) {
  const response = await fetch(endpoint, options);

  const result = await response.json();

  return result;
}
