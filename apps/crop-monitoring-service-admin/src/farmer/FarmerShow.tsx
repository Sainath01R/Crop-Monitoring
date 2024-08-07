import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FARMER_TITLE_FIELD } from "./FarmerTitle";

export const FarmerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="FieldModel"
          target="farmerId"
          label="Fields"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="cropType" source="cropType" />
            <ReferenceField
              label="Farmer"
              source="farmer.id"
              reference="Farmer"
            >
              <TextField source={FARMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="fieldName" source="fieldName" />
            <TextField label="ID" source="id" />
            <TextField label="location" source="location" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
