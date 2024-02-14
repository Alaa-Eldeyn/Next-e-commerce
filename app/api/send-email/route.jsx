import { EmailTemplate } from "../../_components/email-template";
import { Resend } from "resend";

const resend = new Resend("re_V4cmaZGf_DknxXDLaCpWWi6S2GAyAkMsv");
export async function POST() {
  try {
    console.log(resend);
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["alislami474@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
