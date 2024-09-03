"use client";

import dynamic from 'next/dynamic';

const AdminApp = dynamic(() => import('@/components/modules/AdminApp'), {
  ssr: false,
});

export default function Index() {
  return (
    <div>
      <AdminApp />
    </div>
  );
}
