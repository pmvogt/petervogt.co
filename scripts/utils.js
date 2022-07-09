import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getPosts = (pageIndex) => {
  // parse pages + posts files
  const dirFiles = fs.readdirSync(path.join(process.cwd(), 'pages', 'posts'), {
    withFileTypes: true,
  });

  // filter non-MDX files out
  const posts = dirFiles

    // if extension == .mdx
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return;

      //  create parameter from file name + content for matter function (which needs 'data' and 'content' values)
      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'pages', 'posts', file.name),
        'utf-8'
      );

      const { data, content } = matter(fileContent);

      // give post a slug
      const slug = file.name.replace(/.mdx$/, '');

      return { data, content, slug };
    })
    .filter((post) => post);

  return posts;
};

// TODO: combine getWorkPosts and getPosts into one function
export const getWorkPosts = (pageIndex) => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), 'pages', 'work'), {
    withFileTypes: true,
  });

  const workPosts = dirFiles

    .map((file) => {
      if (!file.name.endsWith('.mdx')) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'pages', 'work', file.name),
        'utf-8'
      );
      const { data, content } = matter(fileContent);
      const slug = file.name.replace(/.mdx$/, '');

      return { data, content, slug };
    })
    .filter((workPost) => workPost);

  return workPosts;
};
