interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
    isPassword?: boolean;
}

export default InputProps;