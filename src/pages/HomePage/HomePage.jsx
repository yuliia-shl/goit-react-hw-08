import { SiWelcometothejungle } from 'react-icons/si';
import s from './HomePage.module.css';
import { GiGlassCelebration } from 'react-icons/gi';

const HomePage = () => {
  return (
    <>
      <h1 className={s.title}>
        <SiWelcometothejungle />
        elcome to Contacts book App! <GiGlassCelebration />
      </h1>
    </>
  );
};

export default HomePage;
