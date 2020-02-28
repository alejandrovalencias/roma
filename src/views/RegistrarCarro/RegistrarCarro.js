import React, { useState, useEffect, useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import {guardarDatos,consultarCarros} from "../../components/model/registrarCarro";
import Swal from "sweetalert2";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    // fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const columnsInput = {
  vehiculo: "",
  placa: "",
  cliente: "",
  telefono: "",
  documento: "",
  modelo: "",
  kilometros: "",
  // boton: true
};

const useStyles = makeStyles(styles);

const RegistrarCarro = props => {
  const [datos, setDatos] = useState(columnsInput);

  const changeData = e => {
    const { value, name } = e.target;
    const newData = { ...datos };
    newData[name] = value;
    setDatos(newData);
  };

  const enviar = async () => {

    const listaCarros = await consultarCarros();
     console.log(listaCarros);

    let enviarDatos = datos;
    const respuesta = await guardarDatos(enviarDatos);
    if (respuesta === true) {
      setDatos(columnsInput);
      Swal.fire("Registro guardado");
      return;
    }
    Swal.fire("No se guardo el registro");
  };

  const classes = useStyles();
  return (
    <div>
      <form id="create-course-form">
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Registrar carro</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Vehículo"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: e => changeData(e),
                        type: "text",
                        name: "vehiculo",
                        value: datos.vehiculo
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Placa"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: e => changeData(e),
                        type: "text",
                        name: "placa",
                        value: datos.placa
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Cliente"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: e => changeData(e),
                        type: "text",
                        name: "cliente",
                        value: datos.cliente
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Teléfono"
                      id="telefono"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: e => changeData(e),
                        type: "text",
                        name: "telefono",
                        value: datos.telefono
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Cédula"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: e => changeData(e),
                        type: "text",
                        name: "documento",
                        value: datos.documento
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Kilòmetros"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: e => changeData(e),
                        type: "text",
                        name: "kilometros",
                        value: datos.kilometros
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Modelo"
                      id="modelo"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: e => changeData(e),
                        type: "text",
                        name: "modelo",
                        value: datos.modelo
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                {/* {datos.boton ? ( */}
                  <Button color="primary" onClick={enviar}>
                    Guardar
                  </Button>
                {/* ) : (
                  ""
                )} */}
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </form>
    </div>
  );
};

export default RegistrarCarro;
