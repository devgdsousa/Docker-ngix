
# Aplicação Dockerizada com NGINX e Node.js

## Objetivo

O objetivo deste projeto é criar uma aplicação dockerizada com NGINX como servidor frontend, servindo arquivos estáticos e atuando como proxy reverso, enquanto um backend simples em Node.js responde a requisições HTTP (API REST). A comunicação entre o frontend e o backend é feita via Docker Compose, que define os contêineres e suas redes.

## Estrutura do Projeto

```bash
.
├── backend
│   ├── app.js
│   ├── package.json
│   ├── Dockerfile
├── frontend
│   ├── html
│   └──  index.html
│   ├── nginx.conf
│   ├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Descrição 

 Aplicação Node.js simples que responde com um JSON a uma requisição GET.
- **backend/package.json**: Define as dependências do backend (Express e CORS).
- **backend/Dockerfile**: Dockerfile para criar a imagem do backend.
- **frontend/index.html**: Página HTML servida pelo NGINX, com JavaScript que faz a requisição para o backend.
- **frontend/nginx.conf**: Configuração personalizada do NGINX para servir o frontend e funcionar como proxy reverso para o backend.
- **frontend/Dockerfile**: Dockerfile para criar a imagem do NGINX.
- **docker-compose.yml**: Arquivo que define os serviços do frontend (NGINX) e backend (Node.js), além das redes necessárias para a comunicação entre eles.

## Backend (Node.js)

O backend é uma aplicação simples que usa o framework Express para responder a requisições GET na rota `/data`, retornando uma mensagem em formato JSON.


### Dockerfile do Backend

Este Dockerfile define a imagem Docker para o backend, instalando as dependências necessárias e expondo a porta 3000:


### package.json

Este arquivo lista as dependências necessárias para o backend (Express e CORS):



## Frontend (NGINX)

O frontend consiste em uma página HTML que faz uma requisição ao backend via JavaScript (usando `fetch`). O NGINX serve esta página e também atua como um proxy reverso para o backend.


### NGINX Configuration (`nginx.conf`)

O NGINX está configurado para servir o arquivo `index.html` e redirecionar todas as requisições feitas ao caminho `/api/` para o backend.



### Dockerfile do Frontend

Este Dockerfile define a imagem Docker para o frontend (NGINX), copiando o arquivo de configuração e os arquivos estáticos.







## Como Rodar o Projeto

1. **Clone o repositório**:
   ```bash
   git https://github.com/devgdsousa/Docker-ngix
   cd Docker-ngix
   ```

2. **Construa e inicie os contêineres**:
   ```bash
   docker-compose up --build
   ```

3. **Acesse a aplicação**:
   - Abra o navegador e vá para `http://localhost`. A página HTML será carregada.
   - Clique no botão "Carregar Mensagem do Backend" para buscar a mensagem da API do backend.

4. **Parar os contêineres**:
   ```bash
   docker-compose down
   ```




## Publicação no Docker Hub

1. **Faça login no Docker Hub**:
   ```bash
   docker login
   ```

2. **Crie as imagens do backend e frontend**:
   ```bash
   docker-compose build
   ```

3. **Faça o push das imagens**:
   ```bash
   docker tag <frontend_image_id> <dockerhub_username>/frontend
   docker push <dockerhub_username>/frontend

   docker tag <backend_image_id> <dockerhub_username>/backend
   docker push <dockerhub_username>/backend
   ```

4. **Referencie suas imagens no Docker Hub**.



