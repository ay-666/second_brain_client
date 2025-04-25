interface InputType{
    placeholder: string;
    ref: any
}
const Input = ({placeholder,ref}:InputType) =>{
    return (
        <input ref={ref} className="text-md outline-1 outline-slate-400 rounded-lg p-3"  type="text" placeholder={placeholder}>
        </input>
    )
}

export default Input;