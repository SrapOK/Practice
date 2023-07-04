import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGINSTRATION_ROUTE } from "../utils/consts";
import { login, registration } from "../http/UserAPI";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { STAFF_ROUTE } from "../utils/consts";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
        navigate(STAFF_ROUTE);
      } else {
        data = await registration(email, password);
      }
      dispatch(setUser(data));
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      style={{ height: window.innerHeight - 55 }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-4"
            placeholder="Введите ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
          <Form.Control
            className="mt-4"
            placeholder="Введите ваш пароль"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
          <Container className="mt-4 d-flex justify-content-between">
            {isLogin ? (
              <div>
                Нет аккаунта?{" "}
                <Link to={REGINSTRATION_ROUTE}> Зарегистрируйся! </Link>
              </div>
            ) : (
              <div>
                Есть аккаунт? <Link to={LOGIN_ROUTE}> Войдите! </Link>
              </div>
            )}
            <Button onClick={click} variant="outline-success">
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Container>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
