# Sistema de Cadastro de Pessoas  

Aplicação simples para cadastro de pessoas com autenticação básica. Desenvolvida em **AngularJS 1.7.8** (frontend) e **C#** (backend), utilizando Tailwind CSS para estilização.  

---

### 🔑 Credenciais de Acesso  
- **Usuário**: `SISTEMA`  
- **Senha**: `candidato123`  

---

### 🛠️ Tecnologias Principais  
- **AngularJS 1.7.8**: Framework frontend para SPAs ([docs](https://angularjs.org/)).  
- **C# (.NET)**: Backend com endpoints RESTful ([docs](https://learn.microsoft.com/pt-br/dotnet/csharp/)).  
- **Tailwind CSS**: Estilização utilitária ([docs](https://tailwindcss.com/)).  
- **http-server**: Servidor estático para desenvolvimento ([npm](https://www.npmjs.com/package/http-server)).  

---

### ▶️ Como Executar  
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/sistema-cadastro-pessoas.git

# Backend (execute em um terminal separado)
cd sistema-cadastro-pessoas/backend
dotnet run  # Porta padrão: 5000-5001

# Frontend (execute em outro terminal)
cd ../frontend
http-server -c-1  # Porta padrão: 8080 (acesse http://localhost:8080)
```

### ⚙ Configuração da URL do Backend
O arquivo config.js no diretório frontend é responsável por definir a URL base do backend. Certifique-se de ajustar a variável apiUrl conforme necessário para apontar para o endereço correto do servidor backend.

### 📂 Estrutura do Projeto
```bash
├── backend/
│   ├── controllers/  # Lógica de autenticação e endpoints CRUD
│   └── models/       # Entidades e classes de domínio
├── frontend/
│   ├── app/
│   │   ├── controllers/  # AngularJS controllers (validação de formulários)
│   │   ├── services/     # Comunicação com API backend
│   │   └── templates/    # Views HTML com diretivas AngularJS
│   ├── index.html        # Ponto de entrada principal
│   └── config.js          # Arquivo de configuração para a URL do backend
```
### ⚠️ Observações importantes
- Credenciais hard-coded: As credenciais de login estão fixas no backend (usuário: SISTEMA, senha: candidato123). Isso é apenas para fins de demonstração.
- Backend primeiro: O backend deve estar em execução antes de iniciar o frontend para evitar erros de conexão.
- Cache desativado: Use http-server -c-1 no frontend para desativar o cache durante o desenvolvimento.
- Portas padrão: O backend roda na porta 5000 e o frontend na porta 8080, podendo ser alterado no arquivo config.js.