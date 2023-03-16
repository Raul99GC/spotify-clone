
export default (req, res) => {
  const token = req.cookies.spotify_access_token
  const timeStamp = req.cookies.spotify_token_timestamp

  res.status(200).json({ token, timeStamp })
}
