import { deleteProductAPI, updateProductAPI } from "../../utils/apiUrls";

const useProductAction = (getProducts) => {
  const deleteProduct = async (productId) => {
    try {
      await deleteProductAPI(productId);
      getProducts(); // Actualiza la lista después de eliminar
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  const handleUpdateProduct = async (productId, updatedData) => {
    try {
      await updateProductAPI(productId, updatedData);
      getProducts(); // Actualiza la lista después de modificar
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  return { deleteProduct, handleUpdateProduct };
};

export default useProductAction;
