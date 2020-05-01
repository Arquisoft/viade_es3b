
import { cleanup } from 'react-testing-library';
import Rutas from './rutas';
import getJsonRoute from './../../utils/defaultJsonRoute'

describe('RUtas', () => {
  afterAll(cleanup);
  let ruta1 = getJsonRoute('ruta1','descripcion ruta 1','Alfonso Lozana',[[0,0],[1,1]],["multimedia"],[])
  let ruta2 = getJsonRoute('ruta2','descripcion ruta 2','Alfonso Lozana',[[0,0],[1,1]],["multimedia2"],[])
  let rutas = new Rutas(ruta1,ruta2);

  test('Check if routes values', () => {
    expect(rutas.hayRutas());
    expect(rutas.getNames() === ['ruta1','ruta2'])
    
    
   // expect(rutas.getRutaByName('ruta1').description === 'descripcion ruta 1')
    //expect(rutas.getRutaByPosition(1).points[0].getCoordinates === [0,0])
    expect(rutas.exitMedia('multimedia2'))
    expect(rutas.exitMedia('multimedia3') ===  false)
  });

  test

 
});
