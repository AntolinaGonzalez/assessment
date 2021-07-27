import useSWR from "swr";

const fetcher = (path: RequestInfo) =>
  fetch(path, { headers: { "Content-Type": "application/json" } }).then((res) =>
    res.json()
  );
export const users = () => {
  const { data, error } = useSWR(
    `http://js-assessment-backend.herokuapp.com/users`,
    fetcher
  );

  return {
    loader: !data ? true : false,
    usersInfo: data,
  };
};
