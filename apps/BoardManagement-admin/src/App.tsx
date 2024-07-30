import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BoardList } from "./board/BoardList";
import { BoardCreate } from "./board/BoardCreate";
import { BoardEdit } from "./board/BoardEdit";
import { BoardShow } from "./board/BoardShow";
import { ImageGenerationHistoryList } from "./imageGenerationHistory/ImageGenerationHistoryList";
import { ImageGenerationHistoryCreate } from "./imageGenerationHistory/ImageGenerationHistoryCreate";
import { ImageGenerationHistoryEdit } from "./imageGenerationHistory/ImageGenerationHistoryEdit";
import { ImageGenerationHistoryShow } from "./imageGenerationHistory/ImageGenerationHistoryShow";
import { ImageList } from "./image/ImageList";
import { ImageCreate } from "./image/ImageCreate";
import { ImageEdit } from "./image/ImageEdit";
import { ImageShow } from "./image/ImageShow";
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
        title={"BoardManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Board"
          list={BoardList}
          edit={BoardEdit}
          create={BoardCreate}
          show={BoardShow}
        />
        <Resource
          name="ImageGenerationHistory"
          list={ImageGenerationHistoryList}
          edit={ImageGenerationHistoryEdit}
          create={ImageGenerationHistoryCreate}
          show={ImageGenerationHistoryShow}
        />
        <Resource
          name="Image"
          list={ImageList}
          edit={ImageEdit}
          create={ImageCreate}
          show={ImageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
