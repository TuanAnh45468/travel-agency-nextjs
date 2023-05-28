'use client'
import Link from "next/link";

export const Login = () => {
  return (
    <div>
      <div>
        <h1>Login</h1>
        <p>Login to access to your Golobe account</p>
      </div>
      <form>
        <label>
			<input type={"text"} placeholder={"example@email.com"}/>
		</label>
        <label>
            <input type={"password"} placeholder={"Your password"}/>
        </label>

          <div>
              <span>Remember me</span>
              <Link href={"/forgotPassword-password"}></Link>
          </div>
      </form>
    </div>
  );
};
