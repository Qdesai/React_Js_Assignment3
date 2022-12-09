// MOhammed qaasim desai 
// 0776412

import { Card, Col, Button, Row, Divider } from "antd";
import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import App from "../App";



export default function Data(props){
    return(
        <div>
          
        
          <Button>
                <Link to="/login">Logout</Link>
            </Button>

            
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