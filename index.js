/* Chessboard dojo

In order to represent a chessboard in a program, write a chessboard function that will 
return an array of arrays containing the squares coordinates.
Pour représenter un échiquier dans un programme, écrivez une fonction d'échiquier qui
renvoie un tableau de tableaux contenant les coordonnées des carrés.*/

/*
const array=
    ['a - 1', 'a - 2', 'a - 3', 'a - 4', 'a - 5', 'a - 6', 'a - 7', 'a - 8']; c
    ['b - 1', 'b - 2', 'b - 3', 'b - 4', 'b - 5', 'b - 6', 'b - 7', 'b - 8'];
    ['h - 1', 'h - 2', 'h - 3', 'h - 4', 'h - 5', 'h - 6', 'h - 7', 'h - 8'];
*/



const chessboard = () => {
    const _chessboard = [];

    for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
        const row = [];
        const columnLetter = String.fromCharCode(97 + rowIndex);

        for (let colIndex = 0; colIndex < 8; colIndex++) {
            row.push(`${columnLetter} - ${colIndex + 1}`);
        }

        _chessboard.push(row);
    }

    return _chessboard;
};

function program(){
    const array= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const output =[]
    let arr = []

    for (let i = 0; i < array.length ;i++) {
        for (let j = 1; j < 9; j++) {
            if (j <= 7) arr.push(`${array[i]} - ${j}`)      
            if (j === 8) {
                arr.push(`${array[i]} - ${j}`)  
                output.push(arr);
                arr = []
            }
        }
    }      
  
    return output
}

console.log(program());
