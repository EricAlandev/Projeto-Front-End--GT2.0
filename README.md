Projeto Front-End GT 2.0

Este projeto é uma aplicação front-end desenvolvida com React JS via Vite e Tailwind. O intúito desse projeto em si, é testar o que o aluno aprendeu, por em prático tudo aquilo que ele viu durante esses 3 meses (Atualmente ainda não acabou o curo, mas o projeto em si, já foi liberado pra termino).

--- Explicaçãodos arquivos e pastas ---

📂public/ Esta pasta contém arquivos estáticos que serão copiados para o diretório final na build, e podem ser acessados diretamente pelo navegador. Geralmente tem:

index.html — arquivo HTML principal da aplicação, que carrega o app React.

📂 assets/ As imagens deste projeto são públicas. Está página está dentro da pasta public. Contém as imagens do projeto.

📂src/ Aqui está todo o código-fonte da aplicação, dividido em subpastas para facilitar a organização:

📂components/ Contém componentes React reutilizáveis, que são pedaços da interface, como botões, cards, menus, etc. Esses componentes geralmente são usados em várias partes da aplicação. Dentro de componentes, possui algumas pastas e arquivos.

Estrutura da pasta -- components/-- e suas funções

📂compo-footer/ Armazena os componentes relacionados ao Footer do site, como textos, links, redes sociais ou informações institucionais.

📂compo-header/ Contém os componentes do Header, como a logo, barra de pesquisa, menu de navegação e atalhos como o carrinho.

📂compo-products/ Agrupa componenterelacionados a filtragem de produtos e sua listagem nas respectivas páginas. Por exemplo, ao entrar no /produtos, ocorrerá a renderização dos produtos via 'ProductListProdutcs.jsx' e filtragem via FilterGroup.jsx.

📂compo-product-view/ É a pasta para os componentes da página de visualização de produto.A página que abre os detalhes completos de um produto. . Buybox.jsx é onde renderiza a questão de detalhes sobre o produto, suas avaliações, botão de compra, descrição e afins.

📂products/ é apenas onde possui os produtos da página. . ListProducts.jsx --- mostra os detalhes dos produtos. Suas características giram em torno do esqueleto dos respectivos arquivos.

{ id - Identificador único do produto, name- Nome do produto,image-Imagem principal do produto, price-Preço original do produto, priceDiscount-Preço promocional com desconto, reference-Código de referência do produto, usado para controle interno ou consulta., stars-Avaliação média do produto, rating-Quantidade total de avaliações feitas no produto, description-Descrição curta do produto, images- Array com imagens adicionais do produto. Imagens estas que estarão sendo exibidas no producviewpage e são clicáveis. Estas imagens são as imagens que ficarão ao lado do buybox, colors-Cores disponíveis,

//Estes abaixos são os que serão usados pelos filtros.// brand-Marca do produto, category-Categoria do produto, gender-Gênero indicado, condition-Condição do produto }

Além das páginas tem alguns arquivos avulsos. //Arquivos JSX// . Gallery. É o slider da homepage

.ProductCard É o esqueleto usado para cada produto

.ProductGallery É onde está renderizando as imagens que estarão ao lado do buybox

.ProductListing Está renderizando os products card

.ProductsInHigh Contém os paramêtros dentro da HomePage.

1 - FeaturedCollections -> 3 quadrantes pondo coleções em destaque 2 - FeaturedCollections2 -> Oferta especial em destaque. Algo especial, como no caso é uma edição limitada que foi lançada. 3 - ProdutosEmAlta -> São os produtos em alta, produtos que venderam mais

.Section.jsx é o esqueleto usado para renderizar os quadrantes do site de forma geral. Nele tem 1 - O tittle, sendo o título. 2- O TiitleAlign, que vem como padrão left entãos e você não utiliza-lo, dará como left, caso queirá, ele tem a opção de center 3 - link, caso queira por um link, ele deixará você modificar o href 4 - children, o conteúdo do bloco em si.

📂pages/ Contém componentes que representam páginas ou rotas completas da aplicação. Cada arquivo ou pasta aqui geralmente corresponde a uma página que o usuário visita.

📂styles/ Contém arquivos CSS, SCSS, ou arquivos de estilização para a aplicação. Pode ser usado para definir temas, cores, layouts e estilos globais.
