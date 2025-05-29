// <----- NO TOCAR ------->
const { perfiles } = require("../build/js/perfiles.js");

var asistente = {
  verPerfiles: function (opcion) {
    /* TU CODIGO */

    switch (opcion) {
      case "todo":
        return perfiles;

      case "nombre":
        return perfiles.map((perfil) => perfil.usuario);

      case "codigo":
        return perfiles.map((perfil) => perfil.codigo);

      case "nivel":
        return perfiles.map((perfil) => perfil.nivel_de_autorizacion);

      case "antiguedad":
        return perfiles.map((perfil) => perfil.antiguedad);
    }
  },

  verPerfilesPorAntiguedad: function () {
    /* TU CODIGO */

    return perfiles.toSorted(function (a, b) {
      return b.antiguedad - a.antiguedad;
    });
  },

  verAdministradores: function () {
    /* TU CODIGO */

    return perfiles.filter((perfil) => {
      if (perfil.nivel_de_autorizacion === "admin") return perfil;
    });
  },

  modificarAcceso: function (usuario, codigo) {
    /* TU CODIGO */

    const match = perfiles.find(function (perfil) {
      return perfil.usuario === usuario;
    });

    if (!match) return "usuario no encontrado";

    if (!Number(codigo) || codigo.length !== 4)
      return "codigo de acceso invalido, debe contener solo 4 numeros";

    match.codigo = codigo;
    return "codigo de acceso modificado";
  },
};

// <----- NO TOCAR ------->
module.exports = {
  asistente,
};
