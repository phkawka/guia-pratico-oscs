
{% include nav.html %}


# Checklist de Pré-requisitos para Participação em Editais

Use este checklist interativo para avaliar a prontidão da sua OSC para participar de editais de chamamento público.

<form id="prereq-checklist">
  <label>
    <input type="checkbox" name="docs"> Documentação da OSC está completa e atualizada
  </label><br>
  <label>
    <input type="checkbox" name="cnpj"> CNPJ ativo há pelo menos 3 anos
  </label><br>
  <label>
    <input type="checkbox" name="estatuto"> Estatuto alinhado com as exigências da Lei 13.019/2014
  </label><br>
  <label>
    <input type="checkbox" name="contas"> Prestação de contas de parcerias anteriores em dia
  </label><br>
  <label>
    <input type="checkbox" name="experiencia"> Experiência prévia na área do projeto
  </label><br>
  <label>
    <input type="checkbox" name="capacidade"> Capacidade técnica e operacional comprovada
  </label><br>
  <label>
    <input type="checkbox" name="regularidade"> Certidões de regularidade fiscal, previdenciária, tributária, de contribuições e de dívida ativa em dia
  </label><br>
  <label>
    <input type="checkbox" name="dirigentes"> Dirigentes da OSC não se enquadram nas vedações do Art. 39 da Lei 13.019/2014
  </label><br>
  <button type="button" onclick="avaliarProntidao()">Avaliar Prontidão</button>
</form>

<p id="resultado-avaliacao"></p>

<script>
function avaliarProntidao() {
  const form = document.getElementById('prereq-checklist');
  const total = form.querySelectorAll('input[type="checkbox"]').length;
  const checked = form.querySelectorAll('input[type="checkbox"]:checked').length;
  const percentual = (checked / total) * 100;
  
  let mensagem = `Sua prontidão: ${percentual.toFixed(2)}%\n`;
  if (percentual === 100) {
    mensagem += "Parabéns! Você está pronto para participar do edital.";
  } else if (percentual >= 80) {
    mensagem += "Você está quase lá! Revise os itens pendentes.";
  } else {
    mensagem += "Ainda há trabalho a fazer. Foque nos itens não marcados.";
  }
  
  document.getElementById('resultado-avaliacao').innerText = mensagem;
}
</script>

## Próximos Passos

Se você marcou todos os itens, sua OSC está bem posicionada para participar de editais. Caso contrário, trabalhe nos itens não marcados para aumentar suas chances de sucesso.

Lembre-se: este checklist é uma ferramenta de autoavaliação. Consulte sempre o edital específico e a Lei 13.019/2014 para requisitos detalhados.

[<button style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">Voltar ao Escritório de Projetos OSC</button>](../)
