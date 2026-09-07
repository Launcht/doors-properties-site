
import React from 'react';
import { useSeo } from '@/lib/seo';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';

const Index: React.FC = () => {
  useSeo({ title: 'Garden Route Estate Agents | DOORS', description: "Selling a distinctive Garden Route home? DOORS agrees the route to market with you, private, limited or open, and represents it to that standard. Mossel Bay to Plettenberg Bay.", path: '/' });

  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
};

export default Index;
