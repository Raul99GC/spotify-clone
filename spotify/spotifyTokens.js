import axios from 'axios'

const logout = async () => {
  await fetch('/api/logout', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  })
}

const refreshToken = async (token) => {
  try {
    await axios({
      method: 'get',
      url: 'http://localhost:3000/api/refreshToken'
    })
  } catch (error) {
    console.log(error)
  }
}

export {
  logout,
  refreshToken
}
