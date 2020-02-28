import firebase from "../../variables/firebase";

export const guardarDatos = async columns => {
  try {
    const respuesta = await firebase
      .firestore()
      .collection("registrarCarro")
      .add(columns);

    if (respuesta.id && respuesta.id !== "") {
      return true;
    }
    return false;
  } catch (e) {
    console.log("==================================");
    console.log(e);
    console.log("==================================");
  }
  return false;
};

export const consultarCarros = async () => {
  try {

    const snapshot = await firebase
      .firestore()
      .collection("registrarCarro")
      .get();

    return snapshot.docs.map(doc => doc.data());
  } catch (e) {
    console.log("==================================");
    console.log(e);
    console.log("==================================");
  }
  return [];
};
