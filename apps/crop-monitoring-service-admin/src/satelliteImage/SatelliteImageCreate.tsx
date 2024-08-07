import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AnalysisReportTitle } from "../analysisReport/AnalysisReportTitle";
import { FieldModelTitle } from "../fieldModel/FieldModelTitle";

export const SatelliteImageCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="analysisReports"
          reference="AnalysisReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnalysisReportTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="dateCaptured" source="dateCaptured" />
        <ReferenceInput
          source="fieldModel.id"
          reference="FieldModel"
          label="FieldModel"
        >
          <SelectInput optionText={FieldModelTitle} />
        </ReferenceInput>
        <TextInput label="imageUrl" source="imageUrl" />
      </SimpleForm>
    </Create>
  );
};
