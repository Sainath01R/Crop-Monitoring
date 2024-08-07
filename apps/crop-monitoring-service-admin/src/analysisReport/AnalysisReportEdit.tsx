import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SatelliteImageTitle } from "../satelliteImage/SatelliteImageTitle";

export const AnalysisReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="reportDate" source="reportDate" />
        <ReferenceInput
          source="satelliteImage.id"
          reference="SatelliteImage"
          label="SatelliteImage"
        >
          <SelectInput optionText={SatelliteImageTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
