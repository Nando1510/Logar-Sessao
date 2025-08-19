const botao_Salvar = document.getElementById('salvar');

botao_Salvar.addEventListener('click', salvar_Banco);

async function salvar_Banco() {

  const nome = document.getElementById('nome').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const redigitar_Senha = (document.getElementById('redigitar_Senha').value.trim());
  
  

  if (!nome || !senha || !redigitar_Senha) {
    alert('Preencha todos os campos!');
    return;
  }

  if (senha !== redigitar_Senha){
    alert('Senha e confirmação de senha não conferem.')
    return;
  }

  if (senha.length < 6 || redigitar_Senha.length < 6){
    alert('Senha menor que 6 caracteres')
  }



  try {
    const resposta = await fetch('/salvar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, senha})
    });

    const data = await resposta.json();

    if (resposta.ok) {
      alert(data.message);
      document.getElementById('nome').value = '';
      document.getElementById('senha').value = '';
      document.getElementById('redigitar_Senha').value = '';
      
      
    } else {
      alert('Erro ao salvar: ' + data.message);
    }
  } catch (error) {
    alert('Erro na comunicação com o servidor.');
    console.error(error);
  }
 
}
