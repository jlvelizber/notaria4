export interface RegisterUserInterface {
    identification_type: string
    identification_num: string
    name: string
    midle_name: string
    first_last_name: string
    second_last_name: string
    email: string
    password?: string
    password_confirmation?: string
    country_id?:string
}

export interface ErrorMessagesRegisterUserInterface {
    message: string
    errors: RegisterUserInterface,
    fieldValues: RegisterUserInterface,
}

export interface LoginUserInterface {
    email: string
    password: string
}

export interface AuthTokenDataInterface {
    status: 'authenticated' | 'not-authenticated' | 'checking'
    token: {
        plainTextToken: string
    },
    user: RegisterUserInterface,
    errors: ErrorMessagesRegisterUserInterface
   
}
