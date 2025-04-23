
import Input from '../components/ui/Input';
import { Button } from '../components/ui/Button';

const SignUp = () => {
  return (
    <div className='w-screen h-screen bg-gray-200 flex justify-center items-center'>
        <div className='bg-white min-w-48 p-6 flex flex-col gap-8 rounded-lg shadow-md outline-1 outline-gray-400/30'>
            <div className='text-lg font-semibold flex justify-start'><h2>SignUp</h2></div>
            <Input placeholder='Username'></Input>
            <Input placeholder='Password'></Input>
            <div className='flex justify-center'><Button isFullWidth={true} variant='primary' size='md' text='Sign Up' /></div>
        </div>

    </div>
  )
}

export default SignUp;