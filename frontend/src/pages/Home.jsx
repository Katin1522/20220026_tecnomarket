import { Link } from "react-router-dom";
import Titulo from "../components/Titulo";
import Button from "../components/Button";
import useDataProduct from "../hooks/Products/userFetchproducts";
import "../pages/Home.css"; 

const ProductList = () => {
  const { data: products = [] } = useDataProduct(); 

  return (
    <div className="product-list-container">
      <div className="product-list-content">
        <Link to="/products" className="product-list-add-btn">
          Agregar producto
        </Link>

        <Titulo titulo="Product Information" />

        <p className="text-gray-600 text-sm mb-4 text-center">
          Lista de productos registrados.
        </p>

        <div className="overflow-x-auto">
          <table className="product-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.producto}</td>
                  <td>{product.categoria}</td>
                  <td>${product.precio}</td>
                  <td>{product.stock}</td>
                  <td>
                    <div className="product-action-buttons">
                      <Link to={`/products/${product.id}`}>
                        <Button text="Editar" />
                      </Link>
                      <Button text="Eliminar" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
