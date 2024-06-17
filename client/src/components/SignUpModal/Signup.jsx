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
                <Button className='w-13 text-yellow-400 bg-amber-50 hover:bg-transparent border-2 border-white-500' onClick={() => setOpenModal(true)}>Sign Up</Button>
                <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                    <div className="bg-amber-50 rounded-lg">
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6 py-10 px-5">
                            <h3 className="flex justify-center text-xl font-medium text-indigo-950 pb-5">Create an Account</h3>
                            <div className='text-indigo-950'>
                                <div className="mb-2 block">
                                    <p>Email:</p>
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
                            <div className='text-indigo-950'>
                                <div className="mb-2 block">
                                    <p>First Name:</p>
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
                            <div className='text-indigo-950'>
                                <div className="mb-2 block">
                                    <p>Last Name:</p>
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
                            <div className='text-indigo-950'>
                                <div className="mb-2 block">
                                    <p>Your Password:</p>
                                </div>
                                <TextInput 
                                placeholder="*********"
                                name="password"
                                type="password"
                                id="pwd" 
                                 onChange={handleChange} required />
                            </div>
                            <div className="flex justify-between text-indigo-950">
                                <div className="flex items-center gap-2">
                                <p>Remember me</p>
                                    <Checkbox id="remember" />
                                </div>
                            </div>
                            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
            
                                <Link to="/">
                                <Button  onClick={handleFormSubmit} className="text-amber-50 bg-indigo-950 hover:bg-yellow-500">
                                    Create account
                                </Button>
                                </Link>
                            </div>
                        </div>
                    
                    </Modal.Body>
                    </div>
                </Modal>
            </>
        );
    }
    export default Signup;
