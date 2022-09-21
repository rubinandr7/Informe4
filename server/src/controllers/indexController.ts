import { Request, Response } from 'express';
import  pool from '../database';
import { QueryResult } from 'pg';

class IndexController {

    public async getList(req: Request, res: Response): Promise<void> {
        const publicaciones = await pool.query('SELECT * FROM publicaciones');
        res.json(publicaciones);
    }

    public async createComment(req: Request, res: Response): Promise<void> {
        const nPublicacion = await pool.query('INSERT INTO publicaciones set ?', [req.body]);
        res.json({text: 'nueva pblicacion creada'});
    }

    public async getCursos(req: Request, res: Response): Promise<any> {
        const cursos = await pool.query('SELECT * FROM publicaciones WHERE tipo = ?', [0]);
        res.json(cursos);
    }

    public async getCatedraticos(req: Request, res: Response){
        const catedraticos = await pool.query('SELECT * FROM publicaciones WHERE tipo = ?', [1]);
        res.json(catedraticos);
    }

    public async getCurso(req: Request, res: Response){
        const { curso } = req.params;
        const publicaciones = await pool.query('SELECT * FROM publicaciones WHERE cuOca = ?', [curso]);
        res.json(publicaciones);
    }

    public async getCatedratico(req: Request, res: Response){
        const { catedratico } = req.params;
        const publicaciones = await pool.query('SELECT * FROM publicaciones WHERE cuOca = ?', [catedratico]);
        res.json(publicaciones);
    }

}

export const indexController = new IndexController;