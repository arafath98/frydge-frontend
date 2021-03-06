import { useContext } from "react";
import { Row, Col } from "react-bootstrap";

import { Context } from "../../Context";
import Delete from "../UI/Delete";
import RoundedContainer from "../UI/RoundedContainer";

import Image from "./Image";
import Info from "./Info";

import styles from "./Item.module.css";

export default function Item(props) {

    const { theme, colors, setItemsData, itemsData } = useContext(Context);

    const deleteItemHandler = (id) => {

        const token = window.localStorage.getItem("token");

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "token": token,
            },
            body: JSON.stringify({ id })
        }

        fetch("https://sleepy-sierra-88173.herokuapp.com/https://frydgeapp.herokuapp.com/items/delete/", options)
            .then(response => response.json())
            .then(data => {
                if (data.message === "Item not found.")
                    return
                setItemsData((previousData) => {
                    return previousData.filter(data => data.id !== id);
                });
            })
            .catch(err => err)
    };

    return (
        <RoundedContainer background={colors[theme].secondary}>
            <Row className="justify-content-center">
                <Col xs={4}>
                    
                    <Image src={props.image} />
                </Col>

                <Col xs={8}
                    className={styles.details}>
                      
                    <Info
                        name={props.name}
                        expiry={props.expiry}
                    />

                    <Delete onClick={() => deleteItemHandler(props.id)} />
                </Col>
            </Row>
        </RoundedContainer>
    );
};
