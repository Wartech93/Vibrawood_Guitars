import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';


function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
       
    

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit} className="flex flex-col items-center justify-center w-screen">
      <div className = "m-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="firstName" className = "block text-sm font-medium leading-6 text-gray-900">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            className="block flex-1 border rounded bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            onChange={handleChange}
          /></div>
        </div>
        <div className = "m-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            className="block border rounded flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div></div>
        <div className="m-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            className="block border rounded flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>
        </div>
        <div className="m-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            className="block border rounded flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div></div>
        <div className="border m-10 rounded-sm w-24 text-center text-sm bg-yellow-300">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
