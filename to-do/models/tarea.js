const { v4: uuidv4 } = require("uuid");

class tarea {
  id = "";
  nom = "";
  tareasFetes = false;

  constructor(nom, fetes) {
    this.id = uuidv4();
    this.nom = nom;
    this.tareasFetes = fetes;
  }
}

module.exports = tarea;
