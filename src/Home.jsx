import { useState } from "react";



const Home = () => {

    //let name = ' mario'
    const [name, setName] = useState ('mario')
    const [age, setAge] = useState (25)

    const handleClick = () => {
        setName('luigi')
    }


        

    return ( 
        <div className="home">
           <div> Homepage</div>
           <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click me</button>


        </div>
     );
}
 
export default Home;