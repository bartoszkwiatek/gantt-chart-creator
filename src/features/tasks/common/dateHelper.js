
// all function input and return is in ms, unless otherwise stated
const now = () => {
  return Date.parse(new Date())
}

const today = () => {
  const day = ((new Date()).toDateString())           // doing this to be sure that I only get day, with 0 hours and minutes
  const today = Date.parse(day)
  return today
}

const addDays = (baseDate, howManyDays = 0) => {
  const dateString = ((new Date(baseDate)).toDateString())            // processing dates like this, so it accepts both ms and yyyy-mm-dd input (default for input[date])
  const dateMS = Date.parse(dateString)
  return (dateMS + 86400000 * Math.floor(howManyDays))          // doing this to be sure that I only get day, with 0 hours and minutes
}

// return date's chosen thingy - day in number [1,31]; month in string, year in number
const customGetDate = (baseDate, selector) => {
  const date = new Date(baseDate)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const daysAbbr = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const monthsAbbr = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

  switch (selector) {
    case 'day':
      return date.getDate()
    case 'day-of-the-week':
      return days[date.getDay()]
    case 'day-of-the-week-abbr':
      return daysAbbr[date.getDay()]
    case 'month':
      return months[date.getMonth()]
    case 'month-abbr':
      return monthsAbbr[date.getMonth()]
    case 'year':
      return date.getFullYear()
    default:
      return date.toLocaleDateString(undefined, options)
  }
}

// in days
const dateDifference = (firstDate, secondDate) => {
  const difference = Math.floor((secondDate - firstDate) / 86400000)
  return difference
}

// const taskDuration = (firstDate, secondDate) => {
//   const duration = Math.floor((secondDate - firstDate) / 86400000) + 1
//   return duration
// }

// returns array of days between two dates (in ms)
const datesBetween = (firstDate, secondDate, skip = null) => {
  const difference = dateDifference(firstDate, secondDate);

  let dates = []

  if (difference < 0) {
    console.warn('Wrong input')
    return ['error']
  } else {
    for (let index = 0; index <= difference; index++) {
      dates.push(addDays(firstDate, index))
    }
  }

  if (skip !== null) {
    dates.splice(dates.indexOf(skip[0]) + 1, skip[1] - 1)
  }
  return dates
}

//      returns an object consisting of objects with number of occurences
//      [{title: "Jun`e", count: 24}, {title: "July", count: 17}]
//      to use with `grid-column: span ${count}`
const countOccurrences = (firstDay, lastDay, selector) => {
  const dates = datesBetween(firstDay, lastDay).map(day => customGetDate(day, selector))
  let countBySelector = [...new Set(dates)].map(
    selected => {
      return {
        'title': selected,
        'count': dates.filter(check => check === selected).length
      }
    });
  return countBySelector
}


export {
  now,
  today,
  addDays,
  customGetDate,
  dateDifference,
  datesBetween,
  countOccurrences
}