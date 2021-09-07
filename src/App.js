import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource} from 'react-admin';
import {computadorCreate, computadorList, computadorEdit} from './assets/computador';
import { gabineteList, gabineteEdit, gabineteCreate } from './assets/gabinete';
import {pecaList, pecaEdit, pecaCreate} from './assets/Peca';

const dataProvider = jsonServerProvider('http://localhost:8080');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="computadores" list={computadorList} edit={computadorEdit} create={computadorCreate}/>
        <Resource name="gabinete" list={gabineteList} edit={gabineteEdit} create={gabineteCreate}/>
        <Resource name="peca" list={pecaList} edit={pecaEdit} create={pecaCreate} />
    </Admin>
);

export default App;