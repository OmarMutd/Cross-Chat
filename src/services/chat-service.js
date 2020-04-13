import config from '../config';
import TokenService from './token-service';

const ChatService = {
  deleteUser() {
    return fetch(`${config.API_ENDPOINT}/replies/`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .catch(error => {
        console.error(error)
      })
  },

changePassword() {
    return fetch(`${config.API_ENDPOINT}/names/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ content }),
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