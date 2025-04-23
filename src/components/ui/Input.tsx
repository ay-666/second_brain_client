interface InputType{
    placeholder: string
}
const Input = ({placeholder}:InputType) =>{
    return (
        <input className="text-md outline-1 outline-slate-400 rounded-lg p-2"  type="text" placeholder={placeholder}>
        </input>
    )
}

export default Input;