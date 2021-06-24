import axios from "axios";

const api = axios.create({
  baseURL:
    "https://apilayer.net/api/check?access_key=66a89d3a056eb4dc7a023a7c507e8a77&email=",
});

export async function validateEmail(email: string) {
  const { data } = await api.get(email);

  if (data.did_you_mean && data.did_you_mean !== "")
    throw new Error(
      `This email is invalid you didn't mean ${data.did_you_mean}`
    );

  if (data.mx_found && data.format_valid) return true;
  else throw new Error("This email is invalid");
}
