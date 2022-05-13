import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas de desestructuracion', ()=>{

    test('Retorna un string y numero', () => {
        const [letras, numeros] = retornaArreglo()

        expect(letras).toBe('ABC')
        expect(numeros).toBe(123)
     })
})