import bcrypt from "bcryptjs";

export const hashPassword = (text : string) : string => {
    return bcrypt.hashSync(text)
}

export const comparePassword = (text : string, hashed : string) : boolean => {
    return bcrypt.compareSync(text, hashed)
}