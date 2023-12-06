import fs from 'fs';
import path from 'path';

const BlogDetail: TNextPage<{
  slug: string;
}> = async ({ params: { slug } }) => {
  const filePath = path.join(process.cwd(), `/public/files/blog_${slug}.html`);
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <main className="h-full px-60 py-20">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
};

export default BlogDetail;
