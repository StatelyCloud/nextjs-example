import { addTodo, deleteTodo, updateTodo } from "@/actions/data";
import { DataContext } from "@/context/data";
import { TODO } from "@/types";
import { Item } from "@stately-cloud/client/data";
import { useCallback, useContext } from "react";

export function useDataAPI() {
  const { setTodoList } = useContext(DataContext);

  const add = useCallback(
    async (job: string, done: boolean) => {
      const todoItem = await addTodo({ job, done });

      setTodoList((currentList) => [...currentList, todoItem]);
    },
    [setTodoList],
  );

  const update = useCallback(
    async (todo: Item<TODO>, done: boolean) => {
      const todoItem = await updateTodo(todo, done);

      setTodoList((currentList) => [...currentList, todoItem]);
    },
    [setTodoList],
  );

  const del = useCallback(
    async (todo: Item<TODO>) => {
      await deleteTodo(todo);

      setTodoList((currentList) => {
        return [...currentList.filter((item) => item.keyPath !== todo.keyPath)];
      });
    },
    [setTodoList],
  );

  return { add, update, del };
}
