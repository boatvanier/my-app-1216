import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {Button} from "@mui/material";

function addUser(newUser) {
  return axios.post("https://jsonplaceholder.typicode.com/users", newUser)
    .then(res => res.data);
}

export default function AddUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // Refresh the user list after adding
      queryClient.invalidateQueries({ queryKey: ["users"] });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name: "New User" });
  };

  return (
          <Button variant="contained" onClick={(e) => handleSubmit(e)}>
            Add User
          </Button>
  );
}

