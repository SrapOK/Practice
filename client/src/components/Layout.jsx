import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { setIsAuth } from "../store/slices/userSlice";
import { ADMIN_ROUTE, LOGIN_ROUTE, STAFF_ROUTE } from "../utils/consts";

const Layout = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userSlice.isAuth);
  return (
    <>
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <CustomLink variant="outline-light" to={STAFF_ROUTE}>
              На главную
            </CustomLink>

            {isAuth ? (
              <Nav>
                <CustomLink to={ADMIN_ROUTE}>Админ панель</CustomLink>
                <CustomLink className="mx-4" to={LOGIN_ROUTE}>
                  Войти
                </CustomLink>
              </Nav>
            ) : (
              <Button variant="secondary" onClick={() => dispatch(setIsAuth())}>
                Авторизироваться
              </Button>
            )}
          </Container>
        </Navbar>
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};

export default Layout;
