import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">login</h1>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Email
          </label>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border px-4 py-2 rounded outline-none focus:ring-2 focus:ring-black" required />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold">password</label>
          <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border px-4 py-2 rounded outline-none focus:ring-2 focus:ring-black" required />
        </div>

        <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">Login</button>
      </form>
    </div>
  )
}

export default Login