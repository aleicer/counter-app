import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from "../../data/heroes"

describe('Purba con promesas', () => {

    test('retorna heroe async ', ( done ) =>{

        const id = 1

        getHeroeByIdAsync( id )
            .then(heroe => {
                expect(heroe).toBe(heroes[1])
                done()
            })
    })
})