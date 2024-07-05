/// <reference path="./js/crud.t.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './js/crud';

// Create a row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva';
};

// Insert row and get the newRowID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)`);
console.log(`// Insert row ${JSON.stringify(row)}`);

// Update row with an age field
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(newRowID, updatedRow);`);
console.log(`// Update row ${newRowID} ${JSON.stringify(updatedRow)}`);

// Delete row
CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID});`);
console.log(`// Delete row id ${newRowID}`);
