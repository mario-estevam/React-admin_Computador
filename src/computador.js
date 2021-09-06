import * as React from "react";
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, NumberInput, Create, ReferenceInput, SelectInput} from 'react-admin';

export const computadorList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="modelo" />
            <TextField source="ano" />
            <TextField source="gabinete.id" />
            <TextField source="documento.id" />
            <EditButton />
        </Datagrid>
    </List>
);

export const computadorEdit = props => (

    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="modelo" />
            <NumberInput source="ano" />
            <ReferenceInput label="Gabinete" source="gabinete.id" reference="gabinete">
                <SelectInput optionText="marca" opt/>
            </ReferenceInput>
            <TextInput source="documento.montado_por" />
            <NumberInput source="documento.cod_montagem" />
        </SimpleForm>
    </Edit>
);

export const computadorCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="modelo" />
            <NumberInput source="ano" />
        </SimpleForm>
    </Create>
);



