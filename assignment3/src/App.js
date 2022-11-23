
// MOhammed qaasim desai 
// 0776412


import React, { useState, useEffect} from "react";
import { Row, Col,  Divider} from "antd";
import axios from "axios";


import Data from "./Components/Data";

function App(){
    const [infos, setinfos] = useState(null);
    const [status, setStatus] = useState(false);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        setinfos(response.data)
        setStatus(true)
        }).catch(()=>{
            console.log("Api Failed!!")
            setStatus(false)
        })
    },[])



    return(
        <div>
            <Row gutter={16}>
                <Col className="gutter-row">
                    <center><h1>Assignment-3 Mohammed Qaasim Desai</h1></center>
                </Col>
            </Row>
            <Divider orientation="Center">Profiles</Divider>

            <Row gutter={16}>
                 {status && infos.map((infosObj)=>{
                    return <Data name={infosObj.name} email={infosObj.email} website={infos.website} phone={infosObj.phone}/>
                })}
            </Row> 
        </div>
    )
}

export default App;