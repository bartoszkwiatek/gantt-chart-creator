// all function input and return is in ms, unless otherwise stated
const today = () => {
    return (new Date()).getTime()
}

const addDays = (baseDate, howManyDays) => {
    return (baseDate + 86400000 * Math.floor(howManyDays))
}

// return date's chosen thingy - day in number [1,31]; month in string, year in number
const customGetDate = (baseDate, selector) => {
    const date = new Date(baseDate)
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

    switch (selector) {
        case 'day':
            return date.getDate()
        case 'dayOfTheWeek':
            return days[date.getDay() - 1]
        case 'month':
            return months[date.getMonth()]
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

// returns array of days between two dates (in ms)
const datesBetween = (firstDate, secondDate) => {
    const difference = dateDifference(firstDate, secondDate);
    let dates = []

    if (difference < 0) {
        console.warn('Wrong input')
        return ['error']
    } else {
        for (let index = 0; index <= difference; index++) {
            console.log(difference)
            dates.push(addDays(firstDate, index))
        }
    }
    return dates

}


export {
    today,
    addDays,
    customGetDate,
    dateDifference,
    datesBetween
}