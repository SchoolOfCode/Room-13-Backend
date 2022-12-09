import { pool } from "../db/index.js"


export async function getTodos() {
    const data = await pool.query("SELECT * FROM todos;");
    return data.rows;
  }

  export async function createTodos(todo) {
    await pool.query(
      `INSERT INTO todos (to_do) VALUES ($1)`,
      [todo.to_do]
    );
    const result = await pool.query(`SELECT * FROM todos`);
    const resultResource = result.rows;
    return resultResource[resultResource.length - 1];
  }