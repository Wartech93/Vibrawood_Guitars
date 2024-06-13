import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';


function Login() {
    const [openModal, setOpenModal] = useState(() => {
    const savedState = localStorage.getItem('modalOpen');
    return savedState ? JSON.parse(savedState) : false;
  });
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

  useEffect(() => {
    localStorage.setItem('modalOpen', JSON.stringify(openModal));
  }, [openModal]);

  const onCloseModal = () => {
    setOpenModal(false);
    localStorage.setItem('modalOpen', JSON.stringify(false));
    setFormState({ email: '', password: '' });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { mutationResponse } = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      onCloseModal();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Login</Button>
     <div className="flex content-center items-center">
      <Modal className="w-2/5 " show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-black">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                color="black"
                id="email"
                name="email"
                placeholder="name@company.com"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                color="black"
                id="password"
                name="password"
                type="password"
                placeholder="Your Password"
                value={formState.password}
                onChange={handleChange}
                required
              />
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
              <Button color="black" onClick={function(){handleFormSubmit(); onCloseModal();}} type="submit">Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="/signup"onClick={onCloseModal}className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </a>
            </div>
          </form>
        </Modal.Body>
      </Modal>
     </div>
    </>
  );
}

export default Login;
