import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArticleList } from "../components/ArticleList";

import "../styles/styles.scss";
import { Code } from "../components/Code";
import { withLayout } from "../hoc/withLayout";
import { Seo } from "../components/Seo";

const AboutMe: React.FC<PageProps> = () => {
  const [showEmail, setShowEmail] = React.useState(false);
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    if (showEmail) {
      const encryptedEmail = "dHdvZ3JvdXB0aGVvcnlAZ21haWwuY29t";
      // Encrypt with window.btoa(unescape(encodeURIComponent(email)));
      const decryptedEmail = decodeURIComponent(
        escape(window.atob(encryptedEmail))
      );
      setEmail(decryptedEmail);
    }
  }, [showEmail]);

  return withLayout(
    <>
      <a href="/">Back</a>
      <p>
        I am Pierre, a freelance fullstack developer. I have decades of
        experience in software engineering, but I am still learning... ;-)
        During the last 5 years, I have focused on the stack React / Typescript
        / Node.js, building scalable application on AWS. I use my expertise to
        help organisations to achieve their goals.
      </p>
      <ul>
        <li>
          <a href="https://github.com/k3roulas">Github</a>
        </li>
        <li>
          <a href="/Resume.pdf">CV</a>
        </li>
        <li>
          Do you want to hire me? I am now available. Get in touch by email :
          <br />
          {showEmail ? (
            <>
              <a href={"mailto:" + email}>{email}</a>
            </>
          ) : (
            <button onClick={() => setShowEmail(true)}>Show email</button>
          )}
        </li>
      </ul>
    </>
  );
};

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

export default AboutMe;

export const Head: HeadFC = () => <Seo title="About me" />;
