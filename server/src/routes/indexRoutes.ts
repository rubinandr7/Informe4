import { Router } from 'express';
import { indexController } from '../controllers/indexController';

class IndexRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/home', indexController.getList);
        this.router.post('/nuevaPublicacion', indexController.createComment);
        this.router.get('/cursos', indexController.getCursos);
        this.router.get('/catedraticos', indexController.getCatedraticos);
        this.router.get('/curso/:curso', indexController.getCurso);
        this.router.get('/catedratico/:catedratico', indexController.getCatedratico);
        this.router.get('/comentarios/:cuOca', indexController.getCommentsP);
        this.router.post('/nuevoComentario/:cuOca', indexController.createCommentP);
        this.router.get('/publicacion/:cuOca', indexController.getPublicacion);
        this.router.get('/cursosAprobados', indexController.getListC);
        this.router.post('/agregarCurso', indexController.createCursoA);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;