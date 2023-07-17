import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../store/slices/userSlice";
import { ADMIN_ROUTE, LOGIN_ROUTE, STAFF_ROUTE } from "../utils/consts";

const Layout = () => {
  const isAuth = useSelector((state) => state.userSlice.isAuth);
  const userRole = useSelector((state) => state.userSlice.user.role);

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
                {userRole === "ADMIN" ? (
                  <CustomLink to={ADMIN_ROUTE}>Админ панель</CustomLink>
                ) : (
                  <></>
                )}

                <CustomLink onClick={logOut()} className="mx-4">
                  Выйти
                </CustomLink>
              </Nav>
            ) : (
              <CustomLink variant="secondary" to={LOGIN_ROUTE}>
                Авторизироваться
              </CustomLink>
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
