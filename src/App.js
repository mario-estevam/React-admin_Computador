import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource} from 'react-admin';
import {computadorCreate, computadorList, computadorEdit} from './computador';
import { gabineteList, gabineteEdit, gabineteCreate } from './gabinete';
import {pecaList, pecaEdit, pecaCreate} from './Peca';

const dataProvider = jsonServerProvider('http://localhost:8080');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="computador" list={computadorList} edit={computadorEdit} create={computadorCreate}/>
        <Resource name="gabinete" list={gabineteList} edit={gabineteEdit} create={gabineteCreate}/>
        <Resource name="peca" list={pecaList} edit={pecaEdit} create={pecaCreate} />
    </Admin>
);

export default App;