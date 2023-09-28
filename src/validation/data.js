import * as yup from "yup";

export const DataSchema = () =>
    yup.object({
        addres: yup.string().required("This field is required"),
        education: yup.string().required("This field is required"),
        employment: yup.string().required("This field is required"),
        jobTitle: yup.string().required("This field is required"),
        jobDescription: yup.string().required("This field is required"),
        price: yup.number("Your hour price just accept number").required("This field is required"),
    });
