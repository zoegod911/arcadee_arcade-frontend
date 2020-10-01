import React, { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";

import "../normalize.css";
import "../topcoat-desktop-dark.css";
import "bulma/bulma.sass";

import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";

import { useStore } from "../store";

import Notifications from "../components/Notifications/Notifications";
import Loading from "../components/Loading/Loading";
import Routes from "./Routes";

const App = () => {
  const { auth } = useStore();

  useEffect(() => {
    auth.checkLoggedIn();
  }, []);

  if (auth.loading) return <Loading />;

  return (
    <>
      {auth.isLoggedIn && <Notifications />}
      <Routes />
    </>
  );
};

export default observer(App);
