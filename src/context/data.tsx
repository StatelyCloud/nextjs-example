"use client";

import { Item } from "@stately-cloud/client/data";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { TODO } from "../types";

export const DataContext = createContext<{
  todoList: Item<TODO>[];
  setTodoList: Dispatch<SetStateAction<Item<TODO>[]>>;
}>({
  todoList: [],
  setTodoList: (_todoList: SetStateAction<Item<TODO>[]>) => {},
});

export function DataProvider({
  initialList,
  children,
}: {
  children: ReactNode;
  initialList: Item<TODO>[];
}) {
  const [todoList, setTodoList] = useState<Item<TODO>[]>(initialList);
  return <DataContext.Provider value={{ todoList, setTodoList }}>{children}</DataContext.Provider>;
}
