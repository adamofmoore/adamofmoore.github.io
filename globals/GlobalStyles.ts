import { css, createGlobalStyle } from "styled-components";

const reset = css`
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        font-family: var(--tr-font-family);
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    body {
        line-height: 1;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "Special Gothic";
    src: url("/fonts/special-gothic-400.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Special Gothic";
    src: url("/fonts/special-gothic-500.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Special Gothic";
    src: url("/fonts/special-gothic-600.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Special Gothic";
    src: url("/fonts/special-gothic-700.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  * {
      margin: 0;
  }

  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #fde0adff;
    font-weight: 500;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  html, body {
    height: 100%;
  }

  :root {
    font-size: 62.5%;

    body {
      min-height:100%;
      font-size: 1.7rem;
      line-height: 2.8rem;
      -webkit-font-smoothing: antialiased;
      font-family: "Special Gothic", "Arial", sans-serif;
      background: #151515;
      text-wrap: pretty;
      color: #e0e0e0;
    }
  }

  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #fff;
    font-weight: bold;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  ul, ol {
    padding-left: 16px;
  }

  #root, #__next {
    isolation: isolate;
  }
`;

export default GlobalStyles;
