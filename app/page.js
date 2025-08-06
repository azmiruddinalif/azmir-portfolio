import Container from "./components/common/container";
import Banner from "./components/home/Banner";
import WormCompany from "./components/home/company";
import Help from "./components/home/help";
import Journey from "./components/home/journey";
import WorkProcess from "./components/home/Process";
import Projects from "./components/home/projects";
import Review from "./components/home/review";
import Services from "./components/home/services";
import Socials from "./components/home/socials";
import Upwork from "./components/home/Upwork";

export default function Home() {
  return (
    <>
      <Container>
        <Banner />
        <WormCompany />
      </Container>
      <Journey />
      <Container>
        <Projects />
      </Container>
      <Upwork />
      <Container>
        <Services />
      </Container>
      <WorkProcess />
      <Container>
        <Help />
      </Container>
      <Review />
      <Container>
        <Socials />
      </Container>
    </>
  );
}
