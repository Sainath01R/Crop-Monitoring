import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FIELDMODEL_TITLE_FIELD } from "./FieldModelTitle";
import { FARMER_TITLE_FIELD } from "../farmer/FarmerTitle";

export const FieldModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="cropType" source="cropType" />
        <ReferenceField label="Farmer" source="farmer.id" reference="Farmer">
          <TextField source={FARMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="fieldName" source="fieldName" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SatelliteImage"
          target="fieldModelId"
          label="SatelliteImages"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCaptured" source="dateCaptured" />
            <ReferenceField
              label="FieldModel"
              source="fieldmodel.id"
              reference="FieldModel"
            >
              <TextField source={FIELDMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="imageUrl" source="imageUrl" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
