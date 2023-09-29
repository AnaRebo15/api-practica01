const express = require('express');
const app = express();
const puerto = process.env.PORT || 3000;

app.use(express.json());

let proyectos = [
    {id: 1, nombre: "Proyecto A", descripcion: "Descripción del Proyecto A", fecha_inicio: "2023-01-15", fecha_fin: "2023-02-28"},
    {id: 2, nombre: "Proyecto B", descripcion: "Descripción del Proyecto B", fecha_inicio: "2023-03-10", fecha_fin: "2023-04-20"},
    {id: 3, nombre: "Proyecto C", descripcion: "Descripción del Proyecto C", fecha_inicio: "2023-05-05", fecha_fin: "2023-06-15"},
    {id: 4, nombre: "Proyecto D", descripcion: "Descripción del Proyecto D", fecha_inicio: "2023-07-01", fecha_fin: "2023-08-10"},
    {id: 5, nombre: "Proyecto E", descripcion: "Descripción del Proyecto E", fecha_inicio: "2023-09-15", fecha_fin: "2023-10-30"},
    {id: 6, nombre: "Proyecto F", descripcion: "Descripción del Proyecto F", fecha_inicio: "2023-11-05", fecha_fin: "2023-12-20"},
    {id: 7, nombre: "Proyecto G", descripcion: "Descripción del Proyecto G", fecha_inicio: "2024-01-10", fecha_fin: "2024-02-28"},
    {id: 8, nombre: "Proyecto H", descripcion: "Descripción del Proyecto H", fecha_inicio: "2024-03-15", fecha_fin: "2024-04-30"},
    {id: 9, nombre: "Proyecto I", descripcion: "Descripción del Proyecto I", fecha_inicio: "2024-05-05", fecha_fin: "2024-06-20"},
    {id: 10, nombre: "Proyecto J", descripcion: "Descripción del Proyecto J", fecha_inicio: "2024-07-01", fecha_fin: "2024-08-15"}
];

let tareas = [
    {id: 1, id_proyecto: 1, nombre: "Tarea 1, Proyecto 1", descripcion: "Descripción de la Tarea 1, Proyecto 1", fecha_asignacion: "2023-01-20", estado_tarea: "En progreso"},
    {id: 2, id_proyecto: 1, nombre: "Tarea 2, Proyecto 1", descripcion: "Descripción de la Tarea 2, Proyecto 1", fecha_asignacion: "2023-01-22", estado_tarea: "Completada"},
    {id: 3, id_proyecto: 1, nombre: "Tarea 3, Proyecto 1", descripcion: "Descripción de la Tarea 3, Proyecto 1", fecha_asignacion: "2023-01-25", estado_tarea: "Pendiente"},
    {id: 4, id_proyecto: 1, nombre: "Tarea 4, Proyecto 1", descripcion: "Descripción de la Tarea 4, Proyecto 1", fecha_asignacion: "2023-01-28", estado_tarea: "En progreso"},
    {id: 5, id_proyecto: 1, nombre: "Tarea 5, Proyecto 1", descripcion: "Descripción de la Tarea 5, Proyecto 1", fecha_asignacion: "2023-01-25", estado_tarea: "Completada"},
    
    {id: 6, id_proyecto: 2, nombre: "Tarea 1, Proyecto 2", descripcion: "Descripción de la Tarea 1, Proyecto 2", fecha_asignacion: "2023-02-05", estado_tarea: "En progreso"},
    {id: 7, id_proyecto: 2, nombre: "Tarea 2, Proyecto 2", descripcion: "Descripción de la Tarea 2, Proyecto 2", fecha_asignacion: "2023-02-08", estado_tarea: "Pendiente"},
    
    {id: 8, id_proyecto: 3, nombre: "Tarea 1, Proyecto 3", descripcion: "Descripción de la Tarea 1, Proyecto 3", fecha_asignacion: "2023-02-12", estado_tarea: "En progreso"},
    {id: 9, id_proyecto: 3, nombre: "Tarea 2, Proyecto 3", descripcion: "Descripción de la Tarea 2, Proyecto 3", fecha_asignacion: "2023-02-15", estado_tarea: "Completada"},
    {id: 10, id_proyecto: 3, nombre: "Tarea 3, Proyecto 3", descripcion: "Descripción de la Tarea 3, Proyecto 3", fecha_asignacion: "2023-02-18", estado_tarea: "Pendiente"},
    
    {id: 11, id_proyecto: 4, nombre: "Tarea 1, Proyecto 4", descripcion: "Descripción de la Tarea 1, Proyecto 4", fecha_asignacion: "2023-02-22", estado_tarea: "En progreso"},
    {id: 12, id_proyecto: 4, nombre: "Tarea 2, Proyecto 4", descripcion: "Descripción de la Tarea 2, Proyecto 4", fecha_asignacion: "2023-02-25", estado_tarea: "Completada"},
    {id: 13, id_proyecto: 4, nombre: "Tarea 3, Proyecto 4", descripcion: "Descripción de la Tarea 3, Proyecto 4", fecha_asignacion: "2023-02-28", estado_tarea: "Pendiente"},

    {id: 14, id_proyecto: 5, nombre: "Tarea 1, Proyecto 5", descripcion: "Descripción de la Tarea 1, Proyecto 5", fecha_asignacion: "2023-03-05", estado_tarea: "En progreso"},
    {id: 15, id_proyecto: 5, nombre: "Tarea 2, Proyecto 5", descripcion: "Descripción de la Tarea 2, Proyecto 5", fecha_asignacion: "2023-03-08", estado_tarea: "Completada"},
    
    {id: 16, id_proyecto: 6, nombre: "Tarea 1, Proyecto 6", descripcion: "Descripción de la Tarea 1, Proyecto 6", fecha_asignacion: "2023-03-12", estado_tarea: "En progreso"},
    {id: 17, id_proyecto: 6, nombre: "Tarea 2, Proyecto 6", descripcion: "Descripción de la Tarea 2, Proyecto 6", fecha_asignacion: "2023-03-15", estado_tarea: "Pendiente"},
    {id: 18, id_proyecto: 6, nombre: "Tarea 3, Proyecto 6", descripcion: "Descripción de la Tarea 3, Proyecto 6", fecha_asignacion: "2023-03-18", estado_tarea: "Completada"},

    {id: 19, id_proyecto: 7, nombre: "Tarea 1, Proyecto 7", descripcion: "Descripción de la Tarea 1, Proyecto 7", fecha_asignacion: "2023-03-22", estado_tarea: "En progreso"},

    {id: 20, id_proyecto: 8, nombre: "Tarea 1, Proyecto 8", descripcion: "Descripción de la Tarea 1, Proyecto 8", fecha_asignacion: "2023-03-25", estado_tarea: "Completada"},
    {id: 21, id_proyecto: 8, nombre: "Tarea 2, Proyecto 8", descripcion: "Descripción de la Tarea 2, Proyecto 8", fecha_asignacion: "2023-03-28", estado_tarea: "Pendiente"},

    {id: 22, id_proyecto: 9, nombre: "Tarea 1, Proyecto 9", descripcion: "Descripción de la Tarea 1, Proyecto 9", fecha_asignacion: "2023-04-01", estado_tarea: "En progreso"},
    {id: 23, id_proyecto: 9, nombre: "Tarea 2, Proyecto 9", descripcion: "Descripción de la Tarea 2, Proyecto 9", fecha_asignacion: "2023-04-05", estado_tarea: "Completada"},
    {id: 24, id_proyecto: 9, nombre: "Tarea 3, Proyecto 9", descripcion: "Descripción de la Tarea 3, Proyecto 9", fecha_asignacion: "2023-04-08", estado_tarea: "Pendiente"},

    {id: 25, id_proyecto: 10, nombre: "Tarea 1, Proyecto 10", descripcion: "Descripción de la Tarea 1, Proyecto 10", fecha_asignacion: "2023-04-12", estado_tarea: "En progreso"},
    {id: 26, id_proyecto: 10, nombre: "Tarea 2, Proyecto 10", descripcion: "Descripción de la Tarea 2, Proyecto 10", fecha_asignacion: "2023-04-15", estado_tarea: "Completada"}
];

// PARA TAREAS__________________________________________________________________________________________________________________________________
// Obtener la lista de todos las tareas (GET).
app.get('/socios/v1/tareas', (req, res) => {
    if (tareas.length>0){
        res.status(200).json({
            estado:1,
            mensaje: "Existen tareas",
            tareas: tareas
        })
    }else{
        res.status(404).json({
            estado:0,
            mensaje: "No existen tareas"
        })
    }
});

//Obtener una tarea por su ID (GET).
app.get('/socios/v1/tareas/:id', (req, res) => {
    const id = req.params.id;
    const tarea = tareas.find(tarea => tarea.id == id);

    if(tarea){
        //Si se encontró al tarea
        res.status(200).json({
            estado:1,
            mensaje: "Se encontró la tarea",
            tarea: tarea
        })
    }else{
        //No se encontró tarea
        res.status(404).json({
            estado:0,
            mensaje: "No se encontró la tarea"
        })
    }
});

//Agregar una nueva tarea (POST).
app.post('/socios/v1/tareas', (req, res) => {
    const id_proyecto = req.body.id_proyecto;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const fecha_asignacion = req.body.fecha_asignacion;
    const estado_tarea = req.body.estado_tarea;

    // Generar ID aleatorio único
    //-----------------------------------------------------------------------------------
    let id;
    let tareaExistente;

    do {
        id = Math.round(Math.random() * 1000);
        tareaExistente = tareas.find(tarea => tarea.id === id);
    } while (tareaExistente);
    //-----------------------------------------------------------------------------------

    if(id_proyecto==undefined || nombre==undefined || descripcion==undefined || fecha_asignacion==undefined || estado_tarea==undefined){
        res.status(400).json({
            estado: 0,
            mensaje: "Faltan parámetros en la solicitud"
        })
    }else{
        const tarea = {id:id, id_proyecto:id_proyecto, nombre:nombre, descripcion:descripcion, fecha_asignacion:fecha_asignacion, estado_tarea:estado_tarea}
        let logitudInicial = tareas.length;
        tareas.push(tarea)
        // Comprobar que se creó la tarea
        if(tareas.length > logitudInicial){
            res.status(200).json({
                estado:1,
                mensaje:"Tarea creada",
                tarea:tarea
            })
        }else{
            res.status(500).json({
                estado:0,
                mensaje:"Ocurrió un error desconocido"
            })
        }
    }
});

//Actualizar una tearea por su ID (PUT).
app.put('/socios/v1/tareas/:id', (req, res) => {
    //Actualizar datos de tarea
    const id = req.params.id;
    const {id_proyecto, nombre, descripcion, fecha_asignacion, estado_tarea} = req.body;
    
    if(id_proyecto==undefined || nombre==undefined || descripcion==undefined || fecha_asignacion==undefined || estado_tarea==undefined){
        res.status(400).json({
            estado: 0,
            mensaje: "Faltan parámetros en la solicitud"
        })
    }else{
        const posActualizar = tareas.findIndex(tarea => tarea.id == id)
        if(posActualizar != -1){
            //Si encontro la tarea con el id buscado
            tareas[posActualizar].id_proyecto = id_proyecto;
            tareas[posActualizar].nombre = nombre;
            tareas[posActualizar].descripcion = descripcion;
            tareas[posActualizar].fecha_asignacion = fecha_asignacion;
            tareas[posActualizar].estado_tarea = estado_tarea;

            res.status(200).json({
                estado: 1,
                mensaje: "Tarea actualizada",
                tarea: tareas[posActualizar]
            })
        }else{
            //No se encontró
            res.status(404).json({
                estado: 0,
                mensaje: "No se encontró tarea"
            })
        }
    }    
});

//Eliminar una tarea por su ID (DELETE).
app.delete('/socios/v1/tareas/:id', (req, res) => {
    //Eliminar tarea
    const id = req.params.id;
    const posEliminar = tareas.findIndex(tarea => tarea.id == id)
    
    if(posEliminar != -1){
        //Si encontro al tarea con el id buscado
        tareas.splice(posEliminar, 1); 

        res.status(201).json({
            estado: 1,
            mensaje: "Tarea eliminada"
        })
    }else{
        //No se encontró
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontró tarea"
        })
    }
});


// PARA PROYECTOS__________________________________________________________________________________________________________________________________
//Obtener la lista de todos los proyectos (GET).
app.get('/socios/v1/proyectos', (req, res) => {
    if (proyectos.length>0){
        res.status(200).json({
            estado:1,
            mensaje: "Existen proyectos",
            proyectos: proyectos
        })
    }else{
        res.status(404).json({
            estado:0,
            mensaje: "No existen proyectos"
        })
    }
});

//Obtener un proyecto por su ID (GET).
app.get('/socios/v1/proyectos/:id', (req, res) => {
    const id = req.params.id;
    const proyecto = proyectos.find(proyecto => proyecto.id == id);

    if(proyecto){
        //Si se encontró al proyecto
        res.status(200).json({
            estado:1,
            mensaje: "Se encontró proyecto",
            proyecto: proyecto
        })
    }else{
        //No se encontró proyecto
        res.status(404).json({
            estado:0,
            mensaje: "No se encontró proyecto"
        })
    }
});

//Agregar un nuevo proyecto (POST).
app.post('/socios/v1/proyectos', (req, res) => {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const fecha_inicio = req.body.fecha_inicio;
    const fecha_fin = req.body.fecha_fin;

    // Generar ID aleatorio único
    //-----------------------------------------------------------------------------------
    let id;
    let proyectoExistente;

    do {
        id = Math.round(Math.random() * 1000);
        proyectoExistente = proyectos.find(proyecto => proyecto.id === id);
    } while (proyectoExistente);
    //-----------------------------------------------------------------------------------

    if(nombre==undefined || descripcion==undefined || fecha_inicio==undefined || fecha_fin==undefined){
        res.status(400).json({
            estado: 0,
            mensaje: "Faltan parámetros en la solicitud"
        })
    }else{
        const proyecto = {id:id, nombre:nombre, descripcion:descripcion, fecha_inicio:fecha_inicio, fecha_fin:fecha_fin}
        let logitudInicial = proyectos.length;
        proyectos.push(proyecto)
        // Comprobar que se creó proyecto
        if(proyectos.length > logitudInicial){
            res.status(200).json({
                estado:1,
                mensaje:"Proyecto creado",
                proyecto:proyecto
            })
        }else{
            res.status(500).json({
                estado:0,
                mensaje:"Ocurrió un error desconocido"
            })
        }
    }
});

//Actualizar un proyecto por su ID (PUT).
app.put('/socios/v1/proyectos/:id', (req, res) => {
    //Actualizar datos de proyecto
    const id = req.params.id;
    const {nombre, descripcion, fecha_inicio, fecha_fin} = req.body;
    
    if(nombre==undefined || descripcion==undefined || fecha_inicio==undefined || fecha_fin==undefined){
        res.status(400).json({
            estado: 0,
            mensaje: "Faltan parámetros en la solicitud"
        })
    }else{
        const posActualizar = proyectos.findIndex(proyecto => proyecto.id == id)
        if(posActualizar != -1){
            //Si encontro proyecto con el id buscado
            proyectos[posActualizar].nombre = nombre;
            proyectos[posActualizar].descripcion = descripcion;
            proyectos[posActualizar].fecha_inicio = fecha_inicio;
            proyectos[posActualizar].fecha_fin = fecha_fin;

            res.status(200).json({
                estado: 1,
                mensaje: "Proyecto actualizado",
                proyecto: proyectos[posActualizar]
            })
        }else{
            //No se encontró
            res.status(404).json({
                estado: 0,
                mensaje: "No se encontró proyecto"
            })
        }
    }    
});

//Eliminar un proyecto por su ID (DELETE).
app.delete('/socios/v1/proyectos/:id', (req, res) => {
    //Eliminar proyecto
    const id = req.params.id;
    const posEliminar = proyectos.findIndex(proyecto => proyecto.id == id)
    
    if(posEliminar != -1){
        //Si encontro al proyecto con el id buscado
        proyectos.splice(posEliminar, 1); 

        res.status(201).json({
            estado: 1,
            mensaje: "Proyecto eliminado"
        })
    }else{
        //No se encontró
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontró proyecto"
        })
    }
});

//Mostrar todas las tareas de un proyecto
app.get('/socios/v1/proyectos/:id_proyecto/tareas', (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    const tareasProyecto = tareas.filter(tarea => tarea.id_proyecto == id_proyecto);

    if (tareasProyecto.length > 0) {
        res.status(200).json({
            estado: 1,
            mensaje: "Se encontraron tareas para este proyecto",
            tareas: tareasProyecto
        })
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontraron tareas para este proyecto"
        })
    }
});

//Mostrar una tarea específica de un proyecto
app.get('/socios/v1/proyectos/:id_proyecto/tareas/:id_tarea', (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    const id_tarea = req.params.id_tarea;
    const tarea = tareas.find(tarea => tarea.id_proyecto == id_proyecto && tarea.id == id_tarea);

    if (tarea) {
        res.status(200).json({
            estado: 1,
            mensaje: "Tarea del proyecto encontrada",
            tarea: tarea
        })
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontró la tarea en este proyecto"
        })
    }
});

//Mostrar tareas de un proyecto por estado (Use Query String para el estado)
app.get('/socios/v1/proyectos/:id_proyecto/tareasEstado', (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    const estado_t = req.query.estado; // Obtener estado de la Query String

    const tareasProyecto = tareas.filter(tarea => tarea.id_proyecto == id_proyecto && tarea.estado_tarea == estado_t);

    if (tareasProyecto.length > 0) {
        res.status(200).json({
            estado: 1,
            mensaje: `Tareas del proyecto con estado: ${estado_t}`,
            tareas: tareasProyecto
        })
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontraron tareas para el proyecto y estado especificados"
        })
    }
});

//Mostrar todas las tareas de un proyecto paginadas (User Query String para especificar número de página y cuantos registros por página)
app.get('/socios/v1/proyectos/:id_proyecto/tareasPag', (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    const pagina = req.query.pagina; // Obtener el número de página
    const cantidad = req.query.cantidad; // Obtener la cantidad de registros por página
    
    // Calcula índice inicial y final para la paginación
    const inicio = (pagina - 1) * cantidad;
    const fin = pagina * cantidad;
    
    const tareasProyecto = tareas.filter(tarea => tarea.id_proyecto == id_proyecto);

    if (tareasProyecto.length > 0) {
        const tareasPaginadas = tareasProyecto.slice(inicio, fin);
        
        res.status(200).json({
            estado: 1,
            mensaje: "Tareas del proyecto encontradas y paginadas",
            tareas: tareasPaginadas
        })
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontraron tareas para el proyecto especificado"
        })
    }
});

//Mostrar tareas de un proyecto por fecha de inicio
app.get('/socios/v1/proyectos/:id_proyecto/tareasFecha', (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    const fechaInicio = req.query.fechaInicio;
    
    // Filtrar las tareas por fecha de inicio
    const tareasProyecto = tareas.filter(tarea => tarea.id_proyecto == id_proyecto && tarea.fecha_asignacion == fechaInicio);

    if (tareasProyecto.length > 0) {
        res.status(200).json({
            estado: 1,
            mensaje: "Tareas del proyecto encontradas por fecha de inicio",
            tareas: tareasProyecto
        })
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontraron tareas para el proyecto especificado"
        })
    }
});


app.listen(puerto, () => {
    console.log('Servidor corriendo en el puerto: ', puerto);

});