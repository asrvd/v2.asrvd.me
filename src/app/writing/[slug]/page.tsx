import { allPosts, Post } from "contentlayer/generated";
import MDX from "@/mdx-components";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allPosts.map((post: Post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) return;
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <section className="p-[0.4rem] w-full">
      <div className="mb-8">
        <h1 className="text-zinc-50 font-semibold text-lg tracking-tight">
          {post.title}
        </h1>
        <time dateTime={post.published} className="text-xs text-zinc-400">
          {Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date(post.published))}
        </time>
      </div>
      <article className="prose prose-2xl prose-pre:bg-stone-800/50 prose-blockquote:border-l w-full">
        <MDX code={post.body.code} />
      </article>
    </section>
  );
};

export default PostLayout;
