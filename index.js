import axios from 'axios';

const GraphQLFetch = async ({ query, variables = {} }) => {
  const config = {
    "Content-Type": "application/json"
  };
  const data = { query, variables }
  const endpoint = "http://localhost:8000/api/graphql/"
  return await axios({url: endpoint, data: data, headers: config, method: "POST"}).then((response) => {
    if(response.statusText === 'OK' && response.headers && response.headers["content-type"] === 'application/json')
      return response.data;
    throw response;
  }).catch((e) => {
    return {
      error: { code: "UNKNOWN ERROR", message: "Unknown Error - " + e.status },
      response: e,
    };
  });
};

export default GraphQLFetch;