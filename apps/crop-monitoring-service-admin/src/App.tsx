import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FieldModelList } from "./fieldModel/FieldModelList";
import { FieldModelCreate } from "./fieldModel/FieldModelCreate";
import { FieldModelEdit } from "./fieldModel/FieldModelEdit";
import { FieldModelShow } from "./fieldModel/FieldModelShow";
import { FarmerList } from "./farmer/FarmerList";
import { FarmerCreate } from "./farmer/FarmerCreate";
import { FarmerEdit } from "./farmer/FarmerEdit";
import { FarmerShow } from "./farmer/FarmerShow";
import { SatelliteImageList } from "./satelliteImage/SatelliteImageList";
import { SatelliteImageCreate } from "./satelliteImage/SatelliteImageCreate";
import { SatelliteImageEdit } from "./satelliteImage/SatelliteImageEdit";
import { SatelliteImageShow } from "./satelliteImage/SatelliteImageShow";
import { AnalysisReportList } from "./analysisReport/AnalysisReportList";
import { AnalysisReportCreate } from "./analysisReport/AnalysisReportCreate";
import { AnalysisReportEdit } from "./analysisReport/AnalysisReportEdit";
import { AnalysisReportShow } from "./analysisReport/AnalysisReportShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CropMonitoringService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FieldModel"
          list={FieldModelList}
          edit={FieldModelEdit}
          create={FieldModelCreate}
          show={FieldModelShow}
        />
        <Resource
          name="Farmer"
          list={FarmerList}
          edit={FarmerEdit}
          create={FarmerCreate}
          show={FarmerShow}
        />
        <Resource
          name="SatelliteImage"
          list={SatelliteImageList}
          edit={SatelliteImageEdit}
          create={SatelliteImageCreate}
          show={SatelliteImageShow}
        />
        <Resource
          name="AnalysisReport"
          list={AnalysisReportList}
          edit={AnalysisReportEdit}
          create={AnalysisReportCreate}
          show={AnalysisReportShow}
        />
      </Admin>
    </div>
  );
};

export default App;
