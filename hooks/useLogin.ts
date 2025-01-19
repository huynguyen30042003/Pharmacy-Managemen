import { useState } from "react";

export const useLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  
    const login = () => {
      console.log("login");
      console.log(email, password);
    }
    
    return {email, password, setEmail, setPassword, login}
}