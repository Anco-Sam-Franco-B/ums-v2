import axios from "axios"
import { useEffect, useState } from "react"

function ViewUsers() {
    const [userAccount, setUserAccount]=useState([])
    const [loading, setLoading] = useState(true)
    const [isClicked, setIsClicked] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState({
        fname: "",
        email: "",
    })
    const [age,setAge]=useState(0)
    const [userId,setUserId]=useState(0)
    const [user,setUser]=useState(0)
    useEffect(()=>{
        axios.get('http://localhost:4000/users')
        .then(res=>{
            setTimeout(()=>setLoading(false), 2000)
           setUserAccount(res.data.usersData)
        })
        .catch(err=>{
            setLoading(false)
            console.log(err)
            alert("Failed to fetch users data")
        })
    }, [userAccount])

    useEffect(()=>{
        document.title = "View Users Page"
    })

    const  handleUpdateStatus=(id, sts)=>{
        const status=sts==='true'?'false':'true'
        axios.patch('http://localhost:4000/update-status/'+ id +'?status='+status)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
                alert("Failed to update status")
            })
    }

    const handleDelete=(id)=>{
        axios.delete('http://localhost:4000/delete-user/'+id)
            .then(res=>{
                console.log(res)
                setUserAccount(userAccount.filter(user=>user.id !== id))
            })
            .catch(err=>{
                console.log(err)
                alert("Failed to delete user")
            })
    }

    const handleAge=(id)=>{
        const user=userAccount.find(user=>user.age === id)
        setAge(user.age)
        setUserId(user.id)
    }
    const handleUpdateAge=(id)=>{
        axios.patch('http://localhost:4000/update-age/'+id+'?age='+age)
            .then(res=>{
                console.log(res)
                setUserId(0)
                setAge(0)
                setIsClicked(false)
            })
            .catch(err=>{
                console.log(err)
                alert("Failed to update age")
            })
    }

    const handleEdit=(id)=>{
        const user=userAccount.find(user=>user.id === id)
        setInput({...input, fname: user.fname, email: user.email})
        setUser(user.id)
    }

    const handleUpdateUser=(id)=>{
        axios.put('http://localhost:4000/update-user/'+id,input)
            .then(res=>{
                console.log(res)
                setUser(0)
                setIsOpen(false)
                setInput({
                    fname: '',
                    email: '',
                })
            })
            .catch(err=>{
                console.log(err)
                alert("Failed to update user")
            })
    }

  return (
    <div>
              <div className="m-5 overflow-y-auto">
            <h1 className='text-4xl font-bold bg-gradient-to-bl from-10% from-black  via-blue-900 to-gray-950  bg-clip-text text-transparent'>User Accounts Info.</h1>
                  {
                      loading? (
                          <div className="flex flex-col items-center justify-center gap-2 mt-28">
                              <div className="w-12 h-12 border-4 border-l-4 border-l-blue-500  animate-spin rounded-full"></div>
                              <h1 className='bg-gradient-to-br from-10% from-black  via-green-500 to-gray-950  bg-clip-text text-transparent animate-pulse font-medium text-3xl'>Loading User Accounts...</h1>
                          </div>
                      ) : (
                          <div className="mt-3 w-full max-md:overflow-x-auto">
                              <table className='w-full'>
                                  <thead>
                                  <tr className='border-b-2  uppercase bg-gradient-to-r from-10% from-gray-900 border-gray-800 px-2 text-gray-100'>
                                      <th className='p-2 bg-gradient-to-br from-10% from-black  via-green-900 to-gray-950  bg-clip-text text-transparent border-r border-l border-t'>ID</th>
                                      <th className='p-2 bg-gradient-to-br from-10% from-black  via-green-900 to-gray-950  bg-clip-text text-transparent'>Fullname</th>
                                      <th className='p-2 bg-gradient-to-br from-10% from-black  via-green-900 to-gray-950  bg-clip-text text-transparent'>Email</th>
                                      <th className='p-2 bg-gradient-to-br from-10% from-black  via-green-900 to-gray-950  bg-clip-text text-transparent'>Age</th>
                                      <th className='p-2 bg-gradient-to-br from-10% from-black  via-green-900 to-gray-950  bg-clip-text text-transparent'>Status</th>
                                      <th className='p-2 bg-gradient-to-br from-10% from-black  via-green-900 to-gray-950  bg-clip-text text-transparent'>Action</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  {
                                      userAccount.map((data, index)=>(
                                          <tr className='text-gray-100 hover:bg-orange-500/5 delay-150 duration-100 cursor-pointer border-b border-b-gray-800 even:border-gray-800' key={index}>
                                              <td className='p-2 border-r border-gray-800 w-[50px] font-medium border-l text-center'>{index + 1}</td>
                                              <td className='p-2 border-r border-gray-800 font-semibold '>
                                                  {isOpen && user===data.id ? (
                                                          <input type="text" className='outline-none w-full p-2  border rounded-md' value={input.fname} onChange={e=>setInput({...input, fname: e.target.value})} />
                                                  ) : (
                                                      <>
                                                          {data.fname}
                                                      </>
                                                  )}
                                              </td>
                                              <td className='p-2 border-r border-gray-800'>
                                                  {isOpen && user===data.id ? (
                                                      <input type="text" className='outline-none w-full p-2  border rounded-md' value={input.email} onChange={e=>setInput({...input, email: e.target.value})} />
                                                  ) : (
                                                      <>
                                                          {data.email}
                                                      </>
                                                  )}
                                              </td>
                                              <td title={isClicked===true && userId===data.id?'Input age is opened':'Click to open input age'} onClick={()=> {
                                                  setIsClicked(true)
                                                  handleAge(data.age)
                                              }} className={`p-2 border-gray-800 border-r w-[70px] text-center font-medium ${data.age>18?'text-blue-500':'text-orange-500'}`}>
                                                  {isClicked && userId===data.id ? (
                                                      <div className='flex gap-2 items-center justify-center'>
                                                          <input title='Press Enter to save' type="text" placeholder='age' className='outline-none p-2 w-[50px] border rounded-md' minLength={1} maxLength={3} value={age} onChange={e=>setAge(e.target.value)} onKeyPress={(key)=>{
                                                              key.key==='Enter'&&handleUpdateAge(data.id)
                                                          }}/>

                                                      </div>
                                                  ) : (
                                                      <>
                                                          {data.age}  {data.age > 18 ? '✔' : '❌'}
                                                      </>
                                                  )
                                                  }
                                              </td>
                                              <td className={`p-2 border-gray-800 border-r  text-center ${data.status==='true'?'text-green-500':'text-red-500'}`}>{ data.status==='true'?'Online':'Offline'}</td>
                                              <td className='space-x-2 border-gray-800 border-r p-2 flex items-center justify-center justify-around'>
                                                  { isOpen && user===data.id ? (
                                                      <button onClick={()=> {
                                                          handleUpdateUser(data.id)
                                                      }}  className='border-none outline-none shadow-xl shadow-zinc-800  rounded-md  bg-gradient-to-br from-10% from-black  via-green-900 to-gray-950   text-gray-400 p-2'>Save</button>
                                                  ) : (
                                                      <button onClick={()=> {
                                                          setIsOpen(true)
                                                          handleEdit(data.id)
                                                      }}  className='border-none outline-none shadow-xl shadow-zinc-800  rounded-md  bg-gradient-to-br from-10% from-black  via-blue-900 to-gray-950   text-gray-400 p-2'>Edit</button>
                                                  ) }
                                                  <button  className='border-none outline-none shadow-xl shadow-zinc-800  rounded-md  bg-gradient-to-br from-10% from-black  via-orange-900 to-gray-950   text-gray-400 p-2' onClick={()=>handleUpdateStatus(data.id, data.status)}>Toggle</button>
                                                  <button  onClick={()=>handleDelete(data.id)} className='border-none outline-none shadow-xl shadow-zinc-800  rounded-md  bg-gradient-to-br from-10% from-black  via-red-900 to-gray-950   text-gray-400 p-2'>Delete</button>
                                              </td>
                                          </tr>
                                      ))
                                  }
                                  </tbody>
                              </table>
                          </div>
                      )
                  }
        </div>
    </div>
  )
}

export default ViewUsers
