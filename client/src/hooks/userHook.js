import { useState } from "react";

const userHook = () => {

    const [formState, setFormState] = useState({ username: "", password: "" });

    const onChangeForm = (key) => {
        return (e) => setFormState({
            ...formState,
            [key]: e.target.value
        });
    }

    return {
        value: formState,
        onChangeForm
    }

};

export default userHook;
