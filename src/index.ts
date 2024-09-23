import Express from 'express';
const app = Express();
const port = 3000;

app.get('/', (req: Express.Request, res: Express.Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
<<<<<<< HEAD
  console.log(`App estupenda de Jano escuchando en puerto ${port}`);
=======
  console.log(`App de Alejandro escuchando en puerto ${port}`);
>>>>>>> cf7361b09e910407891e4a9a4199d64e919f4e25
});