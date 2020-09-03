import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { RoutesTest } from '../routes/routes_test';
import { HelloRoutes } from '../routes/helloRoutes';
import { OpenApiValidator } from 'express-openapi-validator';
import * as swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';

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

        // openapi spec in .yaml
        const spec: string = path.join( __dirname, '../assets/hello.yaml');

        // swagger-ui
        const swaggerDocument = YAML.load( spec );
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

        // validator
        await new OpenApiValidator({ 
            apiSpec:  spec,
            validateRequests: true,
            validateResponses: true
        }).install(this.app);
    }
}
export default new App().app;