import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {

  test('get user debe de retornar un objeto', () => {

    const user = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const testUser = getUser();

    expect(user).toEqual(testUser)

  });

  test('getUsuarioActivo debe de retornar un objeto', () => {

    const name = 'Ariel';
    const testUser = {
      uid: 'ABC567',
      username: name
    };
    const user = getUsuarioActivo(name);

    expect(user).toEqual(testUser)
  })
})