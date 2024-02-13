import { EmailTemplate } from "../../_components/email-template";
import { Resend } from "resend";

const resend = new Resend("re_7sZz1BGg_8sxgzooX7nJ8JhVeKzJNwwqf");

export async function POST() {
  try {
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
