"use client"
import Link from "next/link"
import {FiMenu} from "react-icons/fi"
import {TfiBackLeft} from "react-icons/tfi"

import { useState } from "react"

export default function Header () {
    const [modalMenu, setModalMenu] = useState(false)

    const handleClickModalMenubar = () => {
        setModalMenu(prev=>!prev)
    }

    return (
        <>
        <nav id="navbar" className="w-full h-14 fixed px-10 z-30 bg-white shadow-md text-sm">
            <div className="flex justify-between items-center w-full h-full max-w-7xl mx-auto">
                <h1 className="w-32 font-black text-2xl bg-gradient-to-r from-gray-600 to-orange-300 bg-clip-text text-transparent">Niph Dev.</h1>
                <section className="hidden w-fit justify-end items-center md:flex text-center">
                    <Link href={'/'} className="hidden md:block px-5">
                        <p className="text-orange-800 hover:text-black font-semibold duration-300">Home</p>
                    </Link>
                    <Link href={'/property'} className="hidden md:block px-5">
                        <p className="text-orange-800 hover:text-black font-semibold duration-300">All Housing Project</p>
                    </Link>
                    <Link href={'/about'} className="hidden md:block px-5">
                        <p className="text-orange-800 hover:text-black font-semibold duration-300">About</p>
                    </Link>
                </section>
                <button className="md:hidden w-fit my-3" onClick={handleClickModalMenubar}>
                    <FiMenu className="w-10 h-10"/>
                </button>
            </div>
        </nav>
        {modalMenu && <>
        <nav className="w-full bg-white fixed top-0 flex flex-col text-center items-center border-b py-5 z-30 shadow-md">
            <Link href={'/'} className="py-2" onClick={handleClickModalMenubar}>
                <p>Home</p>
            </Link>
            <Link href={'/property'} className="py-2" onClick={handleClickModalMenubar}>
                <p>All Housing Project</p>
            </Link>
            <Link href={'/about'} className="py-2">
                <p>About</p>
            </Link>
            <button className="border text-center py-1 px-5 rounded-full flex items-center gap-3 absolute -bottom-14 bg-white" onClick={handleClickModalMenubar}><TfiBackLeft className="w-8 h-8" />
                <span className="text-lg font-semibold">Close</span>
            </button>
        </nav>
        <button className="w-full h-full bg-black bg-opacity-50 fixed top-0 left-0 z-10"></button></>}
        </>
    )
}