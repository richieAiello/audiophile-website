import '../../styles/footer.css';
import logo from '../../assets/logo.svg';
import FooterList from './FooterList';
import FooterIcons from './FooterIcons';

const Footer = props => {
  return (
    <footer className="bg-light-black relative pt-[3.25rem] pb-[2.375rem]">
      <div className="accent container text-white grid gap-y-12 justify-center text-center">
        <img src={logo} alt="" className="h-[25px] mx-auto" />
        <FooterList />
        <p className="opacity-50">
          Audiophile is an all in one stop to fulfill your audio
          needs. We're a small team of music lovers and sound
          specialists who are devoted to helping you get the most out
          of personal audio. Come and visit our demo facility - we’re
          open 7 days a week.
        </p>
        <p className="opacity-50">
          Copyright 2021. All Rights Reserved
        </p>
        <FooterIcons />
      </div>
    </footer>
  );
};

export default Footer;
