import { App } from './config/app';
import { Environment } from './environment';
const env = new Environment('local');

const PORT = env.getPort();

const app = new App(env).app;

app.listen(PORT, () => {
    console.log(`Express server Typescript!!; listening: ${PORT}`);
});