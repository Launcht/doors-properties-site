
import React from 'react';
import { useSeo } from '@/lib/seo';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';

const Index: React.FC = () => {
  useSeo({ title: 'Garden Route Property | DOORS', description: "DOORS represents distinctive Garden Route homes, Mossel Bay to Plettenberg Bay. Private, limited or open marketing, agreed with the seller for each property.", path: '/' });

  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
};

export default Index;
