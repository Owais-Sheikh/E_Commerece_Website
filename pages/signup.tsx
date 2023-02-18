import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import mongoose from 'mongoose'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const signup = () => {
    const router = useRouter();
    const [name, setname] = useState<string>()
    const [Email, setemail] = useState<string>()
    const [password, setpassword] = useState<string>()
    const getName = ((e: any) => {
        e.preventDefault();
        setname(e.target.value);
        console.log(name);
    })
    const getEmail = ((e: any) => {
        e.preventDefault();
        setemail(e.target.value);
        console.log(Email);
    })
    const getPassword = ((e: any) => {
        e.preventDefault();
        setpassword(e.target.value);
        console.log(password);
    })
    const submitInfo = async (e: any) => {
        e.preventDefault();
        const data = { name, Email, password };

        var hello = await fetch('http://localhost:3000/api/UserData/Signup', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        var response = await hello.json();
        console.log(response);
        if(response.success){
            toast.success('Your account has been created', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setTimeout(()=>{
                router.push('http://localhost:3000/login')
            },2000)
        }
        else{
            toast.error("Your account can't be created", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        setname('');
        setemail('');
        setpassword('');

    }
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <section>
                <div className="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
                    <div className="flex flex-col text-center sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-6 text-3xl font-extrabold text-center text-neutral-600">Sign up for your account</h2>
                        <div className='text-gray-500 text-sm mt-3'>OR<Link href={'/login'} className='text-blue-600 underline ml-1'>Sign in</Link></div>
                    </div>

                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="px-4 py-8 sm:px-10">
                            <form className="space-y-6" onSubmit={submitInfo} method="POST">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Name </label>
                                    <div className="mt-1">
                                        <input onChange={getName} id="name" value={name
                                        } name='name' type="text" autoComplete="name" required={true} className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email address </label>
                                    <div className="mt-1">
                                        <input onChange={getEmail} value={Email} id="email" name="email" type="email" autoComplete="email" required={true} className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password </label>
                                    <div className="mt-1">
                                        <input onChange={getPassword} value={password} id="password" name="password" type="password" autoComplete="current-password" required={true} className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>



                                <div>
                                    <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export async function getServerSideProps() {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI)
    }
    return { props: {} }
}

export default signup