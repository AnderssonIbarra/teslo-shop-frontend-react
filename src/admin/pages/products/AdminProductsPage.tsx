import { PencilIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";

import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UseProducts } from "@/shop/hooks/UseProducts";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { currencyFormatter } from "@/lib/currency-formatter";

export const AdminProductsPage = () => {
  const { data, isLoading } = UseProducts();

  if (isLoading) return <CustomFullScreenLoading />;

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Productos"
          subtitle="Aquí puedes ver y administrar tus productos"
        />

        <div className="flex justify-end mb-10 gap-4">
          <Link to="/admin/products/new">
            <Button>
              <PlusIcon />
              Nuevo producto
            </Button>
          </Link>
        </div>
      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.products.map((product) => (
            <TableRow key={product.id} className="items-center justify-center">
              <TableCell>
                <img
                  src={product.images[0]}
                  alt="Product"
                  className="w-20 h-20 rounded-md object-cover"
                />
              </TableCell>
              <TableCell>
                <Link
                  to={`/admin/products/${product.id}`}
                  className="hover:text-blue-500 underline"
                >
                  {product.title}
                </Link>
              </TableCell>
              <TableCell>{currencyFormatter(product.price)}</TableCell>
              <TableCell>{product.gender}</TableCell>
              <TableCell>{product.stock} stock</TableCell>
              <TableCell>{product.sizes.join(", ")}</TableCell>
              <TableCell>
                <Link to={`/admin/products/${product.id}`}>
                  <PencilIcon className="w-4 h-4 text-blue-500" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CustomPagination totalPages={data?.pages || 1} />
    </>
  );
};
