import { css } from 'styled-components'

export default css`
  .prism-code {
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;

    pre[class*='language-'] {
      color: #434155;
    }

    .token.tag,
    .token.class-name,
    .token.selector,
    .token.selector .class,
    .token.selector.class,
    .token.function {
      color: #4876d6;
    }

    .token.attr-name,
    .token.keyword,
    .token.rule,
    .token.pseudo-class,
    .token.important {
      color: #4876d6;
    }

    .token.module {
      color: #ff628c;
    }

    .token.attr-value,
    .token.class,
    .token.string,
    .token.property {
      color: #cc0000;
    }

    .token.punctuation,
    .token.attr-equals {
      color: #434155;
    }

    .token.unit,
    .language-css .token.function {
      color: #bb0000;
    }

    .token.comment,
    .token.operator,
    .token.combinator {
      color: #989fb1;
    }

    // https://github.com/sdras/night-owl-vscode-theme/blob/main/themes/Night%20Owl-Light-color-theme.json

    .plain {
      color: '#4876d6 !important';
    }
    .property {
      color: '#C96765';
    }
    .number {
      color: '#FF628C !important';
    }
    .string {
      color: '#C96765 !important';
    }
    .boolean {
      color: '#AA0982 !important';
    }
    .function {
      color: '#4876d6 !important';
    }
    .keyword {
      color: '#994cc3 !important';
    }
  }
`
