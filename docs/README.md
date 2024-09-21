# Introdução

* **Projeto:** Dificuldades em prestar concursos públicos
* **Repositório GitHub:** [LINK PARA O REPOSITÓRIO NO GITHUB](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-ppl-cc-m-20242-g7-concursos/tree/master)
* **Membros da equipe:**

  * [Gabriel Matos Nogueira](https://github.com/GabrielMatosNogueira)
  * [Gustavo Lopes Oliveira](https://github.com/GustavoLopesOliveira)
  * [Isabel Cristina Borges](https://github.com/isabelcbrg)
  * [João Paulo de Deus Natividade Oliveira Saraiva](https://github.com/Jpdnos)
  * [Nayron Campos Soares](https://github.com/1567164)
  * [Lawer Böuch Soncin Rocha](https://github.com/la-wer)
  * [Rafael Guimaraes Matos](https://github.com/RafaelgMatos)

A documentação do projeto é estruturada da seguinte forma:

1. Introdução
2. Contexto
3. Product Discovery
4. Product Design
5. Metodologia
6. Solução
7. Referências Bibliográficas

✅ [Documentação de Design Thinking (MIRO)](files/pdfmiro)

# Contexto

A dificuldade em encontrar concursos públicos e federais torna-se marcante no contexto brasileiro, uma vez que os candidatos interessados possuem dificuldade em encontrar, de maneira simples, concursos disponíveis, editais, materiais de estudo, datas e futuros concursos abertos (preestabelecidos por entidades públicas). Embora a Internet tenha facilitado a maneira como os candidatos possuem acesso aos concursos e editais, as informações geralmente se encontram fragmentadas e incompletas, com pouca variedade de opções e de difícil coesão temporal, uma vez que os prazos são curtos e a informação sobre as possibilidades são geralmente encaminhas aos usuários próximo a data das provas de seleção, o que diminui a possibilidade de aprovação.

## Problema

A aplicação busca resolver a dificuldade de achar concursos públicos. Muitas pessoas querem fazer concurso mas acabam não sabendo da existência de editais em aberto e ao procurar os sites que possuem um diretório de concursos tem uma navegação ruim, gerando a dificuldade de filtrar por objetivos mais específicos para encontrar um concurso. Além disso também existe a dificuldade em encontrar material de estudo adequado.

## Objetivos

O objetivo é desenvolver um software com uma interface mais intuitiva e mais limpa para que não haja dúvidas e dificuldades durante a navegação do usuário. Criaremos também filtros de pesquisa que são mais específicos para que cada pessoa consiga achar os concursos da área desejada. Para resolver a falta de divulgação dos concursos, criaremos notificações que vão ser enviadas para o celular. O usuário poderá escolher o que vai ser notificado. Também serão fornecidos editais e uma biblioteca de livros para estudo.

## Justificativa

O salário médio no Brasil em 2023, mensalmente, é de aproximadamente R2 979,00 de acordo com o IBGE. Enquanto o menor salário do Concurso Público Nacional Unificado, de acordo com o site "blog.grancursosonline.com.br" é R$5.212,29 podendo chegar a R$20.924,80. Cerca de 1% da população se inscreveu para o Concurso Público Nacional Unificado, de acordo com o site "www.acheconcursos.com.br". Com o acesso à informação e divulgação de forma mais simples esse número vai ser maior.

## Público-Alvo

A aplicação tem como base de público-alvo, alcançar pessoas as quais estão à procura de concursos públicos entre a faixa etária de 23 e 42 anos de idade, contemplando os níveis de escolaridade desde o ensino básico, médio e superior, abrangendo várias áreas profissionais como segmentação de atuação e atentendo a demanada de várias regiões do país.

# Product Discovery

## Etapa de Entendimento

#### **Matriz CSD**

![Matriz CSD](https://f.feridinha.com/o4AcT.png)

#### **Mapa de stakeholders**

![Mapa de stakeholders](https://f.feridinha.com/4HEsm.png)

#### **Entrevistas qualitativas**

![Entrevistas qualitativas](https://f.feridinha.com/gungr.png)

#### **Highlights de pesquisa**

![Highlights de pesquisa](https://f.feridinha.com/ZURU5.png)

## Etapa de Definição

### Personas

![Joaquim](https://f.feridinha.com/JPjcW.png)

![Guilherme](https://f.feridinha.com/UbmiU.png)

![Roberta](https://f.feridinha.com/Ul4B1.png)

# Product Design

Nesse momento, vamos transformar os insights e validações obtidos em soluções tangíveis e utilizáveis. Essa fase envolve a definição de uma proposta de valor, detalhando a prioridade de cada ideia e a consequente criação de wireframes, mockups e protótipos de alta fidelidade, que detalham a interface e a experiência do usuário.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

| EU COMO...`PERSONA` | QUERO/PRECISO ...`FUNCIONALIDADE`        | PARA ...`MOTIVO/VALOR`               |
| --------------------- | ------------------------------------------ | -------------------------------------- |
| Graduando de Direito/Adm | Saber quais os concursos disponíveis na minha área de interesse | Me preparar de maneira efetiva |
| Estudante de Concurso | Saber como e quando me preparar | Ter maiores chances de passar |
| "Concurseiro" (Mais de uma opção de curso) | De indicações de material de estudo de fácil acesso | Dedicar mais tempo estudando do que procurando livros |
| Desempregado | Uma funcionalidade que mostre todos os concursos em um determinado raio de distância | Saber as oportunidades regionais de emprego |
| Funcionário Público | Notícias sobre os concursos abertos | Informar meus amigos e familiares |
| Um jovem com dificuldade com horários | Um ciclo de estudos personalizado | Melhorar a minha agenda |
| Chefe de Empresa | Um local para disponibilizar concursos | Contratar funcionários |
| Aposentado | Concursos que atendam minha faixa etária | Voltar ao mercado de trabalho |
| Militar | Concursos da área militar | Me informar sobre testes físicos e disciplinares |

## Proposta de Valor

##### Proposta para Joaquim

![Joaquim](https://f.feridinha.com/Et4XI.png)

##### Proposta para Guilherme

![Guilherme](https://f.feridinha.com/2x2wm.png)

##### Proposta para Roberta

![Roberto](https://f.feridinha.com/R9e0u.png)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID  | Descrição do requisito                                                                                                                                 | Prioridade |
|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1   | O site deve permitir o cadastro de usuários (com dados como nome, e-mail e senha).                                                                      | Alta       |
| 2   | Botão de login.                                                                                                                                        | Alta       |
| 3   | Deve haver autenticação de usuários por meio de login e senha.                                                                                          | Alta       |
| 4   | O site deve oferecer uma opção de recuperação de senha por e-mail e telefone.                                                                           | Média      |
| 5   | Os usuários devem poder pesquisar concursos públicos por palavras-chave, área de atuação, estado/região e cargo.                                        | Alta       |
| 6   | A busca deve ser capaz de filtrar resultados por data de inscrição, nível de escolaridade, faixa etária e faixa salarial.                               | Alta       |
| 7   | O site deve exibir uma lista de concursos ativos, com informações principais como: nome do concurso, órgão/empresa organizadora, datas e vagas.         | Alta       |
| 8   | O site deve exibir salário e link para o edital nos concursos ativos.                                                                                   | Alta       |
| 9   | Os usuários devem poder se inscrever para receber notificações sobre novos concursos com base em suas preferências.                                      | Alta       |
| 10  | O sistema deve enviar alertas por e-mail, SMS e caixa de entrada quando novos concursos forem lançados.                                                 | Alta       |
| 11  | Ao clicar em um concurso, o usuário deve ver uma página de detalhes com informações completas, link para edital, inscrição e calendário do concurso.     | Alta       |
| 12  | O site deve oferecer simulados e provas anteriores de concursos.                                                                                        | Média      |
| 13  | Deve haver uma seção com materiais de estudo (livros, apostilas, vídeo aulas, dicas) para diversos cargos e áreas.                                       | Média      |
| 14  | Os usuários devem poder salvar concursos de interesse em uma lista de favoritos para acesso rápido.                                                     | Média      |
| 15  | O site deve conter uma seção de notícias sobre concursos públicos, com atualizações sobre editais, resultados e dicas de preparação.                    | Média      |
| 16  | Cada usuário deve ter acesso a um painel pessoal onde pode ver concursos favoritos, acompanhar notificações e acessar o histórico de concursos.          | Alta       |
| 17  | O site deverá ter um FAQ para ajudar os usuários.                                                                                                       | Média      |
| 18  | O site deve oferecer suporte técnico ao usuário, com canais de atendimento via chat, e-mail ou telefone.                                                | Alta       |


### Requisitos não Funcionais

| ID  | Descrição do requisito                                                                                                                                   | Prioridade |
|-----|----------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 19  | O site deverá ser publicado de forma pública na internet.                                                                                                 | Alta       |
| 20  | Deve utilizar HTML e CSS.                                                                                                                                 | Alta       |
| 21  | O sistema deve ser capaz de suportar pelo menos 10.000 usuários ativos simultaneamente sem perda de desempenho.                                           | Alta       |
| 22  | O site deve ser escalável, ou seja, deve poder aumentar a capacidade de atendimento com o crescimento do número de usuários.                              | Alta       |
| 23  | Todas as comunicações entre o usuário e o site devem ser feitas através de HTTPS (protocolo seguro).                                                      | Alta       |
| 24  | As senhas dos usuários devem ser armazenadas de forma criptografada.                                                                                      | Alta       |
| 25  | Backup diário das informações para evitar perda de dados em caso de falhas.                                                                               | Alta       |
| 26  | O site deve estar disponível 99,9% do tempo.                                                                                                              | Alta       |
| 27  | Deve ser fácil de navegar, com poucos cliques para acessar os principais conteúdos.                                                                       | Média      |
| 28  | O site deve ser compatível com os navegadores mais usados, como Google Chrome, Mozilla Firefox, Safari e Microsoft Edge.                                  | Alta       |
| 29  | O site deve funcionar corretamente em diferentes dispositivos, como desktops, tablets e smartphones.                                                      | Alta       |
| 30  | O código do site deve ser modular e seguir boas práticas de programação, facilitando a manutenção e adição de novas funcionalidades.                      | Média      |
| 31  | O sistema deve ser facilmente atualizável, permitindo a implementação de novas funcionalidades sem interrupções significativas.                           | Média      |
| 32  | O sistema deve ser projetado de forma a permitir a migração para outras plataformas de hospedagem sem grande esforço.                                      | Média      |
| 33  | O site deve ser compatível com diferentes sistemas operacionais e servidores (Windows, Linux, etc.).                                                      | Média      |
| 34  | Toda a documentação técnica do sistema deve ser mantida e acessível para a equipe de desenvolvimento e manutenção.                                         | Média      |
| 35  | O sistema deve permitir a adaptação para múltiplos idiomas e formatos regionais.                                                                          | Média      |

## Projeto de Interface

Artefatos relacionados com a interface e a interacão do usuário na proposta de solução.

### Wireframes

Estes são os protótipos de telas do sistema.


##### TELA DE CADASTRO

Onde o usuário poderá fazer o primeiro cadastro.

![Cadastro](https://f.feridinha.com/ylCF1.png)

#### TELA DE LOGIN

Onde o usuário poderá fazer o login após se cadastrar ou retornar ao app.

![Login](https://f.feridinha.com/UNDgM.png)

#### TELA DE RECUPERAÇÃO DE SENHA

Onde o usuário poderá recuperar sua senha.

![Recuperação de senha](https://f.feridinha.com/Jo9z5.png)

#### TELA DE HOME

Tela inicial onde o usuário poderá acessar as funcionalidades do app.

![Home](https://f.feridinha.com/grvgl.png)

#### TELA DE PROVAS E SIMULADOS

Onde o usuário poderá consultar provas e simulados disponíveis.

![Provas e Simulados](https://f.feridinha.com/pco0W.png)

#### TELA DE MATERIAIS DE ESTUDO

Onde o usuário poderá consultar materiais de estudo disponíveis.

![Materiais de Estudo](https://f.feridinha.com/AMF7W.png)

#### TELA DE CONCURSOS

Onde o usuário poderá consultar os concursos disponíveis.

![Concursos](https://f.feridinha.com/dvMwK.png)

#### TELA DE EDITAIS

Onde o usuário poderá conferir os editais dos cursos disponíveis.

![Editais](https://f.feridinha.com/p78A8.png)

#### TELA DE CALENDÁRIO

Onde o usuário poderá consultar os concursos futuros cadastrados.

![Calendário](https://f.feridinha.com/fgobK.png)

#### TELA DE CONFIGURAÇÕES

Onde o usuário poderá configurar e acessar informações sobre o app.

![Configurações](https://f.feridinha.com/Ok0XL.png)

#### TELA DE APARÊNCIA

Onde o usuário poderá modificar aspectos de aparência do aplicativo.

![Aparência](https://f.feridinha.com/Ot8Iv.png)

#### TELA DE PRIVACIDADE E SEGURANÇA

Onde o usuário poderá conferir as diretrizes do app.

![Privacidade e Segurança](https://f.feridinha.com/kY7sw.png)

#### TELA DE NOTIFICAÇÕES

Onde o usuário poderá conferir novidades e notificações do app.

![Notificações](https://f.feridinha.com/ClVn8.png)

#### TELA DE FAQ

Tela onde o usuário poderá tirar dúvidas frequentes sobre o app.

![FAQ](https://f.feridinha.com/Klg0i.png)

#### TELA DE SOBRE

Onde o usuário poderá conhecer um pouco mais sobre a história do aplicativo.

![Sobre](https://f.feridinha.com/1n7g3.png)

### User Flow

![Userflow](https://f.feridinha.com/LE8o8.png)

### Protótipo Interativo

✅ [Protótipo Interativo (Figma)](https://www.figma.com/proto/ENQz2rYdKyTwRPfqBOEvGZ/Prototipo-TI?node-id=5-2&node-type=canvas&t=AgwKRiTkJKDNl0ZZ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A2)

# Metodologia

## Ferramentas

Relação de ferramentas empregadas pelo grupo durante o projeto.

| Ambiente                    | Plataforma | Link de acesso                                     |
| --------------------------- | ---------- | -------------------------------------------------- |
| Processo de Design Thinking | Miro       | https://miro.com/app/board/uXjVKoWG8Ew=/       |
| Repositório de código     | GitHub     | https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-ppl-cc-m-20242-g7-concursos/tree/master/codigo      |
| Hospedagem do site          | Render     | https://site.render.com/XXXXXXX ⚠️ EXEMPLO ⚠️ |
| Protótipo Interativo       | Figma      | https://www.figma.com/proto/ENQz2rYdKyTwRPfqBOEvGZ/Prototipo-TI?node-id=5-2&node-type=canvas&t=AgwKRiTkJKDNl0ZZ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A2   |

## Gerenciamento do Projeto

A organização da equipe foi divida em quatro grupos, cada um responsáveis pelas funções requisitadas para a entrega das atividades: Github, Figma, PowerPoint e Miro.
O grupo foi dividido em:

* **Github** - Lawer, Gabriel, Rafael;
* **Figma** - Lawer, Gabriel, João, Gustavo, Rafael;
* **PowerPoint** - Isabel e Nyron;
* **Miro** - João e Nyron.

# Solução Implementada

Esta seção apresenta todos os detalhes da solução criada no projeto.

## Vídeo do Projeto

O vídeo a seguir traz uma apresentação do problema que a equipe está tratando e a proposta de solução. ⚠️ EXEMPLO ⚠️

[![Vídeo do projeto](images/video.png)](https://www.youtube.com/embed/70gGoFyGeqQ)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> O video de apresentação é voltado para que o público externo possa conhecer a solução. O formato é livre, sendo importante que seja apresentado o problema e a solução numa linguagem descomplicada e direta.
>
> Inclua um link para o vídeo do projeto.

## Funcionalidades

Esta seção apresenta as funcionalidades da solução.Info

##### Funcionalidade 1 - Cadastro de Contatos ⚠️ EXEMPLO ⚠️

Permite a inclusão, leitura, alteração e exclusão de contatos para o sistema

* **Estrutura de dados:** [Contatos](#ti_ed_contatos)
* **Instruções de acesso:**
  * Abra o site e efetue o login
  * Acesse o menu principal e escolha a opção Cadastros
  * Em seguida, escolha a opção Contatos
* **Tela da funcionalidade**:

![Tela de Funcionalidade](images/exemplo-funcionalidade.png)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente cada uma das funcionalidades que a aplicação fornece tanto para os usuários quanto aos administradores da solução.
>
> Inclua, para cada funcionalidade, itens como: (1) titulos e descrição da funcionalidade; (2) Estrutura de dados associada; (3) o detalhe sobre as instruções de acesso e uso.

## Estruturas de Dados

Descrição das estruturas de dados utilizadas na solução com exemplos no formato JSON.Info

##### Estrutura de Dados - Contatos   ⚠️ EXEMPLO ⚠️

Contatos da aplicação

```json
  {
    "id": 1,
    "nome": "Leanne Graham",
    "cidade": "Belo Horizonte",
    "categoria": "amigos",
    "email": "Sincere@april.biz",
    "telefone": "1-770-736-8031",
    "website": "hildegard.org"
  }
  
```

##### Estrutura de Dados - Usuários  ⚠️ EXEMPLO ⚠️

Registro dos usuários do sistema utilizados para login e para o perfil do sistema

```json
  {
    id: "eed55b91-45be-4f2c-81bc-7686135503f9",
    email: "admin@abc.com",
    id: "eed55b91-45be-4f2c-81bc-7686135503f9",
    login: "admin",
    nome: "Administrador do Sistema",
    senha: "123"
  }
```

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente as estruturas de dados utilizadas na solução tanto para dados utilizados na essência da aplicação quanto outras estruturas que foram criadas para algum tipo de configuração
>
> Nomeie a estrutura, coloque uma descrição sucinta e apresente um exemplo em formato JSON.
>
> **Orientações:**
>
> * [JSON Introduction](https://www.w3schools.com/js/js_json_intro.asp)
> * [Trabalhando com JSON - Aprendendo desenvolvimento web | MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON)

## Módulos e APIs

Esta seção apresenta os módulos e APIs utilizados na solução

**Images**:

* Unsplash - [https://unsplash.com/](https://unsplash.com/) ⚠️ EXEMPLO ⚠️

**Fonts:**

* Kanit - [https://fonts.google.com/specimen/Kanit](https://fonts.google.com/specimen/Kanit)

**Scripts:**

* jQuery - [http://www.jquery.com/](http://www.jquery.com/) ⚠️ EXEMPLO ⚠️
* Bootstrap 4 - [http://getbootstrap.com/](http://getbootstrap.com/) ⚠️ EXEMPLO ⚠️

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente os módulos e APIs utilizados no desenvolvimento da solução. Inclua itens como: (1) Frameworks, bibliotecas, módulos, etc. utilizados no desenvolvimento da solução; (2) APIs utilizadas para acesso a dados, serviços, etc.

# Referências

As referências utilizadas no trabalho foram:

* blog.grancursosonline.com.br
* www.acheconcursos.com.br

