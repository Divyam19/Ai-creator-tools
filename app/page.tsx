import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
      <div>
        <form>
          <label>Login</label>
          <br/>
          <label>Enter Email</label>
          <br/>
          <input className='bg-gray-300' type='text'/>
          <br/>
          <label>Enter Password</label>
          <br/>
          <input className='bg-gray-300' type='password'/>
          <br/>
          <Button type='submit' className='border-spacing-2'>Submit</Button>
          <Button type='reset' className='border-spacing-2'>Reset</Button>
        </form>
        <Button>Login/signup using google</Button>
      </div>
    )
}

const LandingPage = () => {
    
  const [value,setValue]=useState('')
const handleClick=()=>{
  signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
  })
}

useEffect(()=>{
  setValue(localStorage.getItem('email'))
})

return (
  <div>
    {value?<DashboardPage/>:
    <Button onClick={handleClick}>Signin with google</Button>}
  </div>
)
}