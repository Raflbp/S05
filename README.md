# 📚 Studies Room — Reserva de Salas de Estudos (App Inatel)

> **Disciplina:** Interface Homem-Máquina (IHM) — Engenharia de Software (Inatel)  
> **Autor:** Rafael Bruno (`@Raflbp`)  
> **Status:** Em andamento

---

## 🔗 Links Rápidos do Projeto

* 🌐 **Interface Publicada (Demo Interativa):** [Acessar no GitHub Pages / CodePen](https://github.com/Raflbp/S05.git)
* 🎨 **Wireframes e Fluxo de Telas:** [Visualizar Wireframe.pdf](./Wireframe.pdf)

---

## 🎯 Sobre o Projeto

O **Studies Room** é uma proposta de nova funcionalidade integrada ao aplicativo  do **Inatel (Instituto Nacional de Telecomunicações)**. O objetivo da solução é otimizar a busca, visualização de disponibilidade em tempo real e solicitação de reserva de salas de estudos na Biblioteca e nos blocos do campus.

O projeto foi concebido aplicando rigorosamente os princípios de **Usabilidade, Ergonomia, Identidade Visual Institucional e Design Responsivo Mobile-First**, garantindo feedback contínuo ao usuário desde a consulta até a confirmação final do agendamento.

---

## 📋 Artefatos de Concepção e Documentação

Conforme o modelo de entrega da disciplina, a concepção da interface abrange os seguintes pilares:

### 1. User Story
> *"Como estudante do Inatel, quero consultar em tempo real quais salas de estudos estão abertas ou em uso e solicitar um agendamento informando data, horário, quantidade de pessoas e finalidade, para garantir um espaço adequado para estudos individuais ou em grupo sem precisar me deslocar presencialmente até a biblioteca."*

### 2. Análise da Tarefa (HTA - Hierarchical Task Analysis)
* **Objetivo Principal:** Reservar uma sala de estudos no campus do Inatel.
  * **1. Consultar disponibilidade de salas**
    * 1.1. Buscar sala ou bloco pelo campo de pesquisa textual.
    * 1.2. Filtrar visualização por status (*Todas*, *Abertas*, *Em uso*).
    * 1.3. Verificar capacidade e recursos disponíveis (ex.: Lousa, TV, Projetor).
  * **2. Preencher solicitação de reserva**
    * 2.1. Selecionar uma sala com status *Aberta* (`Agendar >`).
    * 2.2. Definir data, horário de início e horário de término.
    * 2.3. Informar quantidade de pessoas e finalidade do uso.
    * 2.4. Submeter solicitação (`Confirmar pedido`).
  * **3. Acompanhar status e confirmação**
    * 3.1. Visualizar resumo do agendamento e status *Aguardando confirmação*.
    * 3.2. Receber validação final (*Reserva confirmada*) ou consultar na aba *Meus pedidos*.

### 3. Fluxo de Informação (Diagrama de Classes)
A modelagem orienta a arquitetura de dados entre o aluno, o espaço físico e o ciclo de vida da reserva:
* **`Estudante`**: `matricula`, `nome`, `curso`, `periodo` — realiza `solicitacaoReserva()`.
* **`SalaEstudo`**: `idSala`, `nome`, `bloco`, `capacidade`, `recursos[]`, `status` (*Aberta* | *Em uso*) — verifica `consultarDisponibilidade()`.
* **`Reserva`**: `idReserva`, `data`, `horarioInicio`, `horarioFim`, `qtdPessoas`, `finalidade`, `statusPedido` (*Aguardando confirmação* | *Confirmada* | *Cancelada*) — executa `registrarPedido()` e `confirmarReserva()`.

### 4. Wireframes e Fluxo de Ponta a Ponta
O fluxo interativo foi estruturado em **4 etapas principais** (disponíveis no arquivo `Wireframe.pdf`):

| Tela | Etapa do Fluxo | Descrição e Feedback ao Usuário |
| :--- | :--- | :--- |
| **01** | **Salas de estudos** | Listagem categorizada (*Salas abertas* e *Salas em uso*), barra de busca, filtros rápidos com contadores e barra de navegação inferior (*Início*, *Meus pedidos*, *Notificações*, *Perfil*). |
| **02** | **Solicitar reserva** | Exibição dos recursos da sala selecionada (ex.: *Sala 04 - Bloco A*, *6 pessoas*, *Lousa • TV*) e formulário estruturado para input de data, horários, lotação e finalidade. |
| **03** | **Pedido enviado** | Feedback visual imediato de registro com badge de status (`Aguardando confirmação`), card com o resumo completo do agendamento e atalho direto para *Meus pedidos*. |
| **04** | **Confirmação de pedido** | Tela de encerramento do fluxo confirmando a efetivação da reserva (`Reserva confirmada`) e retorno seguro à tela inicial. |

---