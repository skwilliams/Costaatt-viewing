import { sql } from "@vercel/postgres";

async function getCampus() {
  const campus = await sql`SELECT * FROM campus;`;

  return response.json({ campus: campus.rows });
}


