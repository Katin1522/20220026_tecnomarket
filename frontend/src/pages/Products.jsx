import { Link, useParams } from "react-router-dom";
import Titulo from "../components/Titulos";
import Button from "../components/Button";
import InputText from "../components/InputText";
import useDataProduct from "../hooks/Products/userFetchproducts";
import { useForm } from "react-hook-form";
import "../pages/Products.css";

const Products = () => {
  const { id } = useParams();
  const methods = useForm();
  const { register, handleSubmit, errors } = useDataProduct(methods);

  return (
    <div className="products-container">
      <form onSubmit={handleSubmit} className="products-form">
        <Titulo titulo="Product Information" />

        <div className="form-grid">
          <InputText
            type="text"
            name="producto"
            label="Product Name"
            placeholder="Enter product name"
            register={register}
            error={errors.producto?.message}
          />

          <InputText
            type="number"
            name="precio"
            label="Price"
            placeholder="Enter product price"
            register={register}
            error={errors.precio?.message}
          />

          <InputText
            type="number"
            name="stock"
            label="Stock"
            placeholder="Enter stock amount"
            register={register}
            error={errors.stock?.message}
          />
        </div>

        <div className="button-group">
          <Button
            type="submit"
            text={id ? "Edit Product" : "Save Product"}
            className="button"
          />
        </div>
      </form>
    </div>
  );
};

export default Products;
