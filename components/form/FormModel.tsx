export type FormModel = {
    type: FormType
    placeholder?: string;
    value?: string;
}

export enum FormType {
    TEXT = "text",
    TEXTAREA = "textarea",
    PASSWORD = "password",
}