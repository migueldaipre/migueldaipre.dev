type Post = {
  title: string
  description: string
  slug: string
  publishedAt: Date
}

export const posts: Post[] = [
  {
    title: "React Strict Web",
    description: "Learn how to get started with React Strict Web.",
    slug: "/posts/react-strict-web",
    publishedAt: new Date(),
  },
  {
    title: "Setting up a React Native Monorepo",
    description: "Learn how to set up a React Native Monorepo",
    slug: "/posts/react-native-monorepo",
    publishedAt: new Date(),
  },
];

export const latestPosts = (limit: number) => posts.slice(0, limit)