const { Router } = require('express');
const router = Router();

const controlador = require('../controller/Admin.controller');

router.get('/', controlador.inicio);
router.post('/', controlador.inicio);
router.get('/admin', controlador.admin);
router.get('/admin', controlador.proyecto);
router.get('/admin', controlador.trabajo);
router.post('/guardarpersona', controlador.guardarpersona);
router.post('/guardarproyecto', controlador.guardarproyecto);
router.post('/guardartrabajo', controlador.guardartrabajo);


module.exports = router;