import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/contacto.class";
import ComponenteB from "./componenteB";

const ComponenteA = ({ contacto }) => {
  return (
    <div>
      <h2>Nombre: {contacto.nombre}</h2>
      <h2>Apellidos: {contacto.apellido}</h2>
      <h2>Email: {contacto.email}</h2>
      <ComponenteB estado={true}></ComponenteB>
    </div>
  );
};

ComponenteA.propTypes = { contacto: PropTypes.instanceOf(Contacto) };

export default ComponenteA;
