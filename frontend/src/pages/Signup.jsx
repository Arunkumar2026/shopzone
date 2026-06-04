import { useState } from "react";

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name, email, password, 
    });
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" required className="w-full border px-4 py-2 rounded outline-none focus:ring-2 focus:ring-black" />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input value={email} onChange={(e) => setEamil(e.target.value)} type="email" required placeholder="Enter you email" className="w-full px-4 py-2 border rounded outline-none focus:ring-2 focus:ring-black"/>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Enter your password" className="w-full px-4 py-2 rounded border outline-none focus:ring-2 focus:ring-black"/>
        </div>

        <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">Singup</button>
      </form>
    </div>
  )
}

export default Signup