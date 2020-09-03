const { firebase } = require('../configFirebase');

const controlador = {};
const db = firebase.firestore();

controlador.inicio = (req, res) => {

    res.render('index');
}

controlador.admin = (req, res) => {
    res.render('./admin', { nombre})
}


controlador.trabajo = (req, res) => {
    res.render('./admin/trabajo', { nombre})
}

controlador.proyecto = (req, res) => {
    res.render('./admin/proyecto', { nombre })
}



controlador.guardarpersona = (req, res) => {
    console.log(req.body);

    db.collection("Usuario").doc('7fkGo0wAcjmNQuCx8itA').set({
        nombre: req.body.nombrepersona,
        apellidos: req.body.apellidopersona ,
        //imagen: ,
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Datos agregados correctamente', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}



controlador.guardarproyecto = (req, res) => {
    console.log(req.body);

    db.collection("Proyectos").add({
        titulo: req.body.tituloproyecto,
        descripcion: req.body.descripcionproyecto,
        //imagenproyecto: 
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Datos agregados correctamente', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}


controlador.guardartrabajo = (req, res) => {
    console.log(req.body);

    db.collection("Trabajos").add({
        titulo: req.body.titulotrabajo,
        descripcion: req.body.descpciontrabajo ,
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Datos agregados correctamente', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}




module.exports = controlador;