import "./styles.css";
import { Route, Routes } from "react-router-dom";
import MenuHeader from "./components/MenuHeader";
import React, { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import axios from "axios";
export default function App() {
  const [routerList, setRouterList] = useState([]);

  const getRoute = () => {
    axios
      .get("http://localhost:3000/data", {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((res: any) => {
        setRouterList(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRoute();
  }, []);
  let renderRouter = (routerObj: any) => {
    let DynamicComponent = lazy(() => import(routerObj.modulePath));
    let children = routerList.filter((r: any) => r.parentId === routerObj.id);
    return (
      <Route
        path={routerObj.url}
        element={
          <Suspense>
            <DynamicComponent />
          </Suspense>
        }
      >
        {children.length &&
          children.map((child: any) => {
            return renderRouter(child);
          })}
      </Route>
    );
  };

  return (
    <div className="App">
      <MenuHeader />
      <Routes>
        {routerList
          .filter((r: any) => r.parentId == null)
          .map((obj, index) => {
            return renderRouter(obj);
          })}
      </Routes>
    </div>
  );
}
