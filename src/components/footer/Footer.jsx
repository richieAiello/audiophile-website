import '../../styles/footer.css';
import logo from '../../assets/logo.svg';
import FooterList from './FooterList';
import FooterIcons from './FooterIcons';

const Footer = props => {
  return (
    <footer className="bg-light-black mt-auto">
      <div
        className="accent relative container text-white grid gap-y-12 justify-center 
        text-center pt-[3.25rem] pb-[2.375rem] md:pb-[2.875rem] md:pt-[3.75rem]
        md:grid-cols-[1fr,1fr] md:text-left md:gap-y-8 lg:grid-rows-[repeat(3,auto)] 
        lg:pt-[4.6875rem] lg:pb-12 lg:gap-y-0"
      >
        <img
          src={logo}
          alt=""
          className="h-[25px] mx-auto md:mx-0 lg:mb-[2.25rem]"
        />
        <FooterList />
        <p className="opacity-50 md:col-span-2 lg:col-span-1">
          Audiophile is an all in one stop to fulfill your audio
          needs. We're a small team of music lovers and sound
          specialists who are devoted to helping you get the most out
          of personal audio. Come and visit our demo facility - we’re
          open 7 days a week.
        </p>
        <p className="opacity-50 md:mt-12 lg:row-start-3 lg:col-start-1 lg:mt-14">
          Copyright 2021. All Rights Reserved
        </p>
        <FooterIcons />
      </div>
    </footer>
  );
};

export default Footer;
