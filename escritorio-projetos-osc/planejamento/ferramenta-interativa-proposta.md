---
layout: default
title: Ferramenta Interativa de Elaboração de Proposta
---

{% include escritorio-menu.html %}

# Ferramenta Interativa de Elaboração de Proposta

<div id="propostaForm">
  <h2>1. Resumo Executivo</h2>
  <label for="tituloProjeto">Qual é o título do seu projeto?</label><br>
  <input type="text" id="tituloProjeto" name="tituloProjeto"><br><br>

  <label for="objetivoPrincipal">Qual é o objetivo principal do projeto?</label><br>
  <textarea id="objetivoPrincipal" name="objetivoPrincipal" rows="3" cols="50"></textarea><br><br>

  <!-- Adicione os outros campos aqui... -->

  <button type="button" onclick="gerarProposta()">Gerar Proposta</button>
</div>

<div id="propostaGerada" style="display:none;">
  <h2>Proposta Gerada</h2>
  <div id="conteudoProposta"></div>
  <button onclick="imprimirProposta()">Imprimir Proposta</button>
</div>

<script>
function gerarProposta() {
  var proposta = document.getElementById('conteudoProposta');
  var html = '<h1>' + document.getElementById('tituloProjeto').value + '</h1>';
  html += '<p><strong>Objetivo Principal:</strong> ' + document.getElementById('objetivoPrincipal').value + '</p>';
  // Adicione mais campos conforme necessário
  proposta.innerHTML = html;
  document.getElementById('propostaGerada').style.display = 'block';
}

function imprimirProposta() {
  var conteudo = document.getElementById('conteudoProposta').innerHTML;
  var janelaImprimir = window.open('', '', 'width=800,height=600');
  janelaImprimir.document.write('<html><head><title>Proposta de Projeto</title></head><body>');
  janelaImprimir.document.write(conteudo);
  janelaImprimir.document.write('</body></html>');
  janelaImprimir.document.close();
  janelaImprimir.print();
}
</script>

[<button style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">Voltar ao Escritório de Projetos OSC</button>]({{ site.baseurl }}/escritorio-projetos-osc/)
