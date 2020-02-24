/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";
// core components/views for Admin layout

import TableList from "views/TableList/TableList.js";

// core components/views for RTL layout

// Camponente del negocio
import RegistrarCarro from "views/RegistrarCarro/RegistrarCarro";

const dashboardRoutes = [
  {
    path: "/carro",
    name: "Registrar carro",
    rtlName: "",  
    icon: Person,
    component: RegistrarCarro,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Lista de carros",
    rtlName: "",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
];

export default dashboardRoutes;
