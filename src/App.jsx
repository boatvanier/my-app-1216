import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserList from "./example1218/UserList";

const queryClient = new QueryClient();

function App({name}) {


  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  )
}

export default App
