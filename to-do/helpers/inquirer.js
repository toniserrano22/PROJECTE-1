const inquirer = require("inquirer");
require("colors");

const preguntes = [
    {
      type: "list",
      name: "opcio",
      message: "Què vols fer?".yellow.bgBlack,
      choices: [
        {
          value: "1",
          name: `${"1 ".green} Crear tarea`,
        },
        {
          value: "2",
          name: `${"2 ".green} Llistar tarea`,
        },
        {
          value: "3",
          name: `${"3 ".green} Llistar Tareas completadas`,
        },
        {
          value: "6",
          name: `${"6 ".green} Listar tares pendientes`,
        },
        {
          value: "4",
          name: `${"4 ".green} Completar tarea(s)`,
        },

        {
          value: "5",
          name: `${"5 ".green} Borrar terea`,
        },
        {
          value: "0",
          name: `${"0 ".green} salir`,
        },
      ],
    },
  ];

  const inquirerMenu = async () => {
    console.clear();
    console.log("========================".cyan);
    console.log("   Selecciona una opció".yellow);
    console.log("========================\n".cyan);
  
    const { opcio } = await inquirer.prompt(preguntes);
  
    return opcio; // retorno un valor entre 0 i 5
  };
  
  const pausa = async () => {
    const question = [
      {
        type: "input",
        name: "enter",
        message: `Presiona ${"enter".yellow} per a continuar`,
      },
    ];
    console.log("\n");
    await inquirer.prompt(question);
  };


  const nouTarea = async (message) => {
    const question = [
      {
        type: "input",
        name: "nom",
        message,
        validate(value) {
          if (value.length === 0) {
            return "Si us plau, introdueix la tarea";
          }
          return true;
        },
      },
    ];
  
    const { nom } = await inquirer.prompt(question);
    return nom;
  };

  const completarTareas = async (tareas = [true]) => {
    const choices = tareas.map((tarea, i) => {
      const idx = `${i + 1}.`.green;
      return {
        value: tarea.id,
        name: `${idx} ${tarea.nom}`,
      };
    });
  
    choices.unshift({
      value: "0",
      name: "0. ".green + "Cancel·lar",
    });
    const pregunta = [
      {
        type: "checkbox",
        name: "id",
        message: "Selecciona la tarea",
        choices,
      },
    ];
  
    const { id } = await inquirer.prompt(pregunta);
    return id;
  };

  const tareaCompletada = async (message) => {
    const question = [
      {
        type: "confirm",
        name: "ok",
        message,
      },
    ];
  
    const { ok } = await inquirer.prompt(question);
    return ok;
  };





  const elimiSelect = async(tarea = []) =>{
    const choices = tarea.map( (tarea,i) =>{
      const id2 = `${ i + 1 }.`.green;
      return {
        value: tarea.id,
        name: `${id2} ${tarea.nom}`
      }
    });
  
    choices.unshift({
      value: '0',
      name: '0. '.green + 'Cancel-lar'
    });
    const pregunta = [
      {
      type:'list',
      name:'id',
      message: 'Selecciona una tarea que vols eliminar:',
      choices,
      }
  
    ]
    const { id } = await inquirer.prompt(pregunta);
    return id;
  }
  const confirmar = async(message) => {
    const question = [
      {
        type:'confirm',
        name:'ok',
        message,
      }
    ]
    const {ok} = await inquirer.prompt(question);
    return ok;
  }



  module.exports = {
    inquirerMenu,
    pausa,
    nouTarea,
    completarTareas,
    tareaCompletada,
    // alumneSelect,
    // introHores,
    elimiSelect,
    confirmar
  
  };