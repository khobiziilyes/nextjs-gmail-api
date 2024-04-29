import postgres from "postgres";

const connectionString = process.env.DATABASE_URL!;
const sql = postgres(connectionString);

export default sql;

/*
  enable the "uuid-ossp" extension
  create extension "uuid-ossp" with schema extensions;
*/

/*
 -- Create the table
 CREATE TABLE users (
   uuid UUID DEFAULT gen_random_uuid(),
   id_token text,
   refresh_token text,
   access_token text,
   expiry_date text,
   token_type text,
   scope text
 );

  -- Create the primary key

  ALTER TABLE users ADD PRIMARY KEY (uuid);
*/
