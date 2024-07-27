import transporter from "$lib/emailSetup/+page.server.js";

export const actions = {
  default: async ({ request }: { request: Request }) => {
    try {
      const formData = await request.formData();
      const email = formData.get("to");
      const subject: String = "We have received your form.";
      const body1 = formData.get("body");
      const body: string =
        "Thank you for submitting the form. Please waiting for further information in the future.";
      let from: String = `Nguyen Thong - ikniz <iknizemail@gmail.com>`;
      const message = {
        from: from,
        to: email,
        subject: subject,
        text: body,
      };

      const message1 = {
        from: from,
        to: "mythonggg@gmail.com",
        subject: `New form submission from ${email}`,
        text: body1,
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

      await sendEmail(message1);

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
