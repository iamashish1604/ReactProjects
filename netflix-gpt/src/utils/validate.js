const validateData = (email, password)=>{
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,30}$/.test(password);

    if(!isEmailValid) return ('Enter valid email address');
    if(!isPasswordValid) return ('Enter valid password');

    return null;
}

export {validateData};