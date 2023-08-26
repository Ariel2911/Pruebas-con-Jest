import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas 07-deses-arr', () => {

  test('debe de retornar un string y un número', () => {

    const [ letters, number ] = retornaArreglo();

    expect(typeof letters).toBe('string');
    expect(typeof number).toBe('number');

    expect( letters ).toEqual(expect.any(String));

  });

});

//12359  20/8
//5000  15/8
//24365 15/8
// -4395
