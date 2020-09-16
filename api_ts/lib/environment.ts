export class Environment {
    private environment: string;
    constructor(environment:string){
        this.environment = environment;
    }
    public getVersion(): string{
        return 'v1';
    }
    getPort() : Number {
        if( this.environment === 'prod'){
            return 8081;
        }else if( this.environment === 'dev'){
            return 8082;
        }else if( this.environment === 'qa'){
            return 8083;
        }else{
            return 3000;
        }
    }
    getDBName() : string {
        if( this.environment === 'prod'){
            return 'db_test_ts_prod';
        }else if( this.environment === 'dev'){
            return 'db_test_ts_dev';
        }else if( this.environment === 'qa'){
            return 'db_test_ts_qa';
        }else{
            return 'db_test_ts_local';
        }

    }
}

