let monthSelect = 1;

const month28 = 2;
const month30 = [4,6,9,11];
const month31 = [1,3,5,7,8,10,12];


function month (select) {
    if (select < 1 || select > 12){
        console.log('el mes seleccionado no existe, elija entre los valores 1 y 12')
    }
    if (select === month28){
        console.log('el mes seleccionado tiene 28 días');
    }
    
    for(i = 0; i <= monthSelect; i++){
        if (select === month30[i]){
            console.log('el mes seleccionado tiene 30 días');
            }
    }
    
    for(i = 0; i <= monthSelect; i++){
        if (select === month31[i]){
            console.log('el mes seleccionado tiene 31 días');
            }
        }

}

month(monthSelect)