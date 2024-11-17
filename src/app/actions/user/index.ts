'use server';
import { createClient } from '@/app/utils/supabase/server';
import { redirect } from 'next/navigation';
import { z } from 'zod';

type ErrorState = {
    errors?: {
        email?: string;
        password?: string;
    };
    message?: string | null;
};

const schema = z.object({
    email: z.string({
        invalid_type_error: 'email必须是字符串',
    })
        .email({
            message: 'Invalid Email',
        }),
    password: z.string({
        invalid_type_error: 'Invalid Password',
    }),
});

// todo 注册各各字段校验

export async function createUser(prevState: ErrorState, formData: FormData) {
    console.log(formData, 'formData');
    const email = formData.get('email');
    const password = formData.get('password');
    const validatedFields = schema.safeParse({
        email,
        password,
    }) 

    // 如果验证失败，直接返回错误
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: '创建账号失败',
        };
    }

    // 验证成功后，检查用户是否存在
    const supabase = await createClient();
    const { data: user } = (await supabase.from('users').select('*').eq('email', email)) as {
        data: any[];
    };

    if (user.length > 0) {
        return {
            errors: {
                email: 'User already exists',
            },
        };
    }

    // 创建新用户
    const { data, error } = await supabase
        .from('users')
        .insert([
            {
                email: email as string,
                username: email as string,
                password: password as string,
                role_id: 3,
                status: 'ACTIVE',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            },
        ])
        .select();
    if (error) {
        return {
            errors: {
                email: 'Failed to create user',
            },
        };
    } else {
        redirect('/home');
        return { success: true };
    }
}

export async function loginUser(formData: FormData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const validatedFields = schema.safeParse({
        email,
        password,
    });

    // Return early if the form data is invalid
    if (validatedFields.success) {
        // 验证邮箱密码
        const supabase = await createClient();
        const { data: user } = await supabase
            .from('users')
            .select('*')
            .eq('email', email as string)
            .eq('password', password as string);
        if (user?.length > 0) {
            redirect('/home');
        } else {
            return {
                errors: {
                    email: '账号密码错误',
                },
            };
        }
    } else {
        return {
            errors: {
                email: '账号密码错误',
            },
        };
    }
}
