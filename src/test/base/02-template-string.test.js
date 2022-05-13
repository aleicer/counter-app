import { getSaludo } from "../../base/02-template-string"

describe('pruebas en 02-template-string.js', () => {

    test('debe de retornr hola ***', () => {
        const nombre = 'Aleicer'
        
        const saludo = getSaludo(nombre)
        console.log(saludo)
        
        expect( saludo ).toBe('Hola Aleicer')
     })
})