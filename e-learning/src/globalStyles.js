import { css } from "@emotion/react";

// Global styles
const globalStyles = css`
  html,
  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    height: 100%;
    width: 100%;
    background-color: #fff0e5;
  }

  .container {
    max-width: 1280px;
  }
  #root {
    height: 100%;
  }
`;

export default globalStyles;
