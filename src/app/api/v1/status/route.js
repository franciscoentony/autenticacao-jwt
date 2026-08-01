import { NextResponse } from "next/server";
import database from "infra/database.js";

export async function GET() {
  const result = await database.query("SELECT 1 + 1 as soma;");
  console.log(result.rows);
  return NextResponse.json({ chave: "Valor" });
}
