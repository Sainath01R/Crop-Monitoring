import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SATELLITEIMAGE_TITLE_FIELD } from "../satelliteImage/SatelliteImageTitle";

export const AnalysisReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
