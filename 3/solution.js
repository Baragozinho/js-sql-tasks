import postgres from "postgres";

const config = {
  host: "127.0.0.1",
  user: "postgres",
  password: "",
  port: 5432,
};

export default async (book) => {
  // BEGIN (write your solution here)
  const sql = postgres({
    ...config,
    max: 10,
  });

  try {
    await sql`
      INSERT INTO books (title, author) 
      VALUES (${book.title}, ${book.author})
    `;
  } finally {
    await sql.end();
  }
  // END
};
