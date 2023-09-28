import * as yup from "yup";

export const SignupSchema = () =>
    yup.object({
        firstName: yup
            .string()
            // .matches(/(?=.*?[#?!@$^&*])(?=.*?[0-9])/, "Sorry! No special characters or numbers"
            // )
            .required("First name is required"),

        lastName: yup
            .string()
            // .matches(/^(?=.*?[#?!@$%^&*-])^(?=.*?[0-9])/, "Sorry! No special characters or numbers"
            // )
            .required("Last name is required"),

        email: yup
            .string()
            .email("Enter valid email")
            .matches(/^\S+/, "The email should not contain speace")
            .matches(/@\S+/, "The email should contain @")
            .required("Email addres is required"),

        password: yup
            .string()
            .min(8, "Password should contain at least 8 character")
            .matches(/^(?=.*?[A-Z])/, "Password should contain capital character ")
            .matches(/^(?=.*?[a-z])/, "Password should contain small character")
            .matches(/^(?=.*?[0-9])/, "Password should contain number")
            .matches(/^(?=.*?[#?!@$%^&*-])/, "Password should contain speical character"
            )
            .required("Password is required"),

        sendHelp: yup
            .boolean(),

        argument: yup
            .boolean()
            .oneOf([true], "Please accept the Upwork Terms of Service before continuing")
        .required("Please accept the Upwork Terms of Service before continuing"),
    });