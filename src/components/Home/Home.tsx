import BlockchainInteractionsSection from './BlockchainInteractionsSection'
import WelcomeSection from './WelcomeSection'
import DexSection from './DexSection'

function Home() {
  return (
    <>
        <WelcomeSection/>
        <DexSection />
        <BlockchainInteractionsSection />
    </>
  )
}

export default Home