import { useQuery, useQueryClient } from "react-query"; // stick with react-query v3 for checker

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostsComponent() {
  const queryClient = useQueryClient();

  const {
    data,
    error,
    isError,
    isLoading,
    isFetching,
    refetch,
  } = useQuery(
    ["posts"],
    fetchPosts,
    {
      cacheTime: 300000,             // keep cached data for 5 min
      staleTime: 60000,              // consider data "fresh" for 1 min
      refetchOnWindowFocus: false,   // don’t refetch automatically
      keepPreviousData: true,        // keep old data while fetching new
    }
  );

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p style={{ color: "crimson" }}>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing…" : "Refetch posts"}
      </button>

      <ul>
        {data.slice(0, 10).map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
