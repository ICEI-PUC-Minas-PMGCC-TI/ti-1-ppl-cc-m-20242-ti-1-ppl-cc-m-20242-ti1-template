# Introdução

Informações básicas do projeto.

* **Projeto:** Eventful
* **Repositório GitHub:** [Repositorio](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-ppl-cc-m-20242-eventos-proximos)
* **Membros da equipe:**

  * [Rafael Henrique](https://github.com/Rafaelhs2005) 
  * [Joao Pedro](https://github.com/Jopefv) 
  * [Kamily Vitória](https://github.com/kamivss)
  * [Bruna Noely](https://github.com/brunanoely)
  * [Gabriel Lucas](https://github.com/Gabriellsmm)
  * [Caio Fernandes](https://github.com/caionesess)
  * [Julia Santos](https://github.com/ajuliasantos)

A documentação do projeto é estruturada da seguinte forma:

1. Introdução
2. Contexto
3. Product Discovery
4. Product Design
5. Metodologia
6. Solução
7. Referências Bibliográficas

✅ [Documentação de Design Thinking (MIRO)](files/Documentacao.pdfpdf)

# Contexto

Em um mundo em que as informações estão fragmentadas em vários lugares ao mesmo tempo, a busca por clareza nunca esteve tão fácil, mas ao mesmo tempo tão complicada - especialmente quando se trata do planejamento de um evento externo. Dessa forma, esse projeto visa otimizar o tempo e facilitar a vida de todos que estão envolvidos neste espectro, desde os jovens da vida noturna, até aqueles que tornam os eventos possíveis.


## Problema

Atualmente, muitas pessoas têm dificuldade em encontrar eventos próximos que se alinhem com seus interesses específicos. A fragmentação de informações sobre eventos em diferentes plataformas e a falta de centralização dificultam a descoberta de opções culturais, sociais e recreativas. Além disso, usuários enfrentam o problema de não conseguir obter detalhes sobre eventos locais, como data, local, tipo de público, ingressos e atividades envolvidas, de maneira rápida e confiável. Isso pode resultar em uma perda de oportunidades para frequentar eventos relevantes ou em frustrações por não encontrar o que procuram.


## Objetivos

O objetivo principal do site de encontrar eventos próximos é oferecer uma plataforma fácil de usar que centralize e organize informações sobre eventos locais de acordo com as preferências e localização do usuário. Alguns dos objetivos específicos incluem:

* Centralizar informações: Reunir eventos de diversas fontes, como redes sociais, sites especializados e organizadores de eventos.
* Facilitar a busca personalizada: Permitir que os usuários filtrem eventos por localização, categoria, data, faixa de preço e preferências pessoais.
* Oferecer notificações personalizadas: Enviar alertas quando novos eventos de interesse surgirem próximos à localização do usuário.
* Melhorar a experiência do usuário: Proporcionar uma interface simples e intuitiva, com descrições detalhadas dos eventos, permitindo fácil navegação e divulgação.



## Justificativa

A justificativa para o desenvolvimento de um site de encontrar eventos próximos baseia-se na crescente demanda por uma plataforma centralizada e eficiente para ajudar as pessoas a descobrirem eventos que atendam a seus interesses e localização. A fragmentação de informações em diversas plataformas dificulta a experiência tanto para os usuários, que não encontram facilmente eventos relevantes, quanto para os organizadores, que buscam maior visibilidade. Um site que simplifique esse processo, oferecendo busca personalizada e notificações, pode melhorar o engajamento, apoiar pequenos eventos e aumentar a participação em atividades locais.


## Público-Alvo

O público-alvo principal desse site inclui:

*  Jovens adultos e estudantes: Pessoas entre 18 e 35 anos que buscam atividades recreativas, sociais e culturais em suas cidades ou em locais próximos.
*  Profissionais ocupados: Pessoas com horários limitados que querem otimizar seu tempo livre participando de eventos de interesse, mas têm dificuldades para encontrar opções facilmente.
*  Organizadores de eventos: Profissionais e empresas que buscam divulgar seus eventos para públicos segmentados e aumentar a participação.
*  Turistas e visitantes: Pessoas em viagens que desejam descobrir atividades e eventos locais durante sua estadia.
*  Motoristas de aplicativo: que buscam otimizar seus ganhos e conseguir achar mais 

>[Personas e proposta de valor](files/Persona.pdf)


# Product Discovery

## Etapa de Entendimento


[Product Discovery](files/productDiscovery.pdf)


## Etapa de Definição

### Personas

![persona 1](images/Persona1.png)
![persona 2](images/Persona2.png)
![persona 3](images/Persona3.png)

# Product Design

Nesse momento, vamos transformar os insights e validações obtidos em soluções tangíveis e utilizáveis. Essa fase envolve a definição de uma proposta de valor, detalhando a prioridade de cada ideia e a consequente criação de wireframes, mockups e protótipos de alta fidelidade, que detalham a interface e a experiência do usuário.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

| EU COMO...`PERSONA` | QUERO/PRECISO ...`FUNCIONALIDADE`        | PARA ...`MOTIVO/VALOR`               |
| --------------------- | ------------------------------------------ | -------------------------------------- |
| Jovem de 19 anos  | De informações e comentários de outros usuários a respeito do evento | Ir ao evento com segurança, já sabendo a procedência            |
| Jovem de 19 anos         | Saber os eventos próximos a mim      | Me programar e conhecer lugares e pessoas novas |
| Motorista de Aplicativo        | Saber os tipos de eventos próximos a mim a partir de filtros     | Selecionar melhor os tipos de passageiros que lidarei |
| Motorista de Aplicativo        | Ter conhecimento de quais eventos estão sendo mais acessados/procurados  | Obter corridas mais rentáveis com maior lucro |
| Produtor de Eventos       | Um espaço para condensar informações do meu evento e eventuais mudanças  | Não ter informações desconexas e perdidas em múltiplas plataformas, causando desinteresse no público |
| Produtor de Eventos       | Destaque para o evento que estou promovendo  | Atingir meu público-alvo |

## Proposta de Valor

![proposta 1](images/proposta1.png)
![proposta 2](images/proposta2.png)
![proposta 3](images/proposta3.png)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID     | Descrição do Requisito                                   | Prioridade |
| ------ | ---------------------------------------------------------- | ---------- |
| RF-001 | Exibir as avaliações dos eventos | MÉDIA       |
| RF-002 | Exibir o local, horário e lotação dos eventos | ALTA     |
| RF-003 | Mecanismos de filtragem dos eventos por preferências | ALTA     |
| RF-004 | Espaço para divulgação de eventos | ALTA     |
| RF-005 | Redirecionamento dos usuários interessados para a compra de ingressos ou inscrições dos eventos | MÉDIA     |
| RF-006 | Notificações sobre eventos com base nas preferências dos usuário | MÉDIA     |
| RF-007 | Permitir o cadastro e login de usuários | MÉDIA     |

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                              | Prioridade |
| ------- | ------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | O sistema deve suportar no mínimo 10000 acessos simultâneos sem comprometer o desempenho | MÉDIA     |
| RNF-002 | O sistema deve garantir a segurança dos dados de todos os usuários | ALTA      |
| RNF-003 | O sistema deve ser compatível com todos os dispositivos atuais | MÉDIA      |
| RNF-004 | O sistema deve estar disponível 24/7 | ALTA      |
| RNF-005 | O sistema deve retornar os resultados de busca em no máximo 1 segundo | MÉDIA      |
| RNF-006 | O sistema deve ser intuitivo e de fácil utilização | ALTA      |


## Projeto de Interface

Artefatos relacionados com a interface e a interacão do usuário na proposta de solução.

### Wireframes

Estes são os protótipos de telas do sistema.

### Tela de cadastro

Tela para usuarios se cadastrarem tanto como usuarios comuns como produtores

![telaCadastro](images/cadastro.png)


### Tela de Login

Tela para os usuarios logarem na conta

![telaLogin](images/login.png)

### Tela inicial

Tela inicial do usuario comum que mostra os eventos que estão para acontecer com abas de pesquisa e filtragem

![telaInicial](images/inicial.png)

### Tela inical do protutor

Tela inicial para usuarios cadastrados como produtores com as mesmas funcionalidades de usuarios comuns porem com a posibilidade de divulgar seus eventos

![telaInicialProdutor](images/inicialProdutor.png)

### Descrição dos eventos

Tela que mostra a descrição do evento

![DescEvento](images/descEvento.png)

### Area Produtor

Tela para o controle das divulgaçoes dos produtores

![areaProdutor](images/areaProdutor.png)

### Eventos mais visitados

Tela com os eventos mais acessados

![maisVisitados](images/maisVisitados.png)

### User Flow


![Userflow](images/UserFlow.png)

### Protótipo Interativo

✅ [Protótipo Interativo (MarvelApp)](https://marvelapp.com/prototype/1b81d4a4)  

# Metodologia

Detalhes sobre a organização do grupo e o ferramental empregado.

## Ferramentas

Relação de ferramentas empregadas pelo grupo durante o projeto.

| Ambiente                    | Plataforma | Link de acesso                                     |
| --------------------------- | ---------- | -------------------------------------------------- |
| Processo de Design Thinking | Miro       | https://miro.com/app/board/uXjVKoWGKQ8=/        |
| Repositório de código     | GitHub     | https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-ppl-cc-m-20242-eventos-proximos   |
| Hospedagem do site          | Render     | https://site.render.com/XXXXXXX ⚠️ EXEMPLO ⚠️ |
| Protótipo Interativo       | MarvelApp  | https://marvelapp.com/prototype/1b81d4a4   |
|                             |            |                                                    |

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Liste as ferramentas empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível. Inclua itens como: (1) Editor de código, (2) )ferramentas de comunicação, (3) )ferramentas de diagramação, (4) )plataformas de hospedagem, entre outras.

## Gerenciamento do Projeto

Divisão de papéis no grupo e apresentação da estrutura da ferramenta de controle de tarefas (Kanban).

![Exemplo de Kanban](images/exemplo-kanban.png)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Nesta parte do documento, você deve apresentar  o processo de trabalho baseado nas metodologias ágeis, a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.
>
> **Orientações**:
>
> - [Sobre Projects - GitHub Docs](https://docs.github.com/pt/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
> - [Gestão de projetos com GitHub | balta.io](https://balta.io/blog/gestao-de-projetos-com-github)
> - [(460) GitHub Projects - YouTube](https://www.youtube.com/playlist?list=PLiO7XHcmTsldZR93nkTFmmWbCEVF_8F5H)
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)

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

* Icons Font Face - [https://fontawesome.com/](https://fontawesome.com/) ⚠️ EXEMPLO ⚠️

**Scripts:**

* jQuery - [http://www.jquery.com/](http://www.jquery.com/) ⚠️ EXEMPLO ⚠️
* Bootstrap 4 - [http://getbootstrap.com/](http://getbootstrap.com/) ⚠️ EXEMPLO ⚠️

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente os módulos e APIs utilizados no desenvolvimento da solução. Inclua itens como: (1) Frameworks, bibliotecas, módulos, etc. utilizados no desenvolvimento da solução; (2) APIs utilizadas para acesso a dados, serviços, etc.

# Referências

As referências utilizadas no trabalho foram:

* SOBRENOME, Nome do autor. Título da obra. 8. ed. Cidade: Editora, 2000. 287 p ⚠️ EXEMPLO ⚠️

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
>
> **Orientações**:
>
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
