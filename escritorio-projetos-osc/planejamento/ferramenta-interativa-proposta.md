---
layout: default
title: Ferramenta Interativa de Elaboração de Proposta
---

# Ferramenta Interativa de Elaboração de Proposta
Esta ferramenta irá guiá-lo passo a passo na elaboração de sua proposta. Responda às perguntas com o máximo de detalhes possível para criar uma proposta completa e convincente.

<div id="propostaForm">
  <h2>1. Resumo Executivo</h2>
  <label for="tituloProjeto">Qual é o título do seu projeto?</label><br>
  <input type="text" id="tituloProjeto" name="tituloProjeto"><br><br>

  <label for="objetivoPrincipal">Qual é o objetivo principal do projeto?</label><br>
  <textarea id="objetivoPrincipal" name="objetivoPrincipal" rows="3" cols="50"></textarea><br><br>

  <label for="impactoEsperado">Qual é o impacto esperado do projeto?</label><br>
  <textarea id="impactoEsperado" name="impactoEsperado" rows="3" cols="50"></textarea><br><br>

  <h2>2. Contexto e Justificativa</h2>
  <label for="problemaIdentificado">Qual é o problema ou necessidade que seu projeto pretende abordar?</label><br>
  <textarea id="problemaIdentificado" name="problemaIdentificado" rows="4" cols="50"></textarea><br><br>

  <label for="relevancia">Por que este projeto é relevante para a comunidade ou público-alvo?</label><br>
  <textarea id="relevancia" name="relevancia" rows="4" cols="50"></textarea><br><br>

  <h2>3. Objetivos</h2>
  <label for="objetivoGeral">Qual é o objetivo geral do projeto?</label><br>
  <textarea id="objetivoGeral" name="objetivoGeral" rows="3" cols="50"></textarea><br><br>

  <label for="objetivosEspecificos">Quais são os objetivos específicos? (Liste pelo menos 3)</label><br>
  <textarea id="objetivosEspecificos" name="objetivosEspecificos" rows="5" cols="50"></textarea><br><br>

  <h2>4. Metodologia</h2>
  <label for="abordagem">Descreva a abordagem e as principais estratégias do projeto:</label><br>
  <textarea id="abordagem" name="abordagem" rows="5" cols="50"></textarea><br><br>

  <h2>5. Resultados Esperados</h2>
  <label for="metasQuantitativas">Quais são as metas quantitativas do projeto?</label><br>
  <textarea id="metasQuantitativas" name="metasQuantitativas" rows="4" cols="50"></textarea><br><br>

  <label for="metasQualitativas">Quais são as metas qualitativas?</label><br>
  <textarea id="metasQualitativas" name="metasQualitativas" rows="4" cols="50"></textarea><br><br>

  <h2>6. Público-Alvo</h2>
  <label for="descricaoBeneficiarios">Descreva o público-alvo (beneficiários) do projeto:</label><br>
  <textarea id="descricaoBeneficiarios" name="descricaoBeneficiarios" rows="4" cols="50"></textarea><br><br>

  <h2>7. Orçamento</h2>
  <label for="custosDetalhados">Liste os principais custos do projeto:</label><br>
  <textarea id="custosDetalhados" name="custosDetalhados" rows="5" cols="50"></textarea><br><br>

  <h2>8. Cronograma</h2>
  <label for="fasesProjeto">Descreva as principais fases do projeto:</label><br>
  <textarea id="fasesProjeto" name="fasesProjeto" rows="4" cols="50"></textarea><br><br>

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

  html += '<h2>1. Resumo Executivo</h2>';
  html += '<p><strong>Objetivo Principal:</strong> ' + document.getElementById('objetivoPrincipal').value + '</p>';
  html += '<p><strong>Impacto Esperado:</strong> ' + document.getElementById('impactoEsperado').value + '</p>';

  html += '<h2>2. Contexto e Justificativa</h2>';
  html += '<p><strong>Problema Identificado:</strong> ' + document.getElementById('problemaIdentificado').value + '</p>';
  html += '<p><strong>Relevância:</strong> ' + document.getElementById('relevancia').value + '</p>';

  html += '<h2>3. Objetivos</h2>';
  html += '<p><strong>Objetivo Geral:</strong> ' + document.getElementById('objetivoGeral').value + '</p>';
  html += '<p><strong>Objetivos Específicos:</strong> ' + document.getElementById('objetivosEspecificos').value + '</p>';

  html += '<h2>4. Metodologia</h2>';
  html += '<p><strong>Abordagem e Estratégias:</strong> ' + document.getElementById('abordagem').value + '</p>';

  html += '<h2>5. Resultados Esperados</h2>';
  html += '<p><strong>Metas Quantitativas:</strong> ' + document.getElementById('metasQuantitativas').value + '</p>';
  html += '<p><strong>Metas Qualitativas:</strong> ' + document.getElementById('metasQualitativas').value + '</p>';

  html += '<h2>6. Público-Alvo</h2>';
  html += '<p><strong>Descrição dos Beneficiários:</strong> ' + document.getElementById('descricaoBeneficiarios').value + '</p>';

  html += '<h2>7. Orçamento</h2>';
  html += '<p><strong>Custos Principais:</strong> ' + document.getElementById('custosDetalhados').value + '</p>';

  html += '<h2>8. Cronograma</h2>';
  html += '<p><strong>Fases do Projeto:</strong> ' + document.getElementById('fasesProjeto').value + '</p>';

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
[<button style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">Voltar ao Escritório de Projetos OSC</button>](../)
