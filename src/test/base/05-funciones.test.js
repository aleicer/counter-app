import { getUser } from "../../base/05-funciones"

describe('Pruebas en 05 funciones', ()=>{
    test('GetUser debe retornar un objeto', () => { 
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect( user ).toEqual( userTest )
     })
})