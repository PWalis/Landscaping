import { type FC, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["accessToken"]);

  const usernameOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsername(event.target.value);
  };

  const passwordOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const submitHandler = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetch("http://localhost:3307/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username: username, password: password }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setCookie("accessToken", data.accessToken, { path: "/" });
      navigate("/GalleryDashboard");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }

  return (
    <>
      <div className="bg-image-2"></div>
      <form className="flex flex-col justify-center h-[100lvh] m-auto max-w-96" onSubmit={submitHandler}>
        <h1 className="text-5xl text-gray-100 font-bold pb-5">Login</h1>
        <label htmlFor="username" className="text-2xl text-gray-100 font-bold">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={usernameOnChangeHandler}
          value={username}
          className="p-2 rounded-xl focus:outline-none px-2 font-bold text-xl font-sans text-black"
        />
        <label htmlFor="password" className="text-2xl text-gray-100 font-bold">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={passwordOnChangeHandler}
          value={password}
          className="p-2 rounded-xl focus:outline-none px-2 font-bold text-xl font-sans text-black"
        />
        <button
          type="submit"
          className="border-2 border-gray-200 bg-gray-200/30 rounded-b-sm text-white hover:bg-green-600/10 py-3 px-8 text-lg font-bold font-sans2 mt-2 "
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
