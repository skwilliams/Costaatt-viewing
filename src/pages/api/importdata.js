const { Client } = require("pg");
const fs = require("fs");
const csv = require("csv-parser");

async function importDataFromCSV(req, res) {
  // Create a PostgreSQL client instance
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false, // Only for development, not recommended for production
    },
  });

  try {
    // Connect to the PostgreSQL database
    await client.connect();

    // Read data from the CSV file
    fs.createReadStream("../../../public/data/campus.csv")
      .pipe(csv())
      .on("data", async (row) => {
        // Insert each row into the database
        const query =
          "INSERT INTO campus (campus_name, address, city, image) VALUES ($1, $2, $3, $4)";
        const values = [row.campus_name, row.address,row.city,row.image]; // Adjust column names as per your CSV structure
        await client.query(query, values);
      })
      .on("end", () => {
        console.log("Data import completed");
        res.status(200).send("Data import completed"); // Respond to the request
      });
  } catch (error) {
    // Handle any errors
    console.error("Error importing data:", error);
    res.status(500).send("Error importing data: " + error.message); // Respond with an error message
  } finally {
    // Close the database connection
    await client.end();
  }
}

export default importDataFromCSV;
