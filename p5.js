function getNumberOfDaysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}


module.exports.getNumberOfDaysInMonth = getNumberOfDaysInMonth
month=10
year=2012
console.log(getNumberOfDaysInMonth(month,year))