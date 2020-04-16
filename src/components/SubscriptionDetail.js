import React, { useContext, useState } from "react";
import { SubscriptionContext } from "../contexts/SubscriptionContext";
import EditSubscription from "./EditSubscription";

import { ListGroupItem, Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const SubscriptionDetail = ({ subscription }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const { dispatch } = useContext(SubscriptionContext);

  const formatCycle = (cycle) => {
    switch (cycle) {
      case "weekly":
        return "wk";
      case "monthly":
        return "mo";
      case "yearly":
        return "yr";
      default:
        return "";
    }
  };

  const formatDate = (date) => {
    return date.slice(2).replace(/-/g, "/");
  };

  return (
    <ListGroupItem>
      <Container>
        <Row className="item">
          <Col className="name">{subscription.name}</Col>
          <Col>
            ${subscription.price} / {formatCycle(subscription.cycle)}
          </Col>
          <Col>{formatDate(subscription.date)}</Col>
          <Col className="edit-delete">
            <div>
              <Button color="info" className="edit" onClick={toggle}>
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <EditSubscription
                modal={modal}
                toggle={toggle}
                subscription={subscription}
              />
            </div>
            <Button
              color="info"
              className="delete"
              onClick={() =>
                dispatch({ type: "REMOVE_SUBSCRIPTION", id: subscription.id })
              }
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          </Col>
        </Row>
      </Container>
    </ListGroupItem>
  );
};

export default SubscriptionDetail;
