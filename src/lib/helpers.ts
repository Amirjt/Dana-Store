const errSetter = (err: string, setErr: Function) => {
  setErr(err);
  setTimeout(() => {
    setErr("");
  }, 2000);
};

const usernameRegex = /^[a-z0-9_-]{8,15}$/;
const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
const numberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

export { errSetter, usernameRegex, emailRegex, numberRegex, passwordRegex };
