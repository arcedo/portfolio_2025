import type { Alert } from "../types/Alert.ts";

export const ALERTS: Alert[] = [
        {
            message: "All fields are required!",
            status: "Error",
        },
        {
            message: "Please enter a valid email address!",
            status: "Error",
        },
        {
            message: "There was an error with the server. Please try sending the message again later.",
            status: "Error",
        },
        {
            message: "Your message has been sent! I'll get back to you soon.",
            status: "Ok",
        },
    ];