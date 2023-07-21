import Post from "./post";

export default function ListPosts({ posts }) {
  return (
    <>
      {posts?.length && (
        <div className="grid">
          {posts?.map(post => (
            <Post
              key={post?.id}
              post={post?.attributes}
            />
          ))}
        </div>
      )}
    </>
  )
}
