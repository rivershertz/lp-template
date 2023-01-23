const BASE_URL = "https://public.crtmadness.net/api/public/crmIntegration";

export const postLead = async (newLead) => {
  const res = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newLead),
  });
  return res;
};
