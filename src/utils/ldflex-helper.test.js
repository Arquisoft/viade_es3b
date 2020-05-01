/*import * as ldflex from "./ldflex-helper";
import { cleanup } from "react-testing-library";
import React from 'react';
import * as Toaster from "./toaster";

afterAll(cleanup);

describe.only("Ldflex", () => {

  it('renders without crashing', () => {
    ldflex.documentExists("prueba");
    ldflex.createDocument("prueba", "body");
  });


  test('documentExists success', () => {
    return ldflex.documentExists("prueba").then(data => {
      expect(data).toStrictEqual({"ok":true, "status": 200});
    });
  });

  test('createDocumentTurtle success', () => {
    return ldflex.createDocumentWithTurtle("prueba", null).then(data => {
      expect(data).toStrictEqual({"ok":true, "status": 200});
    });
  })

  test('calls', () => {
    expect(ldflex.documentExists("prueba")).toBeTruthy;
    expect(ldflex.createDoc("prueba", null)).toBeTruthy;
    expect(ldflex.deleteFile("prueba")).toBeTruthy;
    expect(ldflex.createDocument("prueba")).toBeTruthy;
    expect(ldflex.createDocumentWithTurtle("prueba")).toBeTruthy;
    expect(ldflex.createNonExistentDocument("prueba")).toBeTruthy;
    expect(ldflex.fetchLdflexDocument("prueba")).toBeTruthy;
    expect(ldflex.resourceExists("prueba")).toBeTruthy;
    expect(ldflex.discoverInbox("prueba")).toBeTruthy;
    expect(ldflex.getLinkedInbox("prueba")).toBeTruthy;
  })


});*/