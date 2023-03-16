import axios from 'axios'

export default async (req, res) => {
  const refreshToken = req.cookies.spotify_refresh_token
  console.log(refreshToken)
  const url = 'http://localhost:8000/papa'

  axios.get(url)
    .then(response => {
      console.log(response.data)
      res.status(200).json({ cosa: response.data })
    })
    .catch(() => {
      res.status(400).json({ err: 'error perro' })
    })
}
