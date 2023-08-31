export interface RegisterUserInterface {
    identification_type: string
    identification: string
    name: string
    midle_name: string
    first_last_name: string
    second_last_name: string
    email: string
    password: string
    password_confirmation: string
}


export interface AuthTokenInterface {
    status: "checking" | "authenticated" | "not-authenticated",
    plainTextToken: string
}
