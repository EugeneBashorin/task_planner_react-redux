import { Layout } from "./Layout/Layout.js";
import { AppBar } from "./AppBar/AppBar.js";
import { TaskForm } from "./TaskForm/TaskForm.js";
import { TaskList } from "./TaskList/TaskList.js";

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};