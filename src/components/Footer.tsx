import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import love from "../images/love.svg";

export const Footer: React.FC<PageProps> = () => {
  return (
    <footer>
      Two Group Theory - Do you need a freelance fullstack developer?{" "}
      <a href="/aboutMe">hire me!</a>
      <p>
        Made with <img id="love" src={love} alt="love" /> from Brighton, UK
      </p>
    </footer>
  );
};

// export const Head: HeadFC = () => <title>Home Page</title>;
