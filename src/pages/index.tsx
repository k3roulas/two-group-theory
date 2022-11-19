import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArticleList } from "../components/ArticleList";

import "../styles/styles.scss";
import { Code } from "../components/Code";
import { withLayout } from "../hoc/withLayout";
import { Seo } from "../components/Seo";

const IndexPage: React.FC<PageProps> = ({ data }) =>
  withLayout(
    <>
      <p>
        You can lean more <a href="/aboutMe">about me</a>.
      </p>
      <p>
        Articles :
        <ArticleList articles={data.allMarkdownRemark} />
      </p>
    </>
  );

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <Seo title="" />;
