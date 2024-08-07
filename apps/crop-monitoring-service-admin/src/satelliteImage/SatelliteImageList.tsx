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
import { FIELDMODEL_TITLE_FIELD } from "../fieldModel/FieldModelTitle";

export const SatelliteImageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SatelliteImages"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
