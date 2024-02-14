export const validateForm = (name, email, password) => {
    if (name === '') {
        return 'Please enter the name'
    } else if (email === '' && password === '') {
        return 'Enter email and password'
    } else if (email === '') {
        return 'Please enter the email'
    } else if (password === '') {
        return 'Please enter the password'
    }

    const isNameValid = /[a-zA-z]{2,}/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isNameValid) return 'Please enter a valid name';
    if (!isEmailValid) return 'Please enter a valid email'
    if (!isPasswordValid) return 'Password must contain atleast one capital, one small, one number and one special character'

    return null;
}