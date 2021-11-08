import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: t('Brand'),
        href: 'https://docs.pancakeswap.finance/brand',
      },
      {
        label: t('Blog'), 
        href: 'https://medium.com/pancakeswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.pancakeswap.finance/contact-us/telegram',
      },      
      {
        label: t('Audit'),
        href: '',
      },
    ],
  },
  {
    label: t('Help & Information'),
    items: [
      {
        label: t('Whitepaper'),
        href: '',
      },
      {
        label: t('Pinkpaper'),
        href: '',
      },
      {
        label: t('Liquidity Lock'),
        href: '',
      },
      {
        label: t('Guides'),
        href: '',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/jobajuba',
      },
      {
        label: t('CoinMarketCap'),
        href: '',
      },      
      {
        label: t('CoinGecko'),
        href: '',
      },
      {
        label: t('Donate'),
        href: '',
      },
    ],
  },
]
