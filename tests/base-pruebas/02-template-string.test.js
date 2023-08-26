import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {

  test('getsaludo debe retornar "Hola Ariel" ', () => {

    const name = 'Ariel';
    const message = getSaludo( name);
    
    expect( message ).toBe(`Hola ${ name }`)

  })
})