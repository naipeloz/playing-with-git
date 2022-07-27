const meses = [
    {nombre: 'Enero', dias: 31},
    {nombre: 'Febrero', dias: 28},
    {nombre: 'Marzo', dias: 31},
    {nombre: 'Abril', dias: 30},
    {nombre: 'Mayo', dias: 31},
    {nombre: 'Junio', dias: 31},
    {nombre: 'Julio', dias: 30},
    {nombre: 'Agosto', dias: 31},
    {nombre: 'Setiembre', dias: 30},
    {nombre: 'Octubre', dias: 31},
    {nombre: 'Noviembre', dias: 30},
    {nombre: 'Diciembre', dias: 31}
]


function diasMes(month, year) {
    return new Date(year, month, 0).getDate();
}

console.log(diasMes(1, 2022));
console.log(diasMes(2, 2022));
console.log(diasMes(3, 2022));
console.log(diasMes(4, 2022));