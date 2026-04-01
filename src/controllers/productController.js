import ProductModel from "../models/productModel.js";




const productController = {

    getAllProducts: async (req, res) => {
        try {
            const products = await ProductModel.getAll();
            res.json(products);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error al obtener los productos" });
        }
    },

    getProductById: async (req, res) => {
        try {
            const product = await ProductModel.getById(req.params.id);
            res.json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error al obtener el producto" });
        }
    },

    createProduct: async (req, res) => {
        try {
            const product = await ProductModel.create(req.body);
            res.json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error al crear el producto" });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const product = await ProductModel.update(req.params.id, req.body);
            res.json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error al actualizar el producto" });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const product = await ProductModel.delete(req.params.id);
            res.json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error al eliminar el producto" });
        }
    }

}

export default productController;
