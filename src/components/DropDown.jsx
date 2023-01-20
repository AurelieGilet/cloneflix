import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const DropDown = ({ list, type }) => {
    return (
        <Menu as="div" className="relative inline-block text-left mt-2 mr-6">
            <div>
                <Menu.Button className="inline-flex w-full justify-center border border-gray-300 bg-[#141414] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#141414]  ">
                    Genres
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right bg-[#141414] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <ul className="py-1 border border-gray-300">
                        {list.map((element) => (
                            <Menu.Item key={element.id}>
                                {({ active }) => (
                                    <li
                                        className={classNames(
                                            active ? "bg-black text-white" : "text-white",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        <NavLink style={{ display: "block" }} to={"/" + type + "/" + element.name}>
                                            {element.name}
                                        </NavLink>
                                    </li>
                                )}
                            </Menu.Item>
                        ))}
                    </ul>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
export default DropDown;
