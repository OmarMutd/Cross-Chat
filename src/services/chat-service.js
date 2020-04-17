import config from '../config';
import TokenService from './token-service';

const ChatService = {
  deleteUser() {
    return fetch(`${config.API_ENDPOINT}/api/names/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .catch(error => {
        console.error(error)
      })
  },

changePassword() {
  // const bodyName = JSON.stringify({ name, password, newpassword })
    return fetch(`${config.API_ENDPOINT}/api/names/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      // body: bodyName,
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .catch(error => {
        console.error(error)
      })
  }
}

export default ChatService;