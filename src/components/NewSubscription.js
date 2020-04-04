import React, { useContext, useState } from "react";
import { SubscriptionContext } from "../contexts/SubscriptionContext";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

const NewSubscription = props => {
  const { addSubscription } = useContext(SubscriptionContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [cycle, setCycle] = useState("weekly");

  const handleSubmit = e => {
    e.preventDefault();
    addSubscription(name, price, cycle);
    setName("");
    setPrice("");
    setCycle("weekly");
    props.toggle();
  };

  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>Add new subscription</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Subscription name"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Price</Label>
            <Input
              type="number"
              placeholder="Subscription price"
              min="1"
              required
              value={price}
              onChange={e => setPrice(+e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Billing cycle</Label>
            <Input
              type="select"
              value={cycle}
              onChange={e => setCycle(e.target.value)}
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Button color="info" className="add">
              Add
            </Button>
            <Button
              color="secondary"
              className="canccel"
              onClick={props.toggle}
            >
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default NewSubscription;