export const checkValidData = (email, password, name) =>{
    const IsValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const IsValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // Password should have
    //   - Capital Letter, Special character, numeric, alphabet 

    if(!IsValidEmail) return "Email ID is not valid";
    if(!IsValidPassword) return "Password is not valid";

    return null
}
