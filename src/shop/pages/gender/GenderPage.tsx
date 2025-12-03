import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";
import { UseProducts } from "@/shop/hooks/UseProducts";
import { useParams } from "react-router";

export const GenderPage = () => {
  const { gender } = useParams();
  const { data } = UseProducts();

  const genderLabel =
    gender === "men" ? "hombres" : gender === "women" ? "mujeres" : "niños";
  return (
    <>
      <CustomJumbotron title={`Productos para ${genderLabel}`} />
      <ProductsGrid products={data?.products || []} />
      <CustomPagination totalPages={data?.pages || 1} />
    </>
  );
};
