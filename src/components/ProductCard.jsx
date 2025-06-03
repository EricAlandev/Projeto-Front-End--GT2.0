import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, name, image, price, priceDiscount } = product;

  return (
    <Link to={`/produto/${id}`}>
      <div className="relative bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
        {priceDiscount && (
          <div className="absolute top-4 left-4 bg-[#E7FF86] text-[#474747] text-xs font-bold px-2 py-1 rounded">
            {Math.round(((price - priceDiscount) / price) * 100)}% OFF
          </div>
        )}

        <div className="flex justify-center">
          <img
            src={image}
            alt={name}
            className="object-contain"
            style={{ width: 292, height: 321 }}
          />
        </div>

        <h3 className="text-base text-[#474747] font-semibold mb-1">{name}</h3>

        <div className="flex items-center gap-2">
          {priceDiscount ? (
            <>
              <span className="text-[#1F1F1F] font-bold text-[24px]">
                R$ {priceDiscount.toFixed(2)}
              </span>
              <span className="line-through text-[#8F8F8F] text-[24px]">
                R$ {price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-[#1F1F1F] font-bold text-[24px]">
              R$ {price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
