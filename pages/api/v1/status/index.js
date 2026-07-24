function status(resquest, response) {
  response.status(200).json({ chave: "Fazendo e acompanhando o Curso.Dev!" });
}

export default status;
