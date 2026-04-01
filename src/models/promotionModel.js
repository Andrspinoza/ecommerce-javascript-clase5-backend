import { pool } from "../config/database.js";

export class PromotionModel {

    static async getAll() {
        const {rows} = await pool.query("SELECT * FROM promociones ORDER BY id ASC");
        return rows;
    }

    static async getById(id) {
        const {rows} = await pool.query("SELECT * FROM promociones WHERE id = $1", [id]);
        return rows[0];
    }

    static async create(promotionData) {
        const {titulo, descripcion, descuento_porcentaje, fecha_inicio, fecha_fin, activo} = promotionData;
        const query = `
        INSERT INTO promociones (titulo, descripcion, descuento_porcentaje, fecha_inicio, fecha_fin, activo)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
        `
        const {rows} = await pool.query(query, [titulo, descripcion, descuento_porcentaje, fecha_inicio, fecha_fin, activo]);
        return rows[0];
    }

    static async update(id, promotionData) {
        const {titulo, descripcion, descuento_porcentaje, fecha_inicio, fecha_fin, activo} = promotionData;
        const query = `
        UPDATE promociones 
        SET titulo = $1, descripcion = $2, descuento_porcentaje = $3, fecha_inicio = $4, fecha_fin = $5, activo = $6
        WHERE id = $7
        RETURNING *;
        `
        const {rows} = await pool.query(query, [titulo, descripcion, descuento_porcentaje, fecha_inicio, fecha_fin, activo, id]);
        return rows[0];
    }

    static async delete(id) {
        const query = `
        DELETE FROM promociones 
        WHERE id = $1
        RETURNING *;
        `
        const {rows} = await pool.query(query, [id]);
        return rows[0];
    }
    
}

export default PromotionModel;