import { DefaultTheme } from 'vitepress'

export default [
  {
    text: 'Introduction',
    items: [
      { text: 'Overview', link: '/envato-sale-tools/' },
      { text: 'Release Notes', link: '/envato-sale-tools/releases' },
    ],
  },
  {
    text: 'Setting Up',
    items: [
      { text: 'Installation', link: '/envato-sale-tools/installation' },
      { text: 'Updating', link: '/envato-sale-tools/update' },
      { text: 'SSL', link: '/envato-sale-tools/ssl' },
    ],
  },
  {
    text: 'Management',
    items: [
      { text: 'Getting Started', link: '/envato-sale-tools/getting-started' },
      { text: 'Appearance', link: '/envato-sale-tools/appearance' },
      { text: 'Localization', link: '/envato-sale-tools/localization' },
      { text: 'Tools', link: '/envato-sale-tools/tools' },
    ],
  },
  {
    text: 'Advanced',
    items: [
      { text: 'Customization', link: '/envato-sale-tools/customization' },
      { text: 'Developer Guide', link: '/envato-sale-tools/developer-guide' },
    ],
  },
] satisfies DefaultTheme.SidebarItem[]
