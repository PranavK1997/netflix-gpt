export const checkValidData = (email, password, name) => {
  const isEmailValid =
    /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(email);
  const isPasswordValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  if (name !== undefined && name.trim() === "") return "Name field is required";
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
