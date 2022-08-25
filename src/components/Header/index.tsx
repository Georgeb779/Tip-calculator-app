import LogoIcon from "../../assets/logo.svg";
import "./style.scss";

export function Header() {
  return (
    <header className='header__container'>
      <img src={LogoIcon} alt='' />
    </header>
  );
}
