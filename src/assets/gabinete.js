import * as React from "react";
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput,  Create} from 'react-admin';

export const gabineteList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="modelo" />
            <TextField source="marca" />
            <EditButton />
        </Datagrid>
    </List>
);

export const gabineteEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="marca" />
            <TextInput source="modelo" />
        </SimpleForm>
    </Edit>
);

export const gabineteCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="marca" />
            <TextInput source="modelo" />
        </SimpleForm>
    </Create>
);