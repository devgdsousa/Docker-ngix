import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors());


app.get('/data', (req, res) => {
    res.json({ message: 'Conexão com o Backend feita com sucesso!' });
});


app.listen(port, () => {
    console.log(`Backend rodando na porta ${port}`);
});

