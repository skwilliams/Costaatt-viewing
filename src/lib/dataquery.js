
import {  sql} from "@vercel/postgres";

export async function fetchCampus() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql`SELECT * FROM campus`;

    // console.log('Data fetch completed after 3 seconds.');
     console.log(data.rows);
    return data.rows;
   

  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch campus data.");
  }
}

export async function fetchSchools() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql`SELECT * FROM campus`;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch campus data.");
  }
}
