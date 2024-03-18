'use client'

import Image from "next/image";
import { useRouter } from 'next/router';

type UserDetailsParams = {
  params: {
    id: string
  }
}

export default function UserDetails({ params }: UserDetailsParams) {
  const { id } = params;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Acessando usuário por id {id}</p>
    </main>
  );
}
