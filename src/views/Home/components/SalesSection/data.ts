import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade with people all over the world. No need for registration. A truely decentralised platform for all',
  bodyText: 'Trade any token for HAIR on Binance Smart Chain within seconds. Simply connect your wallet and go. We do not collect or keep your personal data.',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x94b6840423dd604d07fdfb739f6e73f852a8f565',
    text: 'Trade HAIR',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: 'Whitepaper',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'CAKE', alt: 'CAKE token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'To the MOON and beyond.',
  bodyText: 'With the HAIR token, YoSwap makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'The Token',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: 'Tokenomics',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'LEARNING & SHARING makes our world go round.',
  bodyText:
    'HAIR token is at the heart of the Cryptocurrency and Blockchain ecosystems. Buy it, win it, farm it, spend it, stake it, prove ownership of property... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x94b6840423dd604d07fdfb739f6e73f852a8f565',
    text: 'Buy HAIR',
    external: false,  
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: 'Small 3d pancake' },
      { src: 'top-right', alt: 'Small 3d pancake' },
      { src: 'coin', alt: 'CAKE token' },
      { src: 'top-left', alt: 'Small 3d pancake' },
    ],
  },
}
