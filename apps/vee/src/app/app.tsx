import { Outlet } from '@tanstack/react-location';
import { Routes } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: 1000,
    },
    mutations: {
      onError: (error) => {
        console.log({ error });
      },
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <div className="flex pt-20 min-h-0 flex-1 gap-4 overflow-hidden h-full">
          <Outlet />
        </div>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
