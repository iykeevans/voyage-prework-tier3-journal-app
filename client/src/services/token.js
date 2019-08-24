export function getToken() {
  return localStorage.getItem('token')
}

export function setToken(token) {
  return localStorage.setItem('token', token)
}

export function crushToken() {
  return localStorage.removeItem('token');
}
