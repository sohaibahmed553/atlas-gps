import React from "react";
import "./App.css";
import theme from "JS/React/Style/Theme";
import Root from "JS/React/Scenes/Root";
import {
  ThemeProvider,
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { initializeApp } from "firebase/app";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore/lite";

import { config } from "JS/Config";

const app = initializeApp({
  apiKey: config.firebase.apiKey,
  appId: config.firebase.appId,
  authDomain: config.firebase.authDomain,
  databaseURL: config.firebase.databaseURL,
  measurementId: config.firebase.measurementId,
  messagingSenderId: config.firebase.messagingSenderId,
  projectId: config.firebase.projectId,
  storageBucket: config.firebase.storageBucket,
});

function App() {
  const generateClassName = createGenerateClassName();

  // const getRoutes = async () => {
  //   const db = getFirestore(app);
  //   const routesCol = collection(db, "Routes");
  //   const routesSnap = await getDocs(routesCol);
  //   const list = routesSnap.docs.map((doc) => doc.data());

  //   console.log("firebase value", list);
  // };

  // const first = query(
  //   collection(db, "Routes"),
  //   orderBy("country_code"),
  //   limit(25)
  // );

  // const [value, loading, error] = useCollection(
  //   collection(getFirestore(app), "Routes"),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   }
  // );

  // getRoutes();

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Root />
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
