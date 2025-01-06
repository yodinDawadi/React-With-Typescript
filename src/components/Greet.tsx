type greetProps ={
    name:string,
    count:number
}
const Greet = (props:greetProps) => {
  return (
    <div>
      <h2 className="w-full text-center mt-28">Welcome {props.name}! You have {props.count} unread messages</h2>
    </div>
  )
}

export default Greet
