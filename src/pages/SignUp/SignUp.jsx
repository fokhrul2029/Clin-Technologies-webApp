import { Link } from "react-router";
import Button from "../../components/Button";
import HeadContent from "../../components/HeadContent";
import Input from "../../components/Input";

function SignUp() {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <HeadContent
          title="Create account"
          content="Enter The Email Address Associated With Your Account. We'll Send You An OTP To Your Email."
        />
        <form class="mt-8 space-y-6">
          <Input type="email" placeholder="Enter Email">
            Your Email
          </Input>
          <Input type="password" placeholder="Enter New Password">
            New Password
          </Input>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Enter Confirm Password"
          >
            Confirm New Password
          </Input>
          <Button type="submit"> Sign Up </Button>
          <div class="text-center">
            <p class="text-sm text-gray-600">
              Already Have An Account?{" "}
              <Link
                to="/login"
                class="font-medium text-blue-600 hover:text-blue-500"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
