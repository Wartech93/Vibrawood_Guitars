import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'


function Login(props) {
  const [openModal, setOpenModal] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { error }] = useMutation(LOGIN);

  const [loginFailed, setLoginFailed] = useState(false);
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: email, password: password },
      });
      console.log('did good things')
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      onCloseModal();
    } catch (e) {
      setLoginFailed(true);
      console.log('error', e);
    }
  };

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <Button className='w-13 bg-amber-50 hover:bg-transparent border-2 border-white-500 text-yellow-500' onClick={() => setOpenModal(true)}>Login</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <div className="bg-amber-50 rounded-2xl">
        <Modal.Header />
        <Modal.Body >
          <form className='bg-amber-50' onSubmit={handleFormSubmit}>
            <div className="space-y-4 p-4 bg-amber-50">
              <h3 className="text-2xl font-medium text-indigo-950 pb-5 text-center">Login</h3>
              {loginFailed ? (<p className='text-red-500'>Please enter correct login information.</p>) : null}
              <div className="pb-5">
                <div className="mb-2 block">
                  <p>Email:</p>
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <p>Password:</p>
                </div>
                <TextInput
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2 pb-5">
                  <p>Remember me</p>
                  <Checkbox id="remember" />
                </div>
              </div>
              <div className="flex justify-between text-sm font-medium text-amber-50 w-full">
              <button className="border rounded-md py-1 px-4 bg-indigo-950 hover:bg-yellow-500" type="submit">Log in</button>
                <Link to="/signup">
                  <Button onClick={()=> onCloseModal() } href="#" className=" bg-indigo-950 hover:bg-yellow-500 text-amber-50">
                  Not registered?
                  </Button>
                </Link>
              </div>
            </div>
          </form>
        </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default Login;
