'use client';
import { useActionState } from 'react';
import { createUser } from '../../actions/user';
import { EmailIcon, EyeIcon } from '@/app/icons';

export default function Register() {
    const initialState = {
        errors: {},
        message: null,
    };
    const [state, dispatch] = useActionState(createUser, initialState);
    console.log(state, 'state');
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    账号注册
                </h1>

                <form
                    action={dispatch}
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <label htmlFor="email" className="not-sr-only w-15">
                                邮箱：
                            </label>

                            <div className="relative flex-1">
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="请输入邮箱"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <EmailIcon />
                                </span>
                            </div>
                        </div>
                        {state.errors?.email && (
                            <p className="text-red-500">{state.errors.email}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <label htmlFor="password" className="not-sr-only w-15">
                                密码：
                            </label>

                            <div className="relative flex-1">
                                <input
                                    required
                                name="password"
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="请输入密码"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <EyeIcon />
                                </span>
                            </div>
                        </div>
                        {state.errors?.password && (
                            <p className="text-red-500">{state.errors.password}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <label htmlFor="username" className="not-sr-only w-15">
                                用户名：
                            </label>

                            <div className="relative flex-1">
                            <input
                                required
                                name="username"
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="请输入用户名"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
                            </div>
                        </div>
                        {state.errors?.username && (
                            <p className="text-red-500">{state.errors.username}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                        <label htmlFor="phone" className="not-sr-only w-15">
                                手机号：
                            </label>

                            <div className="relative flex-1">
                            <input
                                required
                                name="phone"
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="请输入手机号"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
                            </div>
                        </div>
                        {state.errors?.phone && (
                            <p className="text-red-500">{state.errors.phone}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <label htmlFor="nickname" className="not-sr-only w-15">
                                昵称：
                        </label>

                        <div className="relative flex-1">
                            <input
                                required
                                name="nickname"
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="请输入昵称"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
                            </div>
                        </div>
                        {state.errors?.nickname && (
                            <p className="text-red-500">{state.errors.nickname}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <label htmlFor="real_name" className="not-sr-only w-15">
                                真实姓名：
                        </label>

                        <div className="relative flex-1">
                            <input
                                required
                                name="real_name"
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="请输入真实姓名"
                            />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
                            </div>
                        </div>
                        {state.errors?.real_name && (
                            <p className="text-red-500">{state.errors.real_name}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <label htmlFor="avatar_url" className="not-sr-only w-15">
                                头像：
                        </label>

                        <div className="relative flex-1">
                            <input
                                required
                                name="avatar_url"
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="请输入头像"
                            />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
                            </div>
                        </div>
                        {state.errors?.avatar_url && (
                            <p className="text-red-500">{state.errors.avatar_url}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <label htmlFor="gender" className="not-sr-only w-15">
                                性别：
                        </label>

                        <div className="relative flex-1">
                            <select
                                required
                                name="gender"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            >
                                WOMAN
                                <option value="MAN">男</option>
                                <option value="WOMAN">女</option>
                            </select>

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
                            </div>
                        </div>
                        {state.errors?.gender && (
                            <p className="text-red-500">{state.errors.gender}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        注册
                    </button>
                </form>
            </div>
        </div>
    );
}
