import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";

export const ArticleList: React.FC<PageProps> = ({ articles }) => {
  articles.nodes.map((node) => console.log(node.frontmatter.slug));
  return (
    <ul>
      {articles.nodes.map((node) => (
        <li>
          <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  );
};
