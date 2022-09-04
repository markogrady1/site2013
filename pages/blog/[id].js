import { useEffect } from 'react'
import matter from 'gray-matter';
import md from 'markdown-it';
import hljs from 'highlight.js';

import { getArticle } from '../../client/api-client';


export default function Page(props) {
  useEffect(() => {
    hljs.highlightAll();
  }, [])

  return (
    <>
      <h1>{props.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(props.content) }} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const data = await getArticle(id);
  const { data: frontmatter, content } = matter(data.message);

  return {
    props: {
      frontmatter,
      content,
      id,
    },
  };
}