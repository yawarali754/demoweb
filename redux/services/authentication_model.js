import qs from 'qs'

class AuthenticationModel {
  constructor(params) {
    this.secret = params.secret
    this.apiEndPoint = params.apiEndPoint
  }

  get accessToken() {
    return this.response.access_token
  }

  async readRequest(getFlights) {
    try {
      const parameters = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          authorization: `Basic ${this.secret}`,
        },
        body: qs.stringify({
          grant_type: 'client_credentials',
        }),
      }
      return await fetch(`${this.apiEndPoint}/v2/auth/token`, parameters)
        .then((res) => res.json())
        .then((json) => {
          return getFlights(json.access_token)
        })

      // this.response = JSON.parse(response)
    } catch (error) {
      console.log(`Authentication response error ${error.statusCode}`)
      console.log(JSON.parse(error.error))
    }
  }
}

module.exports = AuthenticationModel
