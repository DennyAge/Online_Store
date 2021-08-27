import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import Button from 'react-bootstrap/Button'
import { SHOP_ROUTE } from '../utils/constc';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context)
  
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Купи Девайс</NavLink>
          {user.isAuth ?
        <Nav className="ml-auto" style={{color: 'white'}}>
          <Button variant={'outline-light'}>Админ панель</Button>
          <Button className="ml-2" variant={'outline-light'}>Выйти</Button>
        </Nav>
          :
        <Nav className="ml-auto" style={{color: 'white'}}>
         <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
        </Nav>
          }
      </Container>
    </Navbar>

    );
  });

export default NavBar;