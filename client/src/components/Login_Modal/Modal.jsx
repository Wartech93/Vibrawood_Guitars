import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Link } from "react-router-dom";


function Login(props) {
  const [openModal, setOpenModal] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { error }] = useMutation(LOGIN);


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
      console.log('error', e);
    }
  };

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <Button className='w-14 text-white border-2 border-white-300' onClick={() => setOpenModal(true)}>Login</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body >
          <form onSubmit={handleFormSubmit}>
            <div className="space-y-4 p-4">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Login</h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
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
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                  Lost Password?
                </a>
              </div>
              <div className="w-full">
                <button type="submit">Log in</button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?&nbsp;
                <Link to="/signup">
                  <a onClick={()=> onCloseModal() } href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                    Create account
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
