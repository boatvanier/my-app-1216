import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserList from "./example1218/UserList";
import ExampleHooks from "./example1219/ExampleHooks";

const queryClient = new QueryClient();

function App({name}) {


  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
      <ExampleHooks />
    </QueryClientProvider>
  )
}

export default App
