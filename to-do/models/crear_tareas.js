const tareaa = require("./tarea");

require("colors");
class crearTareas {


  get llistatArr() {
    const llistat = [];
    Object.keys(this._llista).forEach((key) => {
      const tarea = this._llista[key];
      llistat.push(tarea);
    });

    return llistat;
  }

  constructor() {
    this._llista = {};
  }

  crearTarea(nom = "", fetes) {
    const tarea = new tareaa (nom, fetes);
    this._llista[tarea.id] = tarea;
  }
  carregarTareaFromArray(tarea =[]){
    tarea.forEach((tarea) => {
      this._llista[tarea.id] = tarea;
    })

  }
  llistarTareas(){
    console.log();//Soc un salt de linia
    let conta = 0;
    this.llistatArr.forEach(tarea =>{
      const {nom} = tarea;
      conta +=1;
      console.log(`${(conta + '.').green}${(nom + '').yellow}`);

    })
  }

  llistarTareas_fetes(){
    console.log();//Soc un salt de linia
    let conta = 0;
    this.llistatArr.forEach(tarea =>{
      const {nom, tareasFetes} = tarea;
      // const hores = `${horesFetes}.green`//>0 else lo demas

      // const prova = true ? 'hola' : 'adeu';//Condicional ternari

      //La condicio 'ternari' resolt 

      conta +=1;
     
      if (tareasFetes == true) {
        console.log(`${(conta + ".").green} ${`Nom:`.yellow} ${nom.cyan} :: ${('Completades:'.yellow)} ${`${tareasFetes}`.green}`);
      }else{
      }

    })
  }
  llistarTareasPendents(){
    console.log();//Soc un salt de linia
    let conta = 0;
    this.llistatArr.forEach(tarea =>{
      const {nom, tareasFetes} = tarea;
      // const hores = `${horesFetes}.green`//>0 else lo demas

      // const prova = true ? 'hola' : 'adeu';//Condicional ternari

      //La condicio 'ternari' resolt 

      conta +=1;
     
      if (tareasFetes == false) {
        console.log(`${(conta + ".").green} ${`Nom:`.yellow} ${nom.cyan} :: ${('Completades:'.yellow)} ${`${tareasFetes}`.red}`);
      }else{
      }

    })
  }

  async completarTarea(ids = []) {
    ids.forEach((id) => {
      const tarea = this._llista[id];
      if (tarea.tareasFetes == false) {
        tarea.tareasFetes = true;
      } else {
        tarea.tareasFetes = false;
      }
    });
    
  }




  async eliminarTarea(id2){
    const tarea = this._llista[id2]

    tarea.id = id2;
    delete this._llista[id2]
    return id2;
    console.log(tarea);
  }
  
}

module.exports = crearTareas;