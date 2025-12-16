import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {Stack, List, ListItemText} from "@mui/material";
import DeleteUserButton from "./DeleteUserButton";
import AddUserButton from "./AddUserButton";

function getUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => res.data);
}

export default function UsersList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"], // cache key
    queryFn: getUsers
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <Stack spacing={2}>
        <List>
          {data.map(user => <ListItemText key={user.id} primary = {user.name}/>)}
        </List>
        <AddUserButton />
        <DeleteUserButton />
    </Stack>
  );
}
