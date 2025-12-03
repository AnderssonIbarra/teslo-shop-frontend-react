import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";
import { UseProducts } from "@/shop/hooks/UseProducts";

export const HomePage = () => {
  const { data } = UseProducts();

  if (data?.count !== 0) {
    return (
      <>
        <CustomJumbotron title="Todos los productos" />
        <ProductsGrid products={data?.products || []} />
        <CustomPagination totalPages={data?.pages || 1} />
      </>
    );
  }
  return (
    <CustomJumbotron
      title="Producto no encontrado"
      subTitle="No se encontró el producto."
    />
  );
};
