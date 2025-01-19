import { useState } from "react";

export const useLogin = () => {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
  
    const login = () => {
      console.log("login");
      console.log(email, password);
    }
    
    return {email, password, setEmail, setPassword, login}
}