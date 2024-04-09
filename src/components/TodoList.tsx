"use client";

import { DataContext } from "@/context/data";
import { useDataAPI } from "@/hooks/useDataAPI";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

export function TodoList() {
  const { todoList } = useContext(DataContext);
  const { del, update } = useDataAPI();

  return (
    <ListGroup className="content list-wrapper">
      {todoList.map((item) => (
        <ListGroup.Item key={item.keyPath} className={"list-item"}>
          <Form.Check className={"list-checkbox"}>
            <Form.Check.Label className="list-item-label">
              <Form.Check.Input
                checked={item.data.done}
                onChange={async (e) => {
                  await update(item, e.target.checked);
                }}
                type="checkbox"
              />
              {item.data.job}{" "}
              <span style={{ color: "#aaa" }}>
                Last Updated: {item.metadata.lastModifiedAt.toLocaleString()}
              </span>
            </Form.Check.Label>
          </Form.Check>
          <Button
            onClick={async (e) => {
              await del(item);
            }}
            variant="danger"
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
