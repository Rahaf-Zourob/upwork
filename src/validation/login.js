import * as yup from "yup";

export const LoginSchema = () =>
    yup.object({
        email: yup.string().email().required("Enter a valid email"),
        password: yup.string().required("This field is required"),
    });
