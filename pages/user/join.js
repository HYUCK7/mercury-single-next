import {useState} from 'react'

export default function join(){
    const [user, setUser] = useState({
        userid: '', password: '', email: '', name: '', phone: '', birth: '', address: ''
    })
    const handleChange = e => {
        e.preventdefault()
        const{name, value} = e.target
        setUser({...user, [name]: value})
    }
    return <><h1>회원가입</h1>
    <form onSubmit={
        e => {
            
        }
    }>

    </form>
    </>
}