FROM node:20-alpine3.18

# Variáveis de ambiente
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
   PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Diretório de trabalho
WORKDIR /home/node/app

# Copiar arquivos de configuração do npm
COPY package*.json ./

# Instalar dependências do sistema
RUN apk add --no-cache chromium

# Instalar dependências do projeto
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta
EXPOSE 21465

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
