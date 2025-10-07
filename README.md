<img width="491" height="685" alt="image" src="https://github.com/user-attachments/assets/972b3ce6-cbf7-4669-8a6c-47c6a2249234" />


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### **Description / Data Flow**

- **TodoApp**
- Root component for To-Do List.
- Has no state of its own, just renders `TodoList`.

- **AddTodoForm**
- **State:** `input` (text of new task)
- **Props:** `onAdd` – callback for passing new task to `TodoList`.
- Action: when button is pressed or Enter is pressed, `onAdd(input)` is called and the input field is cleared.

- **TodoList**
- **State:** `todos` (array of `{id, text}` objects)
- **Props:** none
- Action: adds new tasks (via `addTodo`), removes tasks (via `removeTodo`).
- Renders `AddTodoForm` and list of `TodoItem`.

- **TodoItem**
- **State:** `completed` (boolean – whether the task is completed)
- **Props:**
- `todo` – task object `{id, text}`
- `onRemove` – callback to remove the task from the TodoList
- Action: toggles `completed` on checkbox, deletes the task on Delete button.

### **Data Flow**

- **Props down (from parent to child):**
- `onAdd` is passed from `TodoList` → `AddTodoForm`
- `todo` and `onRemove` are passed from `TodoList` → `TodoItem`

- **Callbacks up (from child to parent):**
- `AddTodoForm` calls `onAdd(input)` → `TodoList` adds a new todo
- `TodoItem` calls `onRemove()` → `TodoList` removes the todo
