require("colors");

const { inquirerMenu, pausa, nouTarea, elimiSelect, confirmar, completarTareas, } = require("./helpers/inquirer");
const { guardarDB, readDB } = require("./helpers/guardarFitxer");

const crearTareas = require("./models/crear_tareas");
const tarea = require("./models/tarea");

const main = async () => {
    let opt = "";
    const tareas = new crearTareas();
    const tareaDB = readDB();

  if(tareaDB){//si hi ha dades carrégales

        tareas.carregarTareaFromArray(tareaDB)
    
  }
  
    do {
      opt = await inquirerMenu();
  
      switch (opt) {
        case "1":
            const nomTarea = await nouTarea("Tarea:");
            tareas.crearTarea(nomTarea, false);
            // const alumne = new Alumne("Ricard", 10);
            // console.log(alumne);
            console.log();
            console.log(`${"Tarea creada correctament!".yellow}`);
            break;
  
        case "2":
          tareas.llistarTareas()

          break;
  
        case "3":
          tareas.llistarTareas_fetes()

          break;
        

        case "4":
          const ids = await completarTareas(tareas.llistatArr);
          console.log(ids);
          tareas.completarTarea(ids);



          break;
  
        case "5": 
        const id2 = await elimiSelect (tareas.llistatArr);
        
        if (id2 !=='0'){
          const confirm = await confirmar(`${'Seguro que quieres eliminarlo?'.yellow}`)
          
          if(confirm !== false){
            tareas.eliminarTarea(id2);
            
            console.log('Tarea Eliminat');

          }else{
            console.log('La tarea no ha sigut eliminat');
          }

        }
        break;

        case "6":
          tareas.llistarTareasPendents()

        break;

      default:
        break;
      }

      guardarDB(tareas.llistatArr);
      await pausa();
    } while (opt !== "0");
  };



  main();