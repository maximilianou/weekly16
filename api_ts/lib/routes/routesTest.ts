// lib/routes/routesTest.ts
import { Application, Request, Response} from 'express';

export class RoutesTest{
    public route(app: Application){
        app.get('/api_ts/test', (req: Request, res: Response) => {
            res.status(200).json({message: 'Get request successfull'});
        });
        app.post('/api_ts/test', (req: Request, res: Response) => {
            res.status(200).json({message: 'Post request successfull'});
        });

    }
}