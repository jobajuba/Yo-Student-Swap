import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'YoSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('YoSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('YoSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('YoSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('YoSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('YoSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('YoSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('YoSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('YoSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('YoSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('YoSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('YoSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('YoSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('YoSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('YoSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('YoSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('YoSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('YoSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('YoSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('YoSwap Info & Analytics')}`,
        description: 'View statistics for YoSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('YoSwap Info & Analytics')}`,
        description: 'View statistics for YoSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('YoSwap Info & Analytics')}`,
        description: 'View statistics for YoSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('YoSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('YoSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('YoSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('YoSwap')}`,
      }
    default:
      return null
  }
}
