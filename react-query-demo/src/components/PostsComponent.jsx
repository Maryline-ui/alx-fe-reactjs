
import { useQuery, useQueryClient } from "@tanstack/react-query";

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
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // show previous data instantly during refetch for nicer UX
    placeholderData: (prev) => prev,
  });

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p style={{ color: "crimson" }}>Error: {error.message}</p>;

  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? "Refreshing…" : "Refetch posts"}
        </button>
        <button onClick={() => queryClient.invalidateQueries({ queryKey: ["posts"] })}>
          Invalidate cache
        </button>
        <button onClick={() => queryClient.removeQueries({ queryKey: ["posts"] })}>
          Remove from cache
        </button>
      </div>

      <p style={{ opacity: 0.7, marginTop: 4 }}>
        Status: {isFetching ? "fetching…" : "idle"} (staleTime: 60s)
      </p>

      <ul>
        {data.slice(0, 10).map((p) => (
          <li key={p.id} style={{ marginBottom: 12 }}>
            <strong>#{p.id} {p.title}</strong>
            <div style={{ whiteSpace: "pre-wrap" }}>{p.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
