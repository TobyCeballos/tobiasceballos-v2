// app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, message, plan } = await request.json();
  
  console.log("Datos recibidos:", { name, email, message, plan });

  // Aquí puedes hacer cualquier procesamiento adicional que necesites, como enviar un correo o guardar en una base de datos
  
  return NextResponse.json({ message: "Formulario recibido con éxito" }, { status: 200 });
}
