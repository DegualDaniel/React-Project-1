import logo from './assets/logo.svg'
const Nav = () => {
  return ( 
    <nav>
      <div className="logo"> 
        <img src={logo} alt=""/>
        <h3>Gual</h3>
        </div> 
      <ul>
        <li className="">
          <a href="#">Home</a>
        </li>
        <li className="">
          <a href="#">About Us</a>
        </li>
        <li className="">
          <a href="#">Package</a>
        </li> 
        <li className="">
          <a href="#">Blog</a>
        </li>
        <li className="">
          <a href="#">Contact</a>
        </li>
 
      </ul>
    </nav>
  );
};

export default Nav;
