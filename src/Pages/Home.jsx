import {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home(){

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [users, setUser] = useState([]);

    const fetchUsers = async () => {
        if(search === ""){
            setUser([])
        }
        if(search !== ""){
            axios.get("http://localhost:4000/search?q=" + search)
                .then(res=>{
                    setLoading(false);
                    setUser(res.data.query);
                }).catch(err=>{
                setLoading(false);
                console.log(err)
                alert("Error occured while retrieving users");
            })
        }
    }

    useEffect(()=>{
        fetchUsers()
    })
    return (
        <div className='w-full h-full flex flex-col justify-center items-center '>
            <h2 className='flex-1 text-4xl font-bold bg-gradient-to-br from-10% from-black  via-blue-700 to-gray-950  bg-clip-text text-transparent '>Welcome,</h2>
            <h1 className='text-7xl text-center font-bold bg-gradient-to-br from-10% from-black  via-red-700 to-gray-950  bg-clip-text text-transparent '>User Management System (UMS) <br/> Platform</h1>

            <div className='flex items-center flex-col  gap-4 mt-12 justify-center w-[500px]'>
                <h2 className='font-thin'>Find any user</h2>
                <input value={search} onChange={e=>setSearch(e.target.value)} id='search' className='border-none outline-none shadow-xl shadow-zinc-800  rounded-md  bg-gradient-to-br from-10% from-black w-full  via-zinc-900 to-gray-950   text-gray-400 py-3 font-thin px-5' placeholder='Search any users name....'/>
            </div>
            {search!=='' ? (
                <div className='flex h-auto flex-col bg-gradient-to-br from-10% from-black  via-zinc-900 shadow-xl shadow-zinc-600 to-gray-950 gap-4 mt-12 p-3 rounded-b-md absolute top-[21.4rem] w-[500px]'>
                    <h2 className='font-thin'>Results for <span className='bg-gradient-to-br from-10% from-black  via-blue-700 to-gray-950  bg-clip-text text-transparent font-bold text-xl'>{search}</span></h2>
                    <div className='max-h-[200px] overflow-y-auto'>
                        {
                            users.length === 0 ? (
                                <div className="flex flex-col items-center justify-center gap-2 mt-2">
                                    <h2 className='font-thin'>User not found with this name "<span className='bg-gradient-to-br from-10% from-black  via-blue-700 to-gray-950  bg-clip-text text-transparent font-bold text-xl'>{search}</span>"</h2>
                                    <h1>Try to create new user with that name <Link className='bg-gradient-to-br from-10% from-black  via-green-700 to-gray-950  bg-clip-text text-transparent font-bold text-xl'  to='/create'>Click hereP </Link></h1>
                                </div>
                            ) : (
                                <ul>
                                    {
                                        users.map((user, index)=>(
                                            <li key={index} className='bg-gradient-to-br from-10% rounded-xl from-black  via-zinc-700 mb-2 to-gray-950 w-full p-2 px-4'>{user.fname}</li>
                                        ))
                                    }
                                </ul>
                            )
                        }
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Home