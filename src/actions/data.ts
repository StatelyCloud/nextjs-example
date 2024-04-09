"use server";

import { TODO } from "@/types";
import { initServerAuth } from "@stately-cloud/client/auth";
import {
  AppendItem_IDAssignment,
  Item,
  append,
  appendToKeyPath,
  beginList,
  createDataClient,
  del,
  put,
} from "@stately-cloud/client/data";
import { createNodeClient } from "@stately-cloud/client/node";

// For this example, all users share the same todo list. In a real app you would
// have different lists per user.
const LIST_ID = "global";
const ITEM_TYPE = "todo";
const ROOT_PATH = `/todolist-${LIST_ID}`;

// Init the following to dummy values so we
// can still build this app as part of the CI and it won't explode.
// If you are copying this example for yourself you need to set these in env.local.
const STORE_ID = process.env.STATELY_STORE_ID ?? 0;
const CLIENT_ID = process.env.STATELY_CLIENT_ID ?? "test-id";
const CLIENT_SECRET = process.env.STATELY_CLIENT_SECRET ?? "test-secret";

const storeID = BigInt(STORE_ID);

const client = createDataClient(
  createNodeClient({
    authTokenProvider: initServerAuth({ clientID: CLIENT_ID, clientSecret: CLIENT_SECRET }),
  }),
  storeID,
);

export async function getAllTodos(): Promise<Item<TODO>[]> {
  return (await beginList<TODO>(client, appendToKeyPath(ROOT_PATH, ITEM_TYPE))).items;
}

export async function addTodo(todo: TODO): Promise<Item<TODO>> {
  return append(client, ROOT_PATH, ITEM_TYPE, AppendItem_IDAssignment.SEQUENCE, todo);
}

export async function updateTodo(todo: Item<TODO>, done: boolean): Promise<Item<TODO>> {
  return put(client, todo.keyPath, { ...todo.data, done });
}

export async function deleteTodo(todoItem: Item<TODO>): Promise<void> {
  return del(client, todoItem.keyPath);
}
