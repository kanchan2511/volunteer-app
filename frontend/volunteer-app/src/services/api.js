export const submitVolunteer = async (data) => {
  const response = await fetch("https://volunteer-app-66mb.onrender.com", {
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
