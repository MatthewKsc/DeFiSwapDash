import BlockchainInteractionsSection from './BlockchainInteractionsSection/BlockchainInteractionsSection'
import PortfolioSection from './PortfolioSection/PortfolioSection'
import WelcomeSection from './WelcomeSection/WelcomeSection'
import DexSection from './DexSection/DexSection'

function Home() {
  return (
    <>
        <WelcomeSection/>
        <DexSection />
        <PortfolioSection />
        <BlockchainInteractionsSection />
    </>
  )
}

export default Home