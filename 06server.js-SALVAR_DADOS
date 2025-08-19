//PARTE 2

// ROTA PARA SALVAR OS DADOS
app.post('/salvar', async (req, res) => {
  try {
    const { nome, senha } = req.body;

    // AQUI VERIFICA SE JÁ EXISTE UM USUÁRIO ADMINISTRADOR COM O MESMO NOME
    //CONSIDERAMOS QUE nome_INPUT1 SEJA O INPUT COM O NOME DE nome
    const existente = await Usuario.findOne({ nome });
    if (existente) {
      return res.status(409).json({ message: 'Este nome de usuário já está em uso.' });
    }

    
    const customId = await gerarCustomId(); // -> AQUI ELE GERA UM IP FIXO PARA CADA REGISTRO

    const usuario = new Usuario({ customId, nome, senha});
    await usuario.save();

    console.log('Dados salvos:', usuario);
    res.status(201).json({ message: 'Dados salvos com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    res.status(500).json({ message: 'Erro ao salvar dados' });
  }
});
