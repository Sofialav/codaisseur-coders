export function developersFetched(developers) {
  console.log("data fetched");
  return {
    type: "FETCHED_DEVELOPERS",
    payload: developers
  };
}
