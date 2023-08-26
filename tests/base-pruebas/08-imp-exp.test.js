import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp', () => {

  test('getHeroesById debe de retornar un héroe por id', () => {
    
    const id = 1;
    const heroe = getHeroeById(id)

    expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

  });

  test('getHeroeById debe de retornar undefined si no existe', () => {

    const id = 100;
    const heroe = getHeroeById(id)

    expect(heroe).toBeFalsy()

  })

  test('debe de retornar un arreglo con los héroes de DC', () => {

    const owner = 'DC';
    const heroes = getHeroesByOwner(owner)

    expect(heroes.length).toBe(3)
    expect(heroes).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ])

  })

  test('debe de retornar un arreglo con los héroes deMarvel', () => {

    const owner = 'Marvel';
    const heroeList = getHeroesByOwner(owner);
    const heroesMarvel = [
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' }
    ]

    expect(heroeList).toEqual(heroesMarvel)
    
    expect(heroeList).toEqual(heroes.filter((heroe) => heroe.owner === owner))

  })
  
})