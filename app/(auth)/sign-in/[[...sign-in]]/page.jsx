import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <>
      <div className="absolute top-10 item-center">
        <SignIn/>
      </div>
    </>
  
  )
  

}