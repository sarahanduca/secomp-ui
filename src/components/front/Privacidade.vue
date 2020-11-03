<template>
  <b-container class="h-100">
    <b-row align-v="center" align-h="center">
      <b-col>
        <h4 class="text-center">Termo de consentimento de dados</h4>
        <p>
          A Lei Geral de proteção de Dados (LGPD) - Lei nº 13709, de 14 de
          agosto de 2018, atualizada pela Lei nº 13853, de 2019, dispõe sobre o
          tratamento de dados pessoais com o objetivo de proteger os direitos
          fundamentais de liberdade e de privacidade do indivíduo. Nesse
          sentido, este termo de consentimento versa sobre o uso dos dados
          coletados para a inscrição da quarta edição da Semana da Computação
          (SECOMP), no ano de 2020, e sobre a gravação das palestras que
          ocorrerão.<br />Os seguintes dados serão coletados e tratados: Nome,
          CPF, endereço eletrônico, RA/Matrícula. Esses dados serão coletados
          única e exclusivamente para confecção do relatório final do evento e
          dos certificados de participação. Caso os dados sejam utilizados para
          geração de estatísticas de participação no evento, eles serão
          anonimizados.<br />Os dados pessoais coletados estarão sob a
          responsabilidade do Departamento de Informática da Universidade
          Estadual de Maringá e não serão compartilhados com quaisquer outras
          instituições, públicas ou privadas. Durante a realização do evento, as
          palestras serão gravadas e serão disponibilizadas nas redes sociais
          oficiais do evento. As tecnologias necessárias para garantir a
          confidencialidade e a proteção dos dados estão sendo utilizadas de
          forma adequada.<br />A qualquer momento, você poderá solicitar remoção
          dos dados armazenados e ter acesso às informações sobre a forma e a
          duração de tratamento dos seus dados, e ainda revogar este
          consentimento.<br />Para dúvidas e esclarecimentos, entre contato com
          o Prof. Dr. Daniel Kikuti, coordenador geral do evento, pelo e-mail
          <b-link href="mailto:dkikuti@uem.br">dkikuti@uem.br</b-link>.
        </p>
      </b-col>
    </b-row>
    <b-row align-h="center" class="text-center mb-3">
      <b-col>
        <b-button variant="success" to="inscricao">Voltar</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Privacidade"
};
</script>

<style scoped>
.btn-success {
  border-color: #296016 !important;
  background-color: #296016 !important;
}
.btn-success:focus {
  box-shadow: 0 0 0 0.2rem #296016;
}
</style>
