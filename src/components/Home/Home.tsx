import BlockchainInteractionsSection from './BlockchainInteractionsSection'
import PortfolioSection from './PortfolioSection'
import WelcomeSection from './WelcomeSection'
import DexSection from './DexSection'
import Footer from './Footer'

function Home() {
  return (
    <>
        <WelcomeSection/>
        <DexSection />
        <PortfolioSection />
        <BlockchainInteractionsSection />
        <Footer />
    </>
  )
}

export default Home