
# Projeto Agenda

Um sistema de agendamento desenvolvido com **Spring Boot**, **Angular**, e banco de dados **H2** para facilitar a organização e produtividade.

## 🛠 Tecnologias Utilizadas
- **Frontend:** Angular + TypeScript
- **Backend:** Java 17 com Spring Boot
- **Banco de Dados:** H2 (em memória)

## 📦 Instalação e Execução

### Pré-requisitos
- **Git** instalado.
- **Java 17** ou superior.
- **Node.js** e **npm** (ou Yarn).
- IDE com suporte para projetos Java (ex: IntelliJ ou Eclipse).

### Passos para Configuração

#### 1. Clone o Repositório
```bash
git clone https://github.com/PontesDiogo/Projeto-Agenda.git
```
Acesse a branch oficial:
```bash
git checkout working
```

#### 2. Configuração do Backend
1. Navegue até a pasta do backend:
   ```bash
   cd backend
   ```
2. Compile o projeto usando Maven:
   ```bash
   ./mvnw clean install
   ```
3. Inicie o servidor:
   ```bash
   ./mvnw spring-boot:run
   ```
4. O backend estará disponível em [http://localhost:8080](http://localhost:8080).

#### 3. Configuração do Frontend
1. Navegue até a pasta do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor Angular:
   ```bash
   ng serve
   ```
4. Acesse o frontend em [http://localhost:4200](http://localhost:4200).

#### 4. Banco de Dados
O projeto utiliza o H2 Database configurado no modo **em memória**. Para acessar o console do H2:
- URL: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
- JDBC URL: `jdbc:h2:mem:testdb`
- Usuário: `sa`
- Senha: (deixe em branco)

## 🚀 Como Usar
1. Acesse o frontend em `http://localhost:4200`.
2. Realize operações de agendamento conforme as funcionalidades disponíveis.

## 🛡 Contribuição
Sinta-se à vontade para abrir issues ou enviar pull requests.

---

💡 **Dúvidas?** Entre em contato através do [repositório no GitHub](https://github.com/PontesDiogo/Projeto-Agenda).
```

Caso precise de mais detalhes ou instruções adicionais, é só avisar! 😊
