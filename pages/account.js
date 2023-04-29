import { useSession, signOut } from "next-auth/react";

const account = () => {

    const {data:session, status} = useSession({required:true});

    if(status=== 'authenticated'){
        return(
            <div>
                <p> Welcome, {session.user.name}, {session.user.email} </p>
                <img src={session.user.image} width={70} height={70} alt="user image" />
                <button className="btn" onClick={()=> signOut()} > sign Out </button>
            </div>
        )
    }else{
        return(
            <div>
                <p> You are not sign in</p>
            </div>
        )
    }
    
};

export default account;