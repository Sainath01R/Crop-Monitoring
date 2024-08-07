import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FarmerTitle } from "../farmer/FarmerTitle";
import { SatelliteImageTitle } from "../satelliteImage/SatelliteImageTitle";

export const FieldModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="cropType"
          label="cropType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="farmer.id" reference="Farmer" label="Farmer">
          <SelectInput optionText={FarmerTitle} />
        </ReferenceInput>
        <TextInput label="fieldName" source="fieldName" />
        <div />
        <ReferenceArrayInput
          source="satelliteImages"
          reference="SatelliteImage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SatelliteImageTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
