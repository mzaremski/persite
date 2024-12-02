type Post = {
  meta: {
    title: string;
    description: string;
  };
  path: string;
} 

export const getPosts = (): Post[] => {
  const rawPostsData = import.meta.glob(
    "./routes/posts.*.mdx",
    { eager: true }
  );

  return Object.entries(rawPostsData).map(([path, data]) => {
    const postData = (data as any).postData;
    const postFileName = path.replace("./routes/posts.", "").replace(".mdx", "");

    return {
      meta: {
        title: postData.title,
        description: postData.description,
      },
      path: `/posts/${postFileName}`,
    }
  });
} 
