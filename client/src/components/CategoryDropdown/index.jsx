import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_CATEGORY } from '../../utils/actions'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'


const CategoryDropdown = () => {
    const [state, dispatch] = useStoreContext();

    const [display, setDisplay] = useState(state.currentCategory)

    const handleClick = (category) => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: category,
        })
    };

    const linkClass = 'cursor-pointer text-indigo-950 hover:text-yellow-500'

    return (
        <div className='flex justify-center m-5'>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        {display}
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </MenuButton>
                </div>

                <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1 flex flex-col">
                            <MenuItem>
                                <a
                                    href="#"
                                    className='hover:bg-gray-400'
                                    onClick={() => [handleClick(''), setDisplay('All')]}
                                >
                                    All
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                    href="#"
                                    className='hover:bg-gray-400'
                                    onClick={() => [handleClick('Guitar'), setDisplay('Guitars')]}
                                >
                                    Guitars
                                </a>

                            </MenuItem>
                            <MenuItem>
                                <a
                                    href="#"
                                    className='hover:bg-gray-400'
                                    onClick={() => [handleClick('Bass'), setDisplay('Basses')]}
                                >
                                    Basses
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                    href="#"
                                    className='hover:bg-gray-400'
                                    onClick={() => [handleClick('Sale'), setDisplay('On Sale')]}
                                >
                                    On Sale
                                </a>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Transition>
            </Menu>
        </div>
    );
}

export default CategoryDropdown
