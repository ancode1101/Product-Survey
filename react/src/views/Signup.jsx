
import { Link } from "react-router-dom"
import { LockClosedIcon } from '@heroicons/react/24/solid'
import { useState } from "react"
import axiosClient from '../axios.js'
import { useStateContext } from "../contexts/ContextProvider.jsx"


export default function Signup() {
  const {setCurrentUser, setUserToken } = useStateContext();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConformation] = useState('');
  const [error, setError] = useState({ __htmlhtml: ''});

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: ''})
    
    axiosClient
      .post('/signup',{
        name: fullName,
        email,
        password,
        password_comfirmation: passwordConfirmation
      })
      .then(({data}) => {
        console.log(data);
        /**setCurrentUser(data.user)
        setUserToken(data.token)*/
      })
      .catch(( error ) => {
        console.log(error);
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
          {error._html && (<div className=" bg-red-500 rounded py-2 px-3 text-white"
          dangerouslySetInnerHTML={error}>
          </div> )}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onSubmit} className="space-y-6" action="#" method="POST">
            <div>
            <div className="mt-0">
                {fullName}
                <input
                  id="full-name"
                  name="name"
                  type="text"
                  required
                  value={fullName}
                  onChange={ev => setFullName(ev.target.value)}
                  className="relative block w-full rounded-none  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Full Name"
                />
            </div>
            <div className="mt-0">
                <input
                  id="email_address"
                  name="Email address"
                  type="text"
                  required
                  value={email}
                  onChange={ev => setEmail(ev.target.value)}
                  className="relative block w-full rounded-0 rounded-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
            </div>
            <div className="mt-0">
            
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={ev => setPassword(ev.target.value)}
                  className="relative block w-full rounded-noo border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Password'
                />
            </div>
            <div className="mt-0">
            
                <input
                  id="password-confirmation"
                  name="password_comfirmation"
                  type="password"
                  required
                  value={passwordConfirmation}
                  onChange={ev => setPasswordConformation(ev.target.value)}
                  className="block w-full rounded-noo border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Password Confirmation'
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
        </div>
    </>
  )
}
