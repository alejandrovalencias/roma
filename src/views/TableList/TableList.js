import React, { useState, useEffect, useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import { consultarCarros } from "../../components/model/registrarCarro";
import DataTable, { createTheme } from "react-data-table-component";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {

  const [datos, setDatos] = useState({ data: [] });
  const classes = useStyles();

  useEffect(() => {
    getCarros();
  }, [datos]);

  const getCarros = async () => {
    const carros = await consultarCarros();
    setDatos({ data: carros });
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Lista de carros registrados</h4>
          </CardHeader>
          <CardBody>
          {datos.data.length > 0 ? (
              <DataTable
                columns={[
                  {
                    name: "Vehiculo",
                    selector: "vehiculo",
                    sortable: true
                  },
                  {
                    name: "Placa",
                    selector: "placa",
                    sortable: true
                  },
                  {
                    name: "Cliente",
                    selector: "cliente",
                    sortable: true
                  },
                  {
                    name: "Telefono",
                    selector: "telefono",
                    sortable: true
                  },
                  {
                    name: "cedula",
                    selector: "documento",
                    sortable: true
                  },
                  {
                    name: "Kilometros",
                    selector: "kilometros",
                    sortable: true
                  },
                  {
                    name: "Modelo",
                    selector: "modelo",
                    sortable: true
                  }
                ]}
                data={datos.data}
              />
            ) : (
              "No hay datos para cargar"
            )}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
