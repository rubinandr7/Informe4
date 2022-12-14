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
        this.router.post('/nuevaPublicacion', indexController_1.indexController.createComment);
        this.router.get('/cursos', indexController_1.indexController.getCursos);
        this.router.get('/catedraticos', indexController_1.indexController.getCatedraticos);
        this.router.get('/curso/:curso', indexController_1.indexController.getCurso);
        this.router.get('/catedratico/:catedratico', indexController_1.indexController.getCatedratico);
        this.router.get('/comentarios/:cuOca', indexController_1.indexController.getCommentsP);
        this.router.post('/nuevoComentario/:cuOca', indexController_1.indexController.createCommentP);
        this.router.get('/publicacion/:cuOca', indexController_1.indexController.getPublicacion);
        this.router.get('/auth/login',indexController_1.indexController.getUsuarios);
        this.router.get('/auth/register',indexController_1.indexController.createUsuarios);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
