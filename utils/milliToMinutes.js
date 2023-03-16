
export const milliToSeconds = (milliseconds) => {
  const minutes = milliseconds / 60000 // 1 minute = 60,000 milliseconds
  const minuteParts = minutes.toFixed(2).split('.') // Divide into integer and decimal parts
  let integerMinutes = minuteParts[0]
  const decimalMinutes = minuteParts[1] || '00' // If there's no decimal part, use '00'
  let seconds = Math.round(parseInt(decimalMinutes) * 60 / 100) // Calculate corresponding seconds
  if (seconds === 60) { // If seconds are 60, add an additional minute and reset seconds to zero
    integerMinutes = parseInt(integerMinutes) + 1
    seconds = 0
  }
  // Combine minutes and seconds with a colon and return the result
  return integerMinutes + ':' + (seconds < 10 ? '0' : '') + seconds
}
