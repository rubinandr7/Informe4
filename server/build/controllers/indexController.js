"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const database_1 = __importDefault(require("../database"));
class IndexController {
    getList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const publicaciones = yield database_1.default.query('SELECT * FROM publicaciones');
            res.json(publicaciones);
        });
    }
    createComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nPublicacion = yield database_1.default.query('INSERT INTO publicaciones set ?', [req.body]);
            res.json({ text: 'nueva pblicacion creada' });
        });
    }
    getCursos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursos = yield database_1.default.query('SELECT * FROM publicaciones WHERE tipo = ?', [0]);
            res.json(cursos);
        });
    }
    getCatedraticos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const catedraticos = yield database_1.default.query('SELECT * FROM publicaciones WHERE tipo = ?', [1]);
            res.json(catedraticos);
        });
    }
    getCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { curso } = req.params;
            const publicaciones = yield database_1.default.query('SELECT * FROM publicaciones WHERE cuOca = ?', [curso]);
            res.json(publicaciones);
        });
    }
    getCatedratico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { catedratico } = req.params;
            const publicaciones = yield database_1.default.query('SELECT * FROM publicaciones WHERE cuOca = ?', [catedratico]);
            res.json(publicaciones);
        });
    }
    getCommentsP(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cuOca } = req.params;
            const publicaciones = yield database_1.default.query('SELECT * FROM comentarios WHERE cuOca = ?', [cuOca]);
            res.json(publicaciones);
        });
    }
    createCommentP(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nPublicacion = yield database_1.default.query('INSERT INTO comentarios set ?', [req.body]);
            res.json({ text: 'nuevo comentario' });
        });
    }
    getPublicacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cuOca } = req.params;
            const publicaciones = yield database_1.default.query('SELECT * FROM publicaciones WHERE cuOca = ?', [cuOca]);
            res.json(publicaciones);
        });
    }
}
exports.indexController = new IndexController;
