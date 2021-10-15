import { AttestationCard } from './components/attestation-card';
import { CardsWrapper } from './components/common/cards-wrapper';
import { Container } from './components/common/container';
import { Header } from './components/common/header';
import { PracticalModulesCard } from './components/practical-modules-card';
import { ProgramsContainer } from './components/programs-container';

function App() {
    return (
        <Container>
            <Header>Специализированные дисциплины</Header>
            <ProgramsContainer />
            <CardsWrapper>
                <PracticalModulesCard />
                <AttestationCard />
            </CardsWrapper>
        </Container>
    )
}

export default App;
