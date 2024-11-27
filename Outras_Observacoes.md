# Script de criação da estrutura do projeto

    #!/bin/bash

    # Script de configuração do projeto
    # Objetivo: Criar a estrutura do projeto e configurar dependências básicas

    # Nome do projeto
    PROJECT_NAME="meu_projeto_flexbox_jquery"

    # Criar diretório do projeto
    echo "Criando diretório do projeto: $PROJECT_NAME"
    mkdir -p $PROJECT_NAME

    # Navegar para o diretório do projeto
    cd $PROJECT_NAME || exit

    # Criar estrutura de diretórios
    echo "Criando estrutura de diretórios..."
    mkdir -p assets/{css,js,images}
    mkdir -p assets/plugins
    mkdir -p dist

    # Criar arquivos principais
    echo "Criando arquivos principais..."
    touch index.html
    touch assets/css/styles.css
    touch assets/js/script.js

    # Adicionar template básico ao index.html
    cat <<EOL > index.html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto Flexbox e jQuery</title>
    <link rel="stylesheet" href="assets/css/styles.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
    </head>
    <body>
    <header>
        <h1>Bem-vindo ao Projeto Flexbox e jQuery</h1>
    </header>
    <main>
        <!-- Conteúdo principal -->
    </main>
    <footer>
        <p>&copy; 2024 Meu Projeto</p>
    </footer>
    <script src="assets/js/script.js"></script>
    </body>
    </html>
    EOL

    # Adicionar exemplo inicial no CSS
    cat <<EOL > assets/css/styles.css
    /* Estilos principais do projeto */
    body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    }
    EOL

    # Adicionar exemplo inicial no JS
    cat <<EOL > assets/js/script.js
    // JavaScript principal do projeto
    $(document).ready(function () {
    console.log('jQuery e plugins carregados com sucesso!');
    });
    EOL

    # Iniciar repositório Git (opcional)
    echo "Inicializando repositório Git..."
    git init
    echo "node_modules/" > .gitignore

    # Instalar dependências opcionais (se Node.js estiver disponível)
    if command -v npm &> /dev/null
    then
    echo "Instalando dependências opcionais com npm..."
    npm init -y
    npm install slick-carousel
    npm install jquery
    mkdir -p node_modules/slick-carousel/slick
    cp node_modules/slick-carousel/slick/slick.min.css assets/plugins/slick.min.css
    cp node_modules/slick-carousel/slick/slick.min.js assets/plugins/slick.min.js
    else
    echo "npm não encontrado. Dependências opcionais não foram instaladas."
    fi

    # Conclusão
    echo "Estrutura do projeto criada com sucesso em $PROJECT_NAME!"

## Seções Específicas (Séries, Filmes, Documentários)

Inclusão de Backgrounds Individuais

As seções agora possuem imagens de fundo exclusivas e dinâmicas.

Adicionadas propriedades background-size: contain e background-attachment: fixed para melhorar a exibição em telas maiores.

Antigo: Não existia.

Atual:

    #series {
        background: url('../images/backgrounds/series-background.jpg') no-repeat center center;
        background-size: contain;
        background-attachment: fixed;
        height: 40vh;
        padding: 50px 20px;
    }

    #filmes {
        background: url('../images/backgrounds/movies-background.jpg') no-repeat center center;
        background-size: contain;
        background-attachment: fixed;
        height: 40vh;
        padding: 50px 20px;
    }

    #documentarios {
        background: url('../images/backgrounds/documentaries-background.jpg') no-repeat center center;
        background-size: contain;
        background-attachment: fixed;
        height: 40vh;
        padding: 50px 20px;
    }

5. Botão "Voltar ao Início"

Implementação de Botões Individuais por Seção

Foram adicionados botões individuais em cada seção, permitindo que o usuário volte ao topo com facilidade.

Antigo: Não existia.

Atual:

    .botao-voltar {
        background-color: var(--amarelo);
        color: var(--preto);
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 15px;
    }

    .botao-voltar:hover {
        background-color: var(--vermelho);
        color: white;
    }

6. Carrossel

Melhorias na Exibição de Imagens

Foi mantida a integração do carrossel com o Slick, mas com ajustes para responsividade e tamanho das imagens.

Antigo:

    .box-filme {
        height: 100%;
        width: 100%;
        display: block;
        cursor: pointer;
    }

Atual:

    .carousel img {
        width: auto;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
    }

7. Responsividade

As seções e botões agora são adaptados para dispositivos menores, melhorando a experiência do usuário.

Adicionado:

    @media screen and (max-width: 700px) {
        .filme-principal {
            height: 50vh;
            text-align: center;
        }

        .botao {
            width: 100%;
            margin: 5px 0;
        }

        .secoes {
            height: auto;
            padding: 50px 20px;
        }
    }
