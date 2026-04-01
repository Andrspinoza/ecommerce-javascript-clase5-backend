import { pool } from "../config/database.js";

export class ProductModel {

    static async getAll() {
        const {rows} = await pool.query("SELECT * FROM productos ORDER BY id ASC");
        return rows;
    }
 
    static async getById(id) {
        const {rows} = await pool.query("SELECT * FROM productos WHERE id = $1", [id]);
        return rows[0];

    }

    static async create(productData) {
        const {nombre, descripcion, precio, stock, imagen_url} = productData;
        const query = `
        INSERT INTO productos (nombre, descripcion, precio, stock, imagen_url)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
        `
        const {rows} = await pool.query(query, [nombre, descripcion, precio, stock, imagen_url]);
        return rows[0];
    }


    static async update(id, productData) {
        const {nombre, descripcion, precio, stock, imagen_url} = productData;
        const query = `
        UPDATE productos 
        SET nombre = $1, descripcion = $2, precio = $3, stock = $4, imagen_url = $5
        WHERE id = $6
        RETURNING *;
        `
        const {rows} = await pool.query(query, [nombre, descripcion, precio, stock, imagen_url, id]);
        return rows[0];
    }

    static async delete(id) {
        const query = `
        DELETE FROM productos 
        WHERE id = $1
        RETURNING *;
        `
        const {rows} = await pool.query(query, [id]);
        return rows[0];
    }
    
}

export default ProductModel;
