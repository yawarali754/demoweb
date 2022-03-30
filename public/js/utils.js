export const simplifyTime = (time) => {
  let hour = new Date(time).getHours()
  let minutes = new Date(time).getMinutes()
  return `${prefixZero(hour)} : ${prefixZero(minutes)}`
}
export const prefixZero = (number) =>
  (number + '').length > 1 ? number + '' : '0' + number

export const minuteToTime = (minute) =>
  Math.floor(minute / 60) + 'hr ' + (minute % 60) + 'min'

export const calculateStop = (segments) =>
  segments.length - 1 > 0 ? segments.length - 1 + ' Stop' : 'Non-Stop'

export const changePassengerCode = (codes) => {
  if (codes === 'ADT') {
    return 'Adult'
  }
  if (codes === 'CNN') {
    return 'Child'
  }
  if (codes === 'YTH') {
    return 'Youth'
  }
  if (codes === 'INF') {
    return 'Infant'
  }
}
export const changePassengerType = (type) => {
  if (type === 'adultPassengers') {
    return 'ADT'
  }
  if (type === 'childPassengers') {
    return 'CNN'
  }
  if (type === 'youthPassengers') {
    return 'YTH'
  }
  if (type === 'infantPassengers') {
    return 'INF'
  }
}

export const formatDate = (date) => {
  let str = date.toISOString()
  return str.substring(0, str.length - 5)
}
