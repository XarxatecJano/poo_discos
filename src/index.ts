import Express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const app = Express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(Express.static(path.join( __dirname, "..", "public")));
app.use("/scripts", Express.static(path.join(__dirname, '..', 'build')));

app.use("/", (req: Express.Request, res: Express.Response)=>{
    res.sendFile(path.join(__dirname,'..','public', 'index.html'));
})

app.listen(port, () => {
  console.log(`App nueva de Jano escuchando en puerto ${port}`);
});