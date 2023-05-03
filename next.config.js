// Highlighter
const rehypePrettyCode = require('rehype-pretty-code');

const options = {
  // Use one of Shiki's packaged themes
  theme: 'css-variables',
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  tokensMap: {
    fn: 'entity.name.function',
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  },
};

// Support MDX
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [frontmatterRemarkPlugin],
    rehypePlugins: [[rehypePrettyCode, options]],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  compiler: {
    styledComponents: true
  },
  experimental: {
    images: {
      unoptimized: true,
      allowFutureImage: true
    },
    scrollRestoration: true
  },
  images: {
    domains: ["images.pexels.com", "2544907808-files.gitbook.io"],
  },
  async rewrites() {
    return [
      {
        source: '/zapier/:path*',
        destination: 'https://hooks.zapier.com/:path*'
      }
    ]
  },
})

