//lib
import { Suspense } from "react";
import { Global } from "@emotion/react";
import { useRoutes } from "react-router-dom";

import routes from "./routes";
//import ErrorBoundary from "components/ErrorBoundary";
import LoadingPage from "components/LoadingPage";
import globalStyles from "./globalStyles"
function App() {
  let element = useRoutes(routes);
  
  
  return (
    //<ErrorBoundary>
    <>
    <Suspense fallback={<LoadingPage />}>{element}</Suspense>
      <Global styles={globalStyles} />
    </>
      
    //</ErrorBoundary>
  );
}

export default App;
