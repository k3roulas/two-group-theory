import * as React from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const withLayout = (children) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
