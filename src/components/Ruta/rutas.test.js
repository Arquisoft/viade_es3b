import { cleanup } from 'react-testing-library';
import Rutas from './rutas';
import getJsonRoute from './../../utils/defaultJsonRoute'
import getJsonComments from './../../utils/defaultJsonComments'
import { Point, WayPoint } from './point';
import Ruta from './ruta';

describe('RUtas', () => {
  afterAll(cleanup);
  let point = new Point(150, 30, 0);
  let wayPoint = new WayPoint("Way point", "Descripción", point);
  let ruta1 = getJsonRoute('ruta1', 'descripcion ruta 1', 'Alfonso Lozana', [[0, 0], [1, 1]], ["multimedia"], [new WayPoint("Way point", "Descripción", wayPoint)])
  let ruta2 = getJsonRoute('ruta2', 'descripcion ruta 2', 'Alfonso Lozana', [[0, 0], [1, 1]], ["multimedia2"], [])
  let rutas = new Rutas([ruta1, ruta2], [JSON.parse(getJsonComments()), JSON.parse(getJsonComments())], ['ruta1', 'ruta2'], false, null);



  test('Check  routes values', () => {
    expect(rutas.hayRutas());
    expect(rutas.getNames() === ['ruta1', 'ruta2'])
    expect(rutas.rutas === ['ruta1', 'ruta2'])
    expect(rutas.getRutaByName('ruta2').getName() !== 'ruta2');
    expect(rutas.getRutaByName('ruta3') === undefined);
    expect(rutas.getRutaByPosition(0).getName() == 'ruta1');
    expect(rutas.getRutaByPosition(5) === undefined);

    expect(rutas.exitMedia('multimedia2'))
    expect(rutas.exitMedia('multimedia3') === false)
  });

  ruta1 = rutas.getRutaByPosition(0);

  test('Check point values', () => {
    expect(ruta1.comments.length === 0);
    ruta1.createComment(JSON.parse(getJsonComments()), "Comentario Nuevo")
    expect(ruta1.comments.length === 1);
    ruta1.createComment(JSON.parse(getJsonComments()), "Comentario Nuevo 2")
    expect(ruta1.comments.length === 2);
    expect(ruta1.getDistance() > 0);
    expect(ruta1.getWayPoints() === 0);
    ruta1.addWayPoints(wayPoint);
    expect(ruta1.getWayPoints()[0].getName() === "Way point");
    expect(ruta1.getWayPoints() === 1);
    ruta1.addWayPoints(wayPoint);
    expect(ruta1.getWayPoints()[1].getPoint().getCoordinates() === [150, 30]);
    expect(ruta1.getWayPoints() === 2);
  })



  test('Check point values', () => {
    expect(point.getCoordinates() === [150, 30]);
  })



});