// MOhammed qaasim desai 
// 0776412

import { Card, Col } from "antd";



export default function Data(props){
    return(
        <div>
            <Col className="gutter-row" xs={24} xl={8}>
                    <Card
                    title= {props.name}
                    style={ { width: 300, background: '#32CD32', padding: '20px 10px', fontSize:'15px'} }>

                    <p><b>Email:</b> {props.email}</p>
                    <p><b>Website:</b> {props.website}</p>
                    <p><b>phone:</b> {props.phone}</p>

                    </Card>
            </Col>
        </div>
    );
}