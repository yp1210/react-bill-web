const setPersistenceToken = (token) => {
  localStorage.setItem('token', token);
}

const getToken = () => {
  return localStorage.getItem('token')
}

const removeToken = () => {
  return localStorage.removeItem('token')
}

export {
  setPersistenceToken,
  getToken,
  removeToken,
}