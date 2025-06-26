import { Link } from "react-router";
import Button from "../../components/Button";
import HeadContent from "../../components/HeadContent";
import Input from "../../components/Input";

function Login() {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <HeadContent
          title="Hello, Welcome!"
          content="Please Enter Your Details Below To Continue"
        />
        <form class="mt-8 space-y-6">
          <Input type="email" placeholder="Enter Email">
            Your Email
          </Input>
          <Input type="password" placeholder="Enter Password">
            Password
          </Input>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember Me
              </label>
            </div>
            <Link
              class="text-sm font-medium text-blue-600 hover:text-blue-500"
              to="/forgetPassword"
              data-discover="true"
            >
              Forgot Password?
            </Link>
          </div>
          <Button type="submit"> Login</Button>
          <div class="text-center">
            <p class="text-sm text-gray-600">
              create account,{" "}
              <Link
                to="/signUp"
                class="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
