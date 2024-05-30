import transporter from "$lib/emailSetup/+page.server.js";

export const actions = {
  default: async ({ request }: { request: Request }) => {
    try {
      const formData = await request.formData();
      const email = formData.get("to");
      const subject = formData.get("subject");
      const body = formData.get("body");
      let from = `Nguyen Thong - Lumina Agency <iknizemail@gmail.com>`;
      const message = {
        from: from,
        to: email,
        subject: subject,
        text: body,
      };

      const sendEmail = async (message: any) => {
        await new Promise((resolve, reject) => {
          transporter.sendMail(message, (err, info) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(info);
            }
          });
        });
      };

      await sendEmail(message);

      return {
        success: "Email is sent",
      };
    } catch (error) {
      return {
        error: "Invalid information",
      };
    }
  },
};
