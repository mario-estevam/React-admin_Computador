import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource} from 'react-admin';
import {computadorCreate, computadorList, computadorEdit} from './assets/computador';
import { gabineteList, gabineteEdit, gabineteCreate } from './assets/gabinete';
import {pecaList, pecaEdit, pecaCreate} from './assets/Peca';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox'
import BuildIcon from '@material-ui/icons/Build';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import { createMuiTheme } from '@material-ui/core/styles';
//up
const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
    secondary: {
      light: '#2D2D30',
      main: '#2D2D30',
      dark: '#2D2D30',
  },

  },
 
});

const dataProvider = jsonServerProvider('http://localhost:8080');
const App = () => (
    <Admin  theme={theme} dataProvider={dataProvider}>
        <Resource name="computadores" icon={DesktopWindowsIcon} list={computadorList} edit={computadorEdit} create={computadorCreate}/>
        <Resource name="gabinete" icon={IndeterminateCheckBoxIcon} list={gabineteList} edit={gabineteEdit} create={gabineteCreate}/>
        <Resource name="peca" icon={BuildIcon}   list={pecaList}  edit={pecaEdit} create={pecaCreate} />
    </Admin>
);

export default App;
