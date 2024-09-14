import { Outlet } from '@tanstack/react-location';
import { Routes } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: 1000 * 60 * 5, // 5 minutes
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
        <div className="pt-30 min-h-screen min-w-screen flex-1 gap-4 overflow-hidden">
          <Outlet />
        </div>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
