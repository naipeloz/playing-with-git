function days(year, month){
    return new Date(year, month, 0).getDate();
}
console.log(days(2022, 7));
console.log(days(2021, 2));