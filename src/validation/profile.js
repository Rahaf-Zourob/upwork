import * as yup from "yup";

export const priceScheme = () =>
    yup.object({
        hourlyRate: yup.number().required("Please enter a value between $3.00 and $999.00"),
        recived: yup.number()
    })



