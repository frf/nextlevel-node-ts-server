import {Request, Response} from 'express';
import db from '../database/connection';

export default class ConnectionsController {
    async index(request: Request, response: Response) {
        try {
            const totalConnections = await db('connections').count('* as total');
            const { total } = totalConnections[0];

            return response.json({total});
        } catch (err) {
            return response.status(400).json({
                error: 'Erro index class'
            });
        }
    }

    async create(request: Request, response: Response) {
        try {

            const { user_id } = request.body;

            await db('connections').insert({
                user_id,
            });

            return response.send();

        } catch (err) {
            return response.status(400).json({
                error: 'Erro create class and user: '
            });
        }
    }


}