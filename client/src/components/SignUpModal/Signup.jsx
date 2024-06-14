import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
    const [openModal, setOpenModal] = useState(false);

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
        onCloseModel();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

  function onCloseModal() {
            setOpenModal(false);
        }      

        return (
            <>
                <Button className='w-14 text-white border-2 border-white-300' onClick={() => setOpenModal(true)}>Sign Up</Button>
                <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign up to Vibrawood Guitars</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" />Email:
                                </div>
                                <TextInput
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="name@company.com"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="firstName" value="First Name" />First Name:
                                </div>
                                <TextInput
                                    name="firstName"
                                    type="firstName"
                                    id="firstName"
                                    placeholder="First Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="lastName" value="Last Name" />Last Name:
                                </div>
                                <TextInput
                                    name="lastName"
                                    type="lastName"
                                    id="lastName"
                                    placeholder="Last Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="Your password" />
                                </div>
                                <TextInput 
                                placeholder="*********"
                                name="password"
                                type="password"
                                id="pwd" 
                                 onChange={handleChange} required />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="remember" />
                                    <Label htmlFor="remember">Remember me</Label>
                                </div>
                            </div>
                            <div className="w-full">
            
                                <Button>Log in to your account</Button>
                            </div>
                            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered?&nbsp;
                                <Link to="/">
                                <Button  onClick={handleFormSubmit} className="text-cyan-700 hover:underline dark:text-cyan-500">
                                    Create account
                                </Button>
                                </Link>
                            </div>
                        </div>
                    
                    </Modal.Body>
                </Modal>
            </>
        );
    }
    export default Signup;
