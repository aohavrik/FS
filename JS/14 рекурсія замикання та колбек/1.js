const arr1 = [1, 2, 3, 'sddd', 'wer']

function recurs(arr, i=0){
    if (arr.lenght > i ){
        console.log(arr[i]);
        recurs(arr, ++i)
    }
}
recurs(arr1)

//реверсивна логіка
function rev2 (arr, i=0){
    if (arr.lenght < i ) return

    console.log(arr1[i]);
    rec2(arr, ++i)
}


//closes
function step(){
    var num = 0

    function dec(){
        nam++
    }
    function inc(){
        num --
    }
    function getNum(){
        return num
    } 
    return{
        dec:dec,
        inc:inc,
        getNum:getNum
    }
}
console.log(step());


let objstep = step()
objstep.dec()

console.log(objstep);
