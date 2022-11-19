import { withLayout } from "../hoc/withLayout";
import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import hljs from "highlight.js";
import { Seo } from "../components/Seo";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  const codeRef = React.useRef();

  React.useEffect(() => {
    if (codeRef.current !== undefined) {
      const nodes = codeRef.current.querySelectorAll("code");
      nodes.forEach((node) => {
        hljs.highlightElement(node);
      });
    }
  }, [codeRef]);

  return withLayout(
    <>
      <a href="/">Back</a>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <p class="meta">{frontmatter.date}</p>
          <div
            ref={codeRef}
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <a href="/">Back</a>
    </>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

export const Head: HeadFC = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  console.log("PLN", frontmatter.title);

  return <Seo title={frontmatter.title} />;
};
