export const fetchData = async (endPoint: string) => {
  const data = await fetch(endPoint);
  const response = await data.json();
  return response;
};
