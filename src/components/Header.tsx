import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

export const Header: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  console.log(data);
  return (
    <header>
      <nav>
        {/* <Link to="pages/gatsby-blog/">How to create a blog</Link> */}
      </nav>
      <a href="/" id="logo">
        <h1>{data.site.siteMetadata.title}</h1>
      </a>
      <p>A technical blog by a freelance fullstack developer</p>
    </header>
  );
};

// export const Head: HeadFC = () => <title>Home Page</title>;
