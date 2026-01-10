# testeRemOpt

Aplicativo desenvolvido como teste técnico para a empresa remOpt.

## Tecnologias e Bibliotecas Utilizadas

- **React Native CLI**: Estrutura principal do app, sem Expo.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **styled-components/native**: Estilização dos componentes de forma modular e dinâmica.
- **react-native-vision-camera**: Acesso à câmera e leitura de QR Codes.
- **axios**: Requisições HTTP para a PokeAPI.
- **Context API**: Gerenciamento global do estado dos dados dos Pokémons (atual, anterior e próximo).
- **Animated API**: Animações de entrada e interação nos componentes.
- **PokeAPI**: Fonte dos dados dos Pokémons.

## Como funciona

- **Execução**: Ao clonar o repositório, digite "yarn" no terminal para baixar as bibliotecas. Para rodar o aplicativo execute o comando "yarn android" no terminal.
- **Tela Inicial**: Mostra o logo, nome do usuário e botão para escanear QR Code.
- **Scanner**: Usa a câmera do dispositivo para ler QR Codes.
- **Consulta**: Ao ler o QR, busca o Pokémon correspondente, além do anterior e próximo, salvando tudo no estado global.
- **Resultado**: Exibe nome, tipo e imagem do Pokémon, com animação. 
- **Layout**: Todo o visual é feito com styled-components.



## Showcase

<p align="center">
  <img src="https://github.com/user-attachments/assets/96c4ef83-6dc4-4519-a381-1048228b0d55" alt="Tela Inicial" width="28%" />
  <img src="https://github.com/user-attachments/assets/790b8cd8-2f6d-41d4-ba87-801ab2388fab" alt="Tela Scanner" width="28%" />
  <img src="https://github.com/user-attachments/assets/2240afc9-6496-4685-9058-3ecd1399ab93" alt="Tela Resultado" width="28%" />
</p>

---
