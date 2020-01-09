import React from "react";
import { Redirect } from "react-router-dom";
import Rank from "../views/rank/index.jsx";
import Recommend from "../views/recommend/index.jsx";
import Singer from "../views/singers/index.jsx";
import Layout from "../layout/index.jsx";
export default [
  {
    path: "/",
    component: Layout,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => <Redirect to={"/recommend"}></Redirect>
      },
      {
        path: "/recommend",
        component: Recommend
      },
      {
        path: "/rank",
        component: Rank
      },
      {
        path: "/singer",
        component: Singer
      }
    ]
  }
];
