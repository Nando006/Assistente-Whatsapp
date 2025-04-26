# Assistente WhatsApp

![Status do Projeto](https://img.shields.io/badge/Status-Precisa%20de%20Manutenção-yellow)

Um assistente virtual inteligente para WhatsApp que utiliza IA generativa para interagir com usuários.

## 🚀 Funcionalidades

- **Assistente Virtual**: Integração com a IA do Google (Gemini 1.5 Pro) para responder perguntas e interagir com usuários
- **Menu Interativo**: Sistema de menu para apresentação de opções como portfólio, LinkedIn e GitHub
- **Gerenciamento de Usuários**: Rastreamento e persistência de dados dos usuários
- **Sistema de Status**: Controle do estado do assistente (ativado/desativado)
- **QR Code**: Geração e exibição de QR Code para autenticação do WhatsApp
- **Docker**: Containerização para fácil implantação

## 🛠️ Tecnologias

- **Node.js**: Ambiente de execução JavaScript
- **TypeScript**: Tipagem estática para JavaScript
- **WPPConnect**: Biblioteca para integração com o WhatsApp
- **Google Generative AI (Gemini)**: Modelo de IA para processamento de linguagem natural
- **Express**: Framework web para criação da API e servidor HTTP
- **Docker**: Containerização para implantação simplificada
- **dotenv**: Gerenciamento de variáveis de ambiente

## 📋 Pré-requisitos

- Node.js 20 ou superior
- Chave de API do Google AI Studio
- Docker (opcional, para containerização)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/Assistente-Whatsapp.git
cd Assistente-Whatsapp
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```
STUDIO_APIKEY=sua_chave_do_google_ai_studio
```

4. Inicie o aplicativo:
```bash
npm run dev
```

## 🐳 Usando Docker

Para executar com Docker:

```bash
docker-compose up -d
```

## 🧠 Como Funciona

O assistente monitora mensagens recebidas no WhatsApp e responde utilizando a IA do Google Gemini. Ele mantém um histórico de conversas para contextualizar as respostas e oferece um menu interativo para os usuários.

O administrador pode controlar o estado do assistente (ativado/desativado) enviando comandos específicos.

## 👨‍💻 Desenvolvido por

- [Fernando](https://github.com/seu-usuario)
- [Portfolio](https://FernandoSergio.dev.br)

## 📄 Licença

Este projeto está sob a licença ISC - veja o arquivo [LICENSE](LICENSE) para detalhes.
