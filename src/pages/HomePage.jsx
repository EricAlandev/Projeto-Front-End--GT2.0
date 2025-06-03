import  Gallery  from "../components/Gallery";
import  {EspecialOffert, FeaturedCollections, FeaturedCollections2,ProdutosEmAlta } from "../components/ProductsInHigh";

const HomePage = () => {

    return(
        <>
        <Gallery 
        width="1440px"
        height="681px"
        radius="12px"
        className="mx-auto"
        contentScale={1.15}
        textSize="xl"
        />

        <FeaturedCollections />
        <FeaturedCollections2 />
        <ProdutosEmAlta />
        <EspecialOffert />
        </>
    )
}

export default HomePage;