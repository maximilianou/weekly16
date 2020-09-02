// lib/routes/helloRoutes.ts
import { Application, Request, Response} from 'express';

export class HelloRoutes{
    public route(app: Application){
        app.get('/api_ts/hello', (req: Request, res: Response) => {
            res.status(200).json({msg: 'Get hello request successfull'});
        });
        app.post('/api_ts/hello', (req: Request, res: Response) => {
            res.status(200).json({msg: 'Post hello request successfull'});
        });

    }
}