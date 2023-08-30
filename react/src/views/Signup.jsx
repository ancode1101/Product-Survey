
import { Link } from "react-router-dom"
import { LockClosedIcon } from '@heroicons/react/24/solid'
import { useState } from "react"
import axiosClient from '../axios.js'


export default function Signup() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [passwordComformation, setpasswordConformation] = useState('');
  const [error, seterror] = useState({_html: ''});

  const onSubmit =(ev) => {
    ev.preventDefault();
    seterror({ __html: ''})

  axiosClient
    .post('/signup',{
      name: fullName,
      email,
      password,
      password_comformation: passwordComformation
    })
    .then(({data}) => {
      console.log(data);
    })
    .catch(({ error }) => {
      if (error.response) {
        const finalErrors = Object.values(error.response.data.errors).reduce((accum,next) => [...next, ...accum], [])
        console.log(finalErrors)
        seterror({__html: finalErrors.join('<br>')})
      }
      console.error(error)
    });

  };

  return (
    <>
      
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Signup for free
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Login with your account
            </Link>
          </p>
          {error.__html && (<div className=" bg-red-500 rounded py-2 px-3 text-white"
          dangerouslySetInnerHTML={error}>
          </div> )}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onSubmit} className="space-y-6" action="#" method="POST">
            <div>
              
              <div className="mt-2">
                <input
                  id="full-name"
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-noo border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div>
              
              <div className="mt-2">
                <input
                  id="email_address"
                  name="Email address"
                  type="text"
                  required
                  className="relative block w-full rounded-0 rounded-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
            <div className="mt-2">
            
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-noo border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Password'
                />
              </div>
              <div className="mt-2">
            
                <input
                  id="password-confirmation"
                  name="password_comformation"
                  type="password"
                  required
                  className="block w-full rounded-noo border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Password Conformation'
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-noo bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="adsolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Signup
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Not a member?{' '}
            
          </p>
        </div>
      
    </>
  )
}
