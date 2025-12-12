import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>kokkorel.nl</span>,
  project: {
    link: 'https://github.com/pthong',
  },
  chat: {
    link: 'https://www.instagram.com/pascalthong',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
      </svg>
    ),
  },
  docsRepositoryBase: 'https://github.com/pthong/kokkorel.nl/blob/main',
  toc: {
    title: 'inhoud',
  },
  feedback: {
    content: 'feedback',
    labels: 'feedback',
    useLink() {
      return 'https://github.com/pthong/kokkorel.nl/issues/new';
    },
  },
  editLink: {
    text: 'Verbeter deze pagina',
  },
  primaryHue: { dark: 24, light: 24 },
  head: (
    <>
      <link rel="stylesheet" href="/cooking.css" />
    </>
  ),
  faviconGlyph: '🍽️',
  footer: {
    text: '© kokkorel 2025 - 2026',
  },
  useNextSeoProps() {
    return {
      titleTemplate: 'Kokkorel.nl ❤️ %s',
      defaultTitle: 'kokkorel.nl',
      openGraph: {
        siteName: 'kokkorel.nl',
      },
    }
  },
}

export default config
