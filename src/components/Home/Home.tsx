import BlockchainInteractionsSection from './BlockchainInteractionsSection'
import PortfolioSection from './PortfolioSection'
import WelcomeSection from './WelcomeSection'
import DexSection from './DexSection'

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