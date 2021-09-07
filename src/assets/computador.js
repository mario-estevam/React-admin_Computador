import * as React from "react";
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create, ReferenceInput, SelectInput} from 'react-admin';

export const computadorList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="tipo" />
            <TextField source="fabricante" />
            <TextField source="gabinete" />
            <TextField source="documento" />
            <EditButton />
        </Datagrid>
    </List>
);

export const computadorEdit = props => (

    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="tipo" />
            <TextInput source="fabricante" />
            <ReferenceInput label="Gabinete" source="gabinete.id" reference="gabinete">
                <SelectInput optionText="modelo" opt/>
            </ReferenceInput>
            <TextInput source="documento.montado_por" />
            <TextInput source="documento.cod_montagem" />
        </SimpleForm>
    </Edit>
);

export const computadorCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="tipo" />
            <TextInput source="fabricante" />
        </SimpleForm>
    </Create>
);



