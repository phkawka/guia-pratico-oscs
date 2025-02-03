---
layout: default
title: Avaliação de Capacidade Institucional
---

# Avaliação de Capacidade Institucional

<form id="avaliacaoForm">
  <h2>1. Governança e Gestão</h2>
  <p>1.1 A organização possui um conselho diretivo ativo?</p>
  <input type="radio" name="q1_1" value="2"> Sim
  <input type="radio" name="q1_1" value="0"> Não
  <input type="radio" name="q1_1" value="1"> Parcialmente

  <p>1.2 Existe um planejamento estratégico atualizado?</p>
  <input type="radio" name="q1_2" value="2"> Sim
  <input type="radio" name="q1_2" value="0"> Não
  <input type="radio" name="q1_2" value="1"> Em desenvolvimento

  <p>1.3 A organização possui políticas e procedimentos documentados?</p>
  <input type="radio" name="q1_3" value="2"> Sim, abrangentes
  <input type="radio" name="q1_3" value="0"> Não
  <input type="radio" name="q1_3" value="1"> Parcialmente

  <h2>2. Recursos Humanos</h2>
  <p>2.1 A equipe possui as competências necessárias para executar o projeto?</p>
  <input type="radio" name="q2_1" value="2"> Sim
  <input type="radio" name="q2_1" value="0"> Não
  <input type="radio" name="q2_1" value="1"> Parcialmente

  <p>2.2 Existe um plano de desenvolvimento profissional para a equipe?</p>
  <input type="radio" name="q2_2" value="2"> Sim
  <input type="radio" name="q2_2" value="0"> Não
  <input type="radio" name="q2_2" value="1"> Em desenvolvimento

  <p>2.3 A organização possui voluntários engajados regularmente?</p>
  <input type="radio" name="q2_3" value="2"> Sim
  <input type="radio" name="q2_3" value="0"> Não
  <input type="radio" name="q2_3" value="1"> Ocasionalmente

  <h2>3. Gestão Financeira</h2>
  <p>3.1 A organização possui sistemas adequados de controle financeiro?</p>
  <input type="radio" name="q3_1" value="2"> Sim
  <input type="radio" name="q3_1" value="0"> Não
  <input type="radio" name="q3_1" value="1"> Básicos

  <p>3.2 As demonstrações financeiras são auditadas regularmente?</p>
  <input type="radio" name="q3_2" value="2"> Sim, anualmente
  <input type="radio" name="q3_2" value="0"> Não
  <input type="radio" name="q3_2" value="1"> Ocasionalmente

  <p>3.3 Existe diversificação nas fontes de financiamento?</p>
  <input type="radio" name="q3_3" value="2"> Sim, múltiplas fontes
  <input type="radio" name="q3_3" value="0"> Não, fonte única
  <input type="radio" name="q3_3" value="1"> Limitada

  <h2>4. Experiência em Projetos</h2>
  <p>4.1 A organização já executou projetos similares anteriormente?</p>
  <input type="radio" name="q4_1" value="2"> Sim, múltiplos
  <input type="radio" name="q4_1" value="0"> Não
  <input type="radio" name="q4_1" value="1"> Um projeto similar

  <p>4.2 Existe um sistema de monitoramento e avaliação de projetos?</p>
  <input type="radio" name="q4_2" value="2"> Sim
  <input type="radio" name="q4_2" value="0"> Não
  <input type="radio" name="q4_2" value="1"> Básico

  <p>4.3 A organização tem experiência em gestão de parcerias com o setor público?</p>
  <input type="radio" name="q4_3" value="2"> Sim, extensa
  <input type="radio" name="q4_3" value="0"> Não
  <input type="radio" name="q4_3" value="1"> Limitada

  <h2>5. Infraestrutura e Tecnologia</h2>
  <p>5.1 A organização possui a infraestrutura física necessária para o projeto?</p>
  <input type="radio" name="q5_1" value="2"> Sim
  <input type="radio" name="q5_1" value="0"> Não
  <input type="radio" name="q5_1" value="1"> Parcialmente

  <p>5.2 Existem recursos tecnológicos adequados (computadores, software, etc.)?</p>
  <input type="radio" name="q5_2" value="2"> Sim
  <input type="radio" name="q5_2" value="0"> Não
  <input type="radio" name="q5_2" value="1"> Básicos

  <p>5.3 A organização possui presença online e utiliza mídias sociais?</p>
  <input type="radio" name="q5_3" value="2"> Sim, ativamente
  <input type="radio" name="q5_3" value="0"> Não
  <input type="radio" name="q5_3" value="1"> Limitadamente

  <br><br>
  <button type="button" onclick="avaliarCapacidade()">Avaliar</button>
</form>

<div id="resultado" style="display:none;">
  <h2>Resultado da Avaliação</h2>
  <p id="pontuacao"></p>
  <p id="recomendacao"></p>
</div>

<script>
function avaliarCapacidade() {
  var pontos = 0;
  var total = 15; // Total de perguntas
  var respondidas = 0;

  for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 3; j++) {
      var resposta = document.querySelector('input[name="q'+i+'_'+j+'"]:checked');
      if (resposta) {
        respondidas++;
        pontos += parseInt(resposta.value);
      }
    }
  }

  if (respondidas < total) {
    alert("Por favor, responda todas as " + total + " perguntas.");
    return;
  }

  var percentual = (pontos / (total * 2)) * 100;
  var resultado = document.getElementById('resultado');
  var pontuacao = document.getElementById('pontuacao');
  var recomendacao = document.getElementById('recomendacao');

  pontuacao.innerHTML = "Sua pontuação: " + percentual.toFixed(2) + "%";

  if (percentual >= 80) {
    recomendacao.innerHTML = "Sua organização demonstra uma forte capacidade institucional. Está bem posicionada para executar projetos complexos e parcerias com o setor público.";
  } else if (percentual >= 60) {
    recomendacao.innerHTML = "Sua organização tem uma boa base, mas há áreas que podem ser fortalecidas. Considere desenvolver capacidades específicas relacionadas às áreas com pontuação mais baixa.";
  } else if (percentual >= 40) {
    recomendacao.innerHTML = "Sua organização tem potencial, mas precisa de desenvolvimento significativo em várias áreas. Recomenda-se focar no fortalecimento institucional antes de assumir projetos complexos.";
  } else {
    recomendacao.innerHTML = "Sua organização está em estágio inicial de desenvolvimento institucional. É altamente recomendável investir em capacitação e estruturação antes de buscar parcerias complexas ou projetos de grande escala.";
  }

  resultado.style.display = 'block';
}
</script>
