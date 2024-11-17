import { loginUser } from '../../actions/user';
import Link from 'next/link';
import { EmailIcon, EyeIcon } from '@/app/icons';
export default function Login() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    账号登录
                </h1>

                <form
                    action={loginUser}
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>

                        <div className="relative">
                            <input
                                name="email"
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <EmailIcon />
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                name="password"
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <EyeIcon />
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        登录
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        未注册账号?
                        <Link className="underline ml-2" href="/register">
                            注册
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
