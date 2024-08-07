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
import { SATELLITEIMAGE_TITLE_FIELD } from "../satelliteImage/SatelliteImageTitle";

export const AnalysisReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AnalysisReports"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
