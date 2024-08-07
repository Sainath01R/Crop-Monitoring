import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FARMER_TITLE_FIELD } from "../farmer/FarmerTitle";

export const FieldModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Fields"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="cropType" source="cropType" />
        <ReferenceField label="Farmer" source="farmer.id" reference="Farmer">
          <TextField source={FARMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="fieldName" source="fieldName" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
