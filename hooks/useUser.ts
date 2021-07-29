import { useCallback, useState } from "react";
import axios from "axios";
import { mutate } from "swr";
import { User } from "../model/user";

export const useUser = (initialData: User) => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "*/*",
  };
  const onStatusChange = useCallback(async () => {
    if (initialData.status == "active") {
      status = "locked";
    } else {
      status = "active";
    }
    try {
      await axios.put(
        `http://js-assessment-backend.herokuapp.com/users/` + initialData.id,
        {
          status: status,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      mutate(`http://js-assessment-backend.herokuapp.com/users`);
    } catch (e) {
      console.log(e);
    }
  }, [initialData]);
  return {
    onStatusChange,
  };
};
