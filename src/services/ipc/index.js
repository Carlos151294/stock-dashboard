export const fetchIPCHistory = async () => {
  const response = await fetch(
    'https://run.mocky.io/v3/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e'
  );
  return await response.json();
};
