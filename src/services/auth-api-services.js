import config from '../config'
import TokenService from './token-service'

const AuthApiService = {
  postLogin({name, password, props}) {
    const userLogin = JSON.stringify({ name, password })
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: userLogin,
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(res =>{
        TokenService.saveAuthToken(res.authToken)
      })
  },

  postUser(name, password, props) {
    const newUser = JSON.stringify({name, password})
    return fetch(`${config.API_ENDPOINT}/api/names`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newUser,
    })
      .then((res) => {
        if (!res.ok)
          return res.json().then((e) => Promise.reject(e));
        })
    .catch((error) => {
          console.error({ error });
        });
      }
    }

export default AuthApiService;