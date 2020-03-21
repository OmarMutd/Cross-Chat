class Auth {
    constructor() {
        this.authenticated = false
    }
// During Log in make a post request to the back-end, passing username and password
// back end should respond with token if the user and password match otherwise should response with an error
    login(cb) {
        this.authenticated = true
        cb()
    }

    logout(cb) {
        this.authenticated = false
        cb()
    }

    isAuthenticated() {
        return this.authenticated;
    }

}


export default new Auth()