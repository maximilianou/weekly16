import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { RoutesTest } from '../routes/routesTest';
import { HelloRoutes } from '../routes/helloRoutes';
import { CommonRoutes } from '../routes/commonRoutes';
import { OpenApiValidator } from 'express-openapi-validator';
import * as swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';
import { Environment } from 'environment';

export class App {
    private env: Environment;
    public app: express.Application;
    private routes_test: RoutesTest = new RoutesTest();
    private helloRoutes: HelloRoutes = new HelloRoutes();
    private commonRoutes: CommonRoutes = new CommonRoutes();
    constructor(env: Environment){
        this.env = env;
        this.app = express();
        this.config().then( () => {
            this.routes_test.route(this.app);
            this.helloRoutes.route(this.app);
            this.commonRoutes.route(this.app);
        });
    }
    private async config(){
        this.app.use( bodyParser.json() );
        this.app.use( bodyParser.urlencoded({ extended: false}) );

        // openapi spec in .yaml
        //const spec: string = path.join( __dirname, './assets/hello.yaml');
        const spec: string = path.join(process.cwd(), `./${this.env.getVersion()}/assets/hello.yaml`);

        // swagger-ui
        const swaggerDocument = YAML.load( spec );
        this.app.use('/api_ts/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

        // validator
        await new OpenApiValidator({ 
            apiSpec:  spec,
            validateRequests: true,
            validateResponses: true
        }).install(this.app);
    }
}

