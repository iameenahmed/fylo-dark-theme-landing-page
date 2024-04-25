import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
  };
  return (
    <div className="mx-auto max-w-[21rem] translate-y-[42.2%]  transform rounded-2xl bg-primary p-8 text-center font-Raleway shadow-2xl shadow-footer md:max-w-[45rem] md:px-[4.5rem] md:py-10 lg:max-w-[53.75rem]">
      <h3 className="mb-6 font-Raleway text-xl font-bold md:text-3xl">
        Get early access today
      </h3>
      <p className="mb-9 lg:text-base">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 md:grid-cols-3 md:items-start md:gap-8"
      >
        <label htmlFor="email" className="sr-only">
          Enter you email
        </label>
        <div className="block md:col-span-2">
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="w-full rounded-full px-8 py-3.5 text-black"
          />
          {error && (
            <p className="text-italic ms-4 mt-1 text-start text-light-red">
              {error}
            </p>
          )}
        </div>
        <button className="cursor-pointer rounded-full bg-blue py-3.5 font-Raleway font-bold hover:opacity-70">
          Get Started For Free
        </button>
      </form>
    </div>
  );
};
export default SignUp;
