import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes"

describe('Pruebas funciones heroes', () =>{

    test('debe retornar heroe id', () => {
        const id = 1
        const heroe = getHeroeById( id )

        const heroesData = heroes.find(h => h.id === id)

        expect( heroe).toEqual(heroesData)
    })

    test('debe retornar undefined si hero no existe', () => {
        const id = 10 
        const heroe = getHeroeById( id )

        expect( heroe).toEqual(undefined)
    })

    test('debe retornar enumeracion de dc', () => {
        const owner = 'DC' 
        const heroes = getHeroesByOwner(owner)
        const heroesData = heroes.filter(h => h.owner === owner)

        expect( heroes).toEqual(heroesData)
    })
})