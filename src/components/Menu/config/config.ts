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
        label: t('Whitepaper'),
        href: '/',
      },
      {
        label: t('Pinkpaper'),
        href: '/',
      },    
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Blog'),
        href: 'https://yostudent.medium.com/yoswap-56290e1f75f6',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },   
      {
        label: t('Facebook'),
        href: 'https://www.facebook.com/hairtoken',      
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Twitter'),
        href: '',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Discord'),
        href: '',      
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
