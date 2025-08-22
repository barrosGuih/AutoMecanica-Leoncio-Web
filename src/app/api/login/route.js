import { NextResponse } from 'next/server';

const users = [
  { email: 'teste@gmail.com', password: '12345678' }
];

export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Para teste, retornamos apenas um token simples
    return NextResponse.json({ success: true, token: '123abc' });
  } else {
    return NextResponse.json({ success: false, message: 'Email ou senha incorretos' });
  }
}