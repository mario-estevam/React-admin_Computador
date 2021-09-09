import * as React from "react";
import {NumberInput, SimpleFormIterator, List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create, ArrayInput} from 'react-admin';

export const pecaList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="tipo" />
            <TextField source="gabinete" />
            <EditButton/>
        </Datagrid>
    </List>
);

export const pecaEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="nome" />
            <TextInput source="tipo" />
            <ArrayInput source="gabinete">
                <SimpleFormIterator>
                    <NumberInput source="id" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const pecaCreate = props => (
    <Create {...props}>
         <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="tipo" />
            <ArrayInput source="gabinete">
                <SimpleFormIterator>
                    <NumberInput source="id" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);