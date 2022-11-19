import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import hljs from "highlight.js";

export const Code: React.FC<PageProps> = () => {
  const codeRef = React.useRef();

  React.useEffect(() => {
    if (codeRef.current !== undefined) {
      hljs.highlightElement(codeRef.current);
    }
  }, [codeRef]);

  // const nodes = querySelectorAll('pre code');
  console.log(codeRef);

  const code = `export const super = () =>  'cool';
const bad = () => 'goog';`;

  return <pre ref={codeRef} dangerouslySetInnerHTML={{ __html: code }}></pre>;
};
