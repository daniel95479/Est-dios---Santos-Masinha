const express = require("express");
const cors = require("cors");
const app = express();

let podeounao = "não pode" 

const estadios = [
  {
    Estadio: "Arena Condá",
    JogadoresNoEstadio: 0
  },
    {
    Estadio: "Arena Indepedência",
    JogadoresNoEstadio: 0
  },
    {
    Estadio: "Arena Pernambuco",
    JogadoresNoEstadio: 0
  },
    {
    Estadio: "Arena da Baixada",
    JogadoresNoEstadio: 0
  },
    {
    Estadio: "Arena do Grêmio",
    JogadoresNoEstadio: 0
  },
    {
    Estadio: "Beira Rio",
    JogadoresNoEstadio: 0
  },
    {
    Estadio: "Ilha do retiro",
    JogadoresNoEstadio: 0
  },
    {
    Estadio: "Martins Pereira",
    JogadoresNoEstadio: 0
  },
    {
    Estadio: "Nabi Abi Chedid",
    JogadoresNoEstadio: 0
  },
    {
    Estadio: "Neoquímica Arena",
    JogadoresNoEstadio: 0
  },
    {
    Estadio: "Pacaembú",
    JogadoresNoEstadio: 0
  },
    {
    Estadio: "São Januário",
    JogadoresNoEstadio: 0
  },
    {
    Estadio: "Vila Belmiro",
    JogadoresNoEstadio: 0
  },
];


app.use(express.json());
app.use(cors());

app.post("/atualizar-jogadores", (req, res) => {
  if (podeounao === "pode")  {
    setTimeout(() => {
    try {
      const { estadio, valor } = req.body;
  
      const estadioencontrar = estadios.find((coisa) => coisa.Estadio === estadio);
  
      if (estadioencontrar) {
  const resultado = parseInt(valor) + estadioencontrar.JogadoresNoEstadio;
        estadioencontrar.JogadoresNoEstadio = resultado;
        console.log(`Estádio ${estadio} atualizado com valor ${estadioencontrar.JogadoresNoEstadio}`);
        res.send(`Estádio ${estadio} atualizado com sucesso para o valor ${estadioencontrar.JogadoresNoEstadio}`);
      } else {
        console.log(`Estádio ${estadio} não encontrado`);
        res.status(404).send(`Estádio ${estadio} não encontrado.`);
      }
    } catch (error) {
      console.error("Erro ao atualizar os registros:", error);
      res.status(500).send("Erro ao atualizar os registros.");
    }
  }, 2000);
  }

});

app.get("/obter-jogadores", function (req, res) {
  res.send(estadios)
  console.log(`Estádios enviados com sucesso`);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}.`);
});

function mudarjogadores() {
  podeounao = "não pode";
  estadios.forEach(function(coisa) {
    coisa.JogadoresNoEstadio = 0;
    console.log(`O Estádio ${coisa.Estadio} agora tem ${coisa.JogadoresNoEstadio} jogadores.`)
  });
  podeounao = "pode";
}

setInterval(mudarjogadores, 70740);
