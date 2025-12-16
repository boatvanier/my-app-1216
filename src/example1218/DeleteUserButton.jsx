import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {Button} from "@mui/material";

function deleteUser(id) {
  return axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
}

export default function DeleteUserButton({ userId = 1}) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    }
  });

  return (
    <Button variant="contained" onClick={() => mutation.mutate(userId)}>
      Delete User
    </Button>
  );
}
