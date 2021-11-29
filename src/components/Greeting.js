function Greeting(props) {
  // const message = 'Hello Pietro';
  console.log(props);
  return (
    <div>
      <u>Hello {props.firstName}</u>
    </div>
  );
}

export default Greeting;
