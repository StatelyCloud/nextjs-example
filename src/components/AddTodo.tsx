"use client";

import { useDataAPI } from "@/hooks/useDataAPI";
import { ChangeEvent, useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function AddTodo() {
  const { add } = useDataAPI();
  const [currTodo, setCurrTodo] = useState("");

  const handleSubmit = useCallback(
    async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (currTodo == "") {
        return;
      }
      await add(currTodo, false);
      setCurrTodo("");
    },
    [currTodo, add],
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrTodo(e.target.value);
  }, []);

  return (
    <div className="content">
      <Form className="content" onSubmit={handleSubmit}>
        <Form.Control
          className={"text-input"}
          value={currTodo}
          onChange={handleChange}
          placeholder="Add a TODO!"
          autoFocus
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
