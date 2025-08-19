//PARTE 5

app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao encerrar sessão' });
    }
    res.clearCookie('connect.sid'); // remove cookie de sessão
    res.status(200).json({ message: 'Logout realizado com sucesso!' });
  });
});
