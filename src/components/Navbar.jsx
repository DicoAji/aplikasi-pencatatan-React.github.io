import { Nav } from "react-bootstrap";
import Logo from "../img/react.png";

const Navbar = () => {
  return (
    <Nav className='navbar '>
      <div className='navbar-brand d-flex justify-content-center align-items-center'>
        <img src={Logo} />
        <span className='ms-2 fw-bold'>Dico Aji</span>
      </div>
    </Nav>
  );
};

export default Navbar;
