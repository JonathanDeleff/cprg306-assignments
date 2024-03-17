"use client";

import { HomeButton } from "@/Components/buttons";
import { useUserAuth } from "./_utils/auth-context";
import { ShoppingList } from "@/Components/buttons";

export default function Page() {
  
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  
  function handleSignIn(){
    gitHubSignIn();
  }
  
  function handleSignOut(){
    firebaseSignOut();
  }
 

  return(
    <main className="flex min-h-screen flex-col items-center justify-center">
      
      {!user && <button className="border-2 border-sky-300 p-1 m-1" onClick={handleSignIn}>Sign in with github</button>}
      {user && (
        <div className=" flex flex-col justify-center items-center">
          <p className="text-xl">Welcome {user.displayName}</p>
          <ShoppingList />
          <button className="border-2 border-sky-300 p-1 m-1" onClick={handleSignOut}>Sign out</button>
        </div>
      )}
      <HomeButton />
    </main>
    
    
  )
}