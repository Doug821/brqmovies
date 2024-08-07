# BRQMovies

BRQMovies é um aplicativo móvel desenvolvido com Expo e React Native, projetado para navegação e obter informações sobre filmes. Este README fornece uma explicação detalhada sobre as bibliotecas e dependências usadas no projeto, seguindo o framework Diátaxis.

## Explicação

### Expo

**Expo** é o framework principal utilizado neste projeto devido à sua simplicidade e ao conjunto abrangente de ferramentas. Aqui está o motivo de cada biblioteca Expo escolhida:

- **`expo`**: O pacote principal do Expo, que inclui um conjunto de ferramentas e APIs para aprimorar a experiência de desenvolvimento.
- **`expo-router`**: Gerencia o roteamento e a navegação de maneira declarativa, simplificando a configuração e as transições de navegação baseadas em arquivos e estrutura de pastas.
- **`expo-secure-store`**: Armazena dados sensíveis de forma segura, como tokens de autenticação ou preferências do usuário, foi implementado para o gereciamento de sessões.

### Bibliotecas de Navegação e UI

Várias bibliotecas aprimoram a navegação e os componentes da interface do usuário:

- **`@react-navigation/native`**: Gerencia a navegação dentro do aplicativo, oferecendo uma solução flexível e poderosa para roteamento junto com a biblioteca `expo-router`.
- **`react-native-svg`**: Renderiza imagens SVG, permitindo gráficos escaláveis e independentes de resolução, sendo principalmente utilizado para ícones personalizados neste projeto.

### Ferramentas de Desenvolvimento e Teste

As ferramentas de desenvolvimento e teste garantem a qualidade e a manutenção do código, neste projeto foram utilizadas as seguintes bibliotecas:

- **`@testing-library/react-native`**: Foi utilizado para testes de componentes, garantindo que o aplicativo funcione conforme o esperado pois fornece utilitários para testar componentes do React Native, garantindo que funcionem conforme o esperado.
- **`jest`**: Este framework foi utilizado para testes de unidade, garantindo que as funções e componentes do aplicativo funcionem conforme o esperado junto com a biblioteca `@testing-library/react-native`.
- **`jest-expo`**: Integra o Jest com o Expo, permitindo testes dentro do ambiente Expo.
