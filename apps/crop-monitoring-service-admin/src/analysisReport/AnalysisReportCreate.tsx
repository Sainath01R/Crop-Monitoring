import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SatelliteImageTitle } from "../satelliteImage/SatelliteImageTitle";

export const AnalysisReportCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
