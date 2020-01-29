import {useState} from 'react';

const constraints = {
  username: {
    presence: {
      message: 'This field is not required.',
    },
    lenght: {
      minimum: 3,
      message: 'Your usernamse must be at least 3 charachters',
    }
  }
}

const useSignUpForm = () => {
  const [inputs, setInputs] = useState({});
  const handleUsernameChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        username: text,
      }));
  };
  const handlePasswordChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        password: text,
      }));
  };
  const handleEmailChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        email: text,
      }));
  };
  const handleFullnameChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        full_name: text,
      }));
  };

  return {
    handleUsernameChange,
    handlePasswordChange,
    handleEmailChange,
    handleFullnameChange,
    inputs,
  };
};

export default useSignUpForm;
