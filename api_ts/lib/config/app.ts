import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { RoutesTest } from '../routes/routes_test';
import { HelloRoutes } from '../routes/helloRoutes';
import { OpenApiValidator } from 'express-openapi-validator';


class App {
    public app: express.Application;
    private routes_test: RoutesTest = new RoutesTest();
    private helloRoutes: HelloRoutes = new HelloRoutes();
    constructor(){
        this.app = express();
        this.config().then( () => {
            this.routes_test.route(this.app);
            this.helloRoutes.route(this.app);
        });
    }
    private async config(){
        this.app.use( bodyParser.json() );
        this.app.use( bodyParser.urlencoded({ extended: false}) );
       
        const spec: string = path.join( __dirname, '../assets/hello.yaml');

        await new OpenApiValidator({ 
            apiSpec:  spec,
            validateRequests: true,
            validateResponses: true
        }).install(this.app);
    }
}
export default new App().app;