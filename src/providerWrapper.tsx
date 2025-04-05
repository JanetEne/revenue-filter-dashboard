import { AppStore, store } from '@/lib/store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore | undefined>(undefined);
  const persistorRef = useRef<any | undefined>(undefined);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store;
    persistorRef.current = persistStore(storeRef.current);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={storeRef.current}>
        <PersistGate loading={null} persistor={persistorRef.current}>
          {children}
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default ProviderWrapper;