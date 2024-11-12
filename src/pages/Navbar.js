import { Container, Image, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../img/logo1.png"
import '../App.css'

function Navbarpage() {
  const [opened, { toggle }] = useDisclosure();
    return(
        <>
        <nav className='navContainer'>
          <div>
              <Image src={logo} radius="md" h={50} w={150}/>
          </div>
        </nav>
        </>
    )
}
 
export default Navbarpage;