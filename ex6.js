const valores = [7,5,2,-15]

for(let i = 0; i < valores.length; i++){
    for(let j = 0; j < valores.length - 1; j++){
            if(valores[j] > valores[j + 1]){
                let aux = valores[j]
                valores[j] = valores[j + 1]
                valores[j+ 1] = aux

            }

            

    }
    console.log(valores)
}