import { getAllTodos } from "@/actions/data";
import { AddTodo } from "@/components/AddTodo";
import { TodoList } from "@/components/TodoList";
import { DataProvider } from "@/context/data";
import { TODO } from "@/types";
import { Item } from "@stately-cloud/client/data";

export default async function Todo() {
  // prefetch the initial todos on the server and pass them
  // into the data provider

  let initialList: Item<TODO>[] = [];
  try {
    initialList = await getAllTodos();
  } catch (e) {
    console.error(e);
  }
  return (
    <DataProvider initialList={initialList}>
      <AddTodo />
      <TodoList />
    </DataProvider>
  );
}
