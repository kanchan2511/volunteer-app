export const submitVolunteer = async (data) => {
  const response = await fetch("http://localhost:5000/api/volunteers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.error || "Submission failed");
  }

  return result;
};
