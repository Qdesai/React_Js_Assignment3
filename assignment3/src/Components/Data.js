
import { Card, Col } from "antd";



export default function Data(props){
    return(
        <div>
            <Col className="gutter-row" xs={24} xl={8}>
                    <Card
                    title= {props.name}
                    style={ { width: 300, background: '#32CD32', padding: '20px 10px', fontSize:'18px'} }>

                    <p>Email: {props.email}</p>
                    <p>Website: {props.website}</p>
                    <p>phone: {props.phone}</p>

                    </Card>
            </Col>
        </div>
    );
}