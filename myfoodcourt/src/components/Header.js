import './Header.css';
// import { myLogo } from '../img/log-white.png';

import myLogo from '../img/logo-white.png'
const Header = () => {

  return (
    <header className="header">
      <div className="logo-box">
        <img src={myLogo} alt="Logo" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">NacroSolutions</span>
          <span className="heading-primary-sub">Is where Innovation happens</span>
        </h1>
      </div>
    </header>
  )


}


export default Header;