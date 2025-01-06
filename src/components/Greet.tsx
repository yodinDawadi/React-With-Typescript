type GreetProps ={
    name:string,
    count:number,
    isLoggedin:boolean
}
const Greet = (props:GreetProps) => {
  return (
    <div>
      <h2 className="w-full text-center mt-28">
        {
            props.isLoggedin?`Welcome ${props.name}! You have ${props.count} unread messages`:`Welcome Guest`
        }</h2>
    </div>
  )
}

export default Greet
