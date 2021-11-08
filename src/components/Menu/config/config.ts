import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap?outputCurrency=0x94b6840423dd604d07fdfb739f6e73f852a8f565',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap?outputCurrency=0x94b6840423dd604d07fdfb739f6e73f852a8f565',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn Tokens'),
    href: '',
    icon: 'Earn',
    items: [
      {
        label: t('Follow us on social media for a chance to win free HAIR tokens'),
      },
      {
        label: t('Facebook'),
        href: '/',      
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Twitter'),
        href: '/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Discord'),
        href: '/',      
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Medium'),
        href: '/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  {
    label: t('NFT'),
    href: `${nftsBaseUrl}`,
    icon: 'Nft',
    items: [
      {
        label: t('Overview'),
        href: `${nftsBaseUrl}`,
      },
      {
        label: t('Collections'),
        href: `${nftsBaseUrl}/collections`,
      },
    ],
  },
  {
    label: '',
    href: '/info',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: '/info',
      },
      {
        label: t('IFO'),
        href: '/ifo',
      },
      {
        label: t('Voting'),
        href: '/voting',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Leaderboard'),
        href: '/teams',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/jobajuba',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://docs.hairtoken.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
