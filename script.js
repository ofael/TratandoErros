
function myArr(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');
    
        if(typeof arr !== Number ) throw new TypeError('Array precisa ser do tipo number');
    
        if(arr.length !== num) throw new RangeError('Tamanho inválido')
    
        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log('Este erro é um ReferenceError!')
            throw e;
        }

        else if(e instanceof TypeError){
            console.log('Este erro é um TypeErro')
            throw e;
        }
        else if(e instanceof RangeError){
            console.log('Este erro é um RangeError')
            throw e;
        }
        else{
            console.log('Tipo erro não esperado : ' + e)
        }
    }
}
console.log(myArr([],5))    