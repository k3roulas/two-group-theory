import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const site = data.site.siteMetadata.title;
  const label = title === "" ? site : `${title} ${site}`;

  return <title>{label}</title>;
};
