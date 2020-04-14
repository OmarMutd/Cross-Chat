import config from '../config'

const AuthApiService = {
  postLogin({name, password}) {
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
  },

  postUser(name, password, props) {
    const newUser = JSON.stringify({name, password})
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: newUser,
    })
      .then((res) => {
        if (!res.ok)
          return res.json().then((e) => Promise.reject(e));
          props.history.push('/SignInPage')
        })
    .catch((error) => {
          console.error({ error });
        });
      }
    }

export default AuthApiService;