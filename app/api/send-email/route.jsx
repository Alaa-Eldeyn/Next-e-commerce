// import { EmailTemplate } from "../../_components/email-template";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// export async function POST() {
//   try {
//     console.log(resend);
//     const data = await resend.emails.send({
//       from: "onboarding@resend.dev",
//       to: ["alislami474@gmail.com"],
//       subject: "Hello world",
//       react: EmailTemplate({ firstName: "John" }),
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }
