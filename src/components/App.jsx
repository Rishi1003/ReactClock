import React , {useState} from "react";
import Buttons from "./Buttons";
import Display from "./Display";

const d = new Date();
let time = d.toLocaleTimeString();
var clicked = 0;

function App()
{
    const [intial , newValue] = useState(time);
    const [inter , interv] = useState();
    const [now , updateNow] = useState(0);
    function start(){

        if(now === 0)
        {
            updateNow(1);
            interv(setInterval(update,1000));
            console.log("helo");
            console.log("test");
        }
        else
        {
            console.log("nobro");
        }

    }
    function update()
    {
        let newtime = new Date().toLocaleTimeString();
        console.log("time hook updated");
        newValue(newtime);
    }
    function stop()
    {
        clearInterval(inter);
        updateNow(0);
    }
    return(
        <div className="container">
            <Display time={intial}/>
            <Buttons onClick={start} name="ON"/>
            <Buttons onClick={stop}name="OFF"/>
        </div>
    );
}

export default App;