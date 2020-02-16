const loginEndpoint = 'http://localhost:3333/login';
export function loginRequest(username, password) {
  return fetch(loginEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username: username, password: password}),
  }).then(json => {
      if (json.ok) {
        return json.json().then(response => verifyRequest(response));
      } else {
        return false;
      }
    }).catch(error => console.log(error));
}

const verifyEndpoint = 'http://localhost:3333/verifyToken';
export function verifyRequest(response) {
  return fetch(verifyEndpoint, {
    method: 'GET',
    headers: {'Authorization': 'Bearer ' + response.token}
  }).then(response => response)
    .catch(error => console.log(error));
}