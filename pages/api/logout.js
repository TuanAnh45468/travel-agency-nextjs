import { cookies } from "next/headers";

export default async function Logout(req, res) {
  const logout = () => {
    cookies().set({
      name: "__cookie_coke",
      value: "",
      expires: new Date(2016 - 10 - 5),
      path: "/",
    });
  };
  res.redirect("/login");
}
