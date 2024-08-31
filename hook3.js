import {useState} from "react";

const MyHookThree = () =>{
    let[fullname,setName] = useState("");
    let[userlist,updateList] = useState([]);
    let[msg,updateMsg] = useState("");


    const save = () => {
        updateList ([...userlist,fullname]);
        updateMsg(fullname + "Added");
        setName("");
    }

    const delUser = (index) =>{
        updateMsg(userlist[index] + "Deleted...");
        userlist.splice(index,1);
        updateList([...userlist]);
    }
    
    return (
        <section>
            <h1> React input and output </h1>
            <p align="center"> {msg} </p>
            <i> your name is : {fullname}</i>
            <p>
                Enter your name 
                <input
                    type="text"
                    onChange={obj=>setName(obj.target.value)}
                    value={fullname}/>
                <button onClick={save}> Save </button>

            </p>
            <p> Total user : {userlist.length}</p>
            {
                userlist.map((name,index)=>{
                    return(
                        <p classNmae="four" key={index}>
                             {name}
                             <br/>
                             <button onClick={delUser.bind(this,index)}> Delete </button>
                        </p>
                    )
                })
            }
        </section>
    )
}
export default MyHookThree;
