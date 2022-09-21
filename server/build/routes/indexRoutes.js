"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/home', indexController_1.indexController.getList);
        this.router.post('/nuevoComentario', indexController_1.indexController.createComment);
        this.router.get('/cursos', indexController_1.indexController.getCursos);
        this.router.get('/catedraticos', indexController_1.indexController.getCatedraticos);
        this.router.get('/curso/:curso', indexController_1.indexController.getCurso);
        this.router.get('/catedratico/:catedratico', indexController_1.indexController.getCatedratico);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
