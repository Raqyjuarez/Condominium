const UsersForm = () => {
    return<>
    </>
}

const textFields = [
    {
      key: "Name",
      name: "Name",
      type: "text",
      placeholder: "Name",
      error: !valid.users.name,
      helperText:
        !valid.users.name &&
        "Name should be 3-16 characters and shouldn't include any special character!",
    },
    {
      key: "Lastname",
      name: "Lastname",
      type: "text",
      placeholder: "Lastname",
      error: !valid.users.lastname,
      helperText:
        !valid.users.lastname &&
        "Lastname should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },
    {
      key: "Email",
      name: "Email",
      type: "email",
      placeholder: "Email",
      error: !valid.users.email,
      helperText: !valid.users.email && "The email must be valid",
      required: true,
    },
    {
      key: "UserPhone",
      name: "UserPhone",
      type: "number",
      placeholder: "Phone Number",
      error: !valid.users.userPhone,
      helperText: !valid.users.userPhone && "Only use numbers",
      required: true,
    },
    {
      key: "UserRole",
      name: "UserRole",
      type: "text",
      placeholder: "Add User Role",
      error: !valid.users.userRole,
      helperText: !valid.users.userRole && "User Role must exist",
      required: true,
    },
  ]