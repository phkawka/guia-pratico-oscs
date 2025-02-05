---
layout: default
title: Ferramenta Interativa de Elaboração de Proposta
---

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
  // Código JavaScript para gerar a proposta
}

function imprimirProposta() {
  // Código JavaScript para imprimir a proposta
}
</script>

[<button style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">Voltar ao Escritório de Projetos OSC</button>](../)
