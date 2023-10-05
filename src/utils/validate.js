
export const validate = (email, password) => {

    const emailResult = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const passwordResult = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!emailResult) return "Email is not valid"
    if(!passwordResult) return "Password is not valid"
    return null;
}