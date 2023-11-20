// Complete the HomePage Component and export it
import { Form } from "./Form";
var name = "Your name";
var email = "xyz@email.com";


export function HomePage() {
  return (
    <div className="Homepage">
      <h1>HomePage</h1>
      <Form/>
    </div>
  );
}

export {name, email};
