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
    } catch (e) {
      console.log(e);
    }
    mutate(`http://js-assessment-backend.herokuapp.com/users`);
  }, [initialData]);

  const onSubmitNewUser = useCallback(async () => {
    console.log("initialData ", initialData);
   
    if (initialData || !initialData) {
      try {
        const result = await axios.post(
          `http://js-assessment-backend.herokuapp.com/users`,
          initialData,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log('result ', result)
      } catch (e) {
        console.log(e);
      }
    }

    mutate(`http://js-assessment-backend.herokuapp.com/users`);
  }, [initialData]);
  return {
    onStatusChange,
    onSubmitNewUser,
  };
};
