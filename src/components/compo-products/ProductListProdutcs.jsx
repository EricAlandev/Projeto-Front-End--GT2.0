import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../Section';
import ProductListing from '../ProductListing';
import FilterGroup from './FilterGroup';
import Products from '../products/ListProducts';

const ProductListingPage = () => {
  const allProducts = Products.map((product) => ({
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    priceDiscount: product.priceDiscount,
    brand: product.brand,
    gender: product.gender,
    condition: product.condition,
    category: product.category,
  }));

  // Hook para pegar a query string da URL
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  const searchQuery = query.get('search')?.toLowerCase() || '';

  const [filters, setFilters] = useState({
    brand: [],
    gender: [],
    condition: [],
    category: [],
  });

  const [sortOrder, setSortOrder] = useState('');

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFilters((prev) => {
      if (type === 'radio') {
        return { ...prev, [name]: [value] };
      }

      const values = new Set(prev[name]);
      checked ? values.add(value) : values.delete(value);
      return { ...prev, [name]: Array.from(values) };
    });
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredProducts = allProducts
    .filter((product) => {
      const { brand, gender, condition, category } = filters;
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery);

      return (
        matchesSearch &&
        (brand.length === 0 || brand.includes(product.brand)) &&
        (gender.length === 0 || gender.includes(product.gender)) &&
        (condition.length === 0 || condition.includes(product.condition)) &&
        (category.length === 0 || category.includes(product.category))
      );
    })
    .sort((a, b) => {
      const priceA = a.priceDiscount ?? a.price;
      const priceB = b.priceDiscount ?? b.price;

      if (sortOrder === 'asc') return priceA - priceB;
      if (sortOrder === 'desc') return priceB - priceA;
      return 0;
    });

  return (
    <Section>
      <div className="flex ml-[100px]">
        {/* Sidebar de Filtros */}
        <aside className="w-[250px] flex-shrink-0 mt-8 ml-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-semibold text-[#474747]">
              Filtrar por
            </h2>

            <FilterGroup
              title="Marca"
              name="brand"
              options={[
                { label: 'Adidas', value: 'Adidas' },
                { label: 'Balenciaga', value: 'Balenciaga' },
                { label: 'K-Swiss', value: 'K-Swiss' },
                { label: 'Nike', value: 'Nike' },
                { label: 'Puma', value: 'Puma' },
              ]}
              onChange={handleFilterChange}
              selectedValues={filters.brand}
            />

            <FilterGroup
              title="Categoria"
              name="category"
              options={[
                { label: 'Esporte e lazer', value: 'Esporte e lazer' },
                { label: 'Casual', value: 'Casual' },
                { label: 'Utilitário', value: 'Utilitário' },
                { label: 'Corrida', value: 'Corrida' },
              ]}
              onChange={handleFilterChange}
              selectedValues={filters.category}
            />

            <FilterGroup
              title="Gênero"
              name="gender"
              options={[
                { label: 'Masculino', value: 'Masculino' },
                { label: 'Feminino', value: 'Feminino' },
                { label: 'Unissex', value: 'Unissex' },
              ]}
              onChange={handleFilterChange}
              selectedValues={filters.gender}
            />

            <FilterGroup
              title="Estado"
              name="condition"
              options={[
                { label: 'Novo', value: 'Novo' },
                { label: 'Usado', value: 'Usado' },
              ]}
              onChange={handleFilterChange}
              selectedValues={filters.condition}
            />
          </div>
        </aside>

        {/* Conteúdo da Página */}
        <main className="flex-1 flex flex-col gap-4">
          {/* Ordenação */}
          <div className="flex justify-end">
            <div className="flex items-center gap-2 mr-[40px] mb-[10px]">
              <label
                htmlFor="sort"
                className="text-xs font-semibold text-[#8F8F8F]"
              >
                Ordenar por:
              </label>
              <select
                id="sort"
                className="border border-[#E8E8E8] rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F1F1F]"
                value={sortOrder}
                onChange={handleSortChange}
              >
                <option value="">mais relevantes</option>
                <option value="asc">menor preço</option>
                <option value="desc">maior preço</option>
              </select>
            </div>
          </div>

          {/* Listagem de Produtos */}
          <ProductListing products={filteredProducts} />
        </main>
      </div>
    </Section>
  );
};

export default ProductListingPage;
