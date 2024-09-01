"use client";

import dynamic from 'next/dynamic';

const AdminApp = dynamic(() => import('@/components/modules/AdminApp'), {
  ssr: false, // Отключение серверного рендеринга для этого компонента
});

export default function Index() {
  return (
    <div>
      <AdminApp />
    </div>
  );
}
