import { useCallback, useState } from "react";
import axios from "axios";
import { mutate } from "swr";
import { User } from "../model/user";

export const useUser = (initialData: User) => {
  const [loader, setLoader] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const onStatusChange = async () => {
    if (initialData.status == "active") {
      status = "locked";
    } else {
      status = "active";
    }
    setLoader(true);
    try {
      await axios.put(
        `https://js-assessment-backend.herokuapp.com/users/` + initialData.id,
        {
          status: status,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    } catch (e) {}
    mutate(`https://js-assessment-backend.herokuapp.com/users`);
    await delay(3000);
    setLoader(false);
    setSnackbar(true);
  };

  const onSubmitNewUser = async () => {
  
    if (initialData || !initialData) {
      try {
        const result = await axios.post(
          `https://js-assessment-backend.herokuapp.com/users`,
          {
            first_name: initialData.first_name,
            last_name: initialData.last_name,
            status: "active",
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log("result ", result);
      } catch (e) {
        console.log(e);
      }
    }
    console.log("saliendo de ahi");
    mutate(`https://js-assessment-backend.herokuapp.com/users`);
  };

  const editUser = useCallback(async () => {
    if (initialData || !initialData) {
      try {
        const result = await axios.put(
          `https://js-assessment-backend.herokuapp.com/users/` + initialData.id,
          {
            first_name: initialData.first_name,
            last_name: initialData.last_name,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      } catch (e) {
        console.log(e);
      }
    }

    mutate(`https://js-assessment-backend.herokuapp.com/users`);
  }, [initialData]);
  return {
    onStatusChange,
    onSubmitNewUser,
    editUser,
    snackbar,
    loader,
  };
};
