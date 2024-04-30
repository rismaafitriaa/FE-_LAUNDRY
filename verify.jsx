import { useState } from "react";
import { login } from "../api/login"

export default function Verify() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <section className="isolate min-h-full">
      <img
        src="/background.jpg"
        alt="background"
        className="-z-10 object-cover absolute w-full h-full"
      />
      <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex h-[380px] w-full justify-center rounded-xl">
          <div className="w-full bg-white shadow rounded-s-xl md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">
                Verify 
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="New Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-4"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Repeat New Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-4"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-8 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500 text-white mt-4 hover:opacity-80 transition-all w-full"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full bg-gradient-to-b from-indigo-500 to-purple-500 shadow rounded-e-xl md:mt-0 sm:max-w-md xl:p-0 justify-center content-center p-12">
            <div className="flex items-center justify-center p-16">
              <div className="flex flex-col items-center justify-center">
                <div className="rounded-full overflow-hidden w-40 h-40">
                <img src="/pocoyo.png" alt="Pocoyo" className="object-cover w-full h-full" />
             </div>
                <p className="text-xl text-white font-bold mt-4">Pocoyo</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
