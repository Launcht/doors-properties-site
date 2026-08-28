
import React from 'react';
import { useSeo } from '@/lib/seo';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';

const Index: React.FC = () => {
  useSeo({ title: 'Luxury Property Garden Route | DOORS Private Brokerage', description: "DOORS is a private property brokerage for the Garden Route's finest homes, Mossel Bay to Plettenberg Bay. Access by introduction, never by advertising.", path: '/' });

  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
};

export default Index;
