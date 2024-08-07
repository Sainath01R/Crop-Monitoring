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

import { SATELLITEIMAGE_TITLE_FIELD } from "./SatelliteImageTitle";
import { FIELDMODEL_TITLE_FIELD } from "../fieldModel/FieldModelTitle";

export const SatelliteImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="AnalysisReport"
          target="satelliteImageId"
          label="AnalysisReports"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="data" source="data" />
            <TextField label="ID" source="id" />
            <TextField label="reportDate" source="reportDate" />
            <ReferenceField
              label="SatelliteImage"
              source="satelliteimage.id"
              reference="SatelliteImage"
            >
              <TextField source={SATELLITEIMAGE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
