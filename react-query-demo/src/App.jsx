import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // feel free to tweak these to see caching behavior
      staleTime: 60 * 1000,        // 1 min: data is "fresh" (no refetch) for this long
      gcTime: 5 * 60 * 1000,       // 5 min cache garbage-collect time (was cacheTime)
      refetchOnWindowFocus: false, // avoid surprise refetches when switching tabs
    },
  },
});

export default function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 16 }}>
        <h1>React Query Demo</h1>

        {/* Toggle to mount/unmount the posts component to prove caching */}
        <button onClick={() => setShowPosts((s) => !s)}>
          {showPosts ? "Hide Posts (unmount)" : "Show Posts (mount)"}
        </button>

        <hr />

        {showPosts ? (
          <PostsComponent />
        ) : (
          <p>PostsComponent is unmounted. Toggle back to see cached data load instantly.</p>
        )}
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
