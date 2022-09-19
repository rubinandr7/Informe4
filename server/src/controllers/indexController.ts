import { Request, Response } from 'express';
import pool from '../database';

class IndexController {

    public index(req: Request, res: Response) {
        pool.query('DESCRIBE Usuarios')
        res.json({text: 'algo pa mientras'});
    }

}

export const indexController = new IndexController;