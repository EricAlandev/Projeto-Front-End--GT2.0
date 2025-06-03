import { Link, useParams } from "react-router-dom";
import Products from "../components/products/ListProducts";
import ProductGallery from "../components/ProductGallery";
import BuyBox from "../components/compoo-product-view/BuyBox";
import ProductCard from "../components/ProductCard";

export default function ProductViewPage() {
  const { id } = useParams();

  console.log("id da URL:", id);
  const product = Products.find(p => p.id === id);
  console.log("produto encontrado:", product);

  const getRecommendedProducts = () => {
    return Products
      .filter(p => p.id !== id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  };

  if (!product) {
    return <div className="text-center py-20">Produto não encontrado</div>;
  }

  return (
    <div className="px-4 md:px-8 py-10 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 mb-16">
        <div className="md:w-1/2">
          <ProductGallery 
            images={product.images}
            width="100%"
            height="400px"
            radius="8px"
          />
        </div>
        
        <div className="md:w-1/2">
          <BuyBox
            name={product.name}
            stars={product.stars || 0}
            rating={product.rating || 0}
            price={product.price || 0}
            priceDiscount={product.priceDiscount}
            description={product.description}
            sizes={product.sizes}
            colors={product.colors}
            reference={product.reference}
          />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6">Você também pode gostar</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {getRecommendedProducts().map(product => (
            <Link 
              key={product.id} 
              to={`/produto/${product.id}`} 
              className="transition-all duration-300 hover:scale-[1.03] hover:shadow-md hover:z-10"
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
