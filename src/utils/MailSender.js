import emailjs from "@emailjs/browser";

class MailSender {
  constructor() {
    this.TEMPLATE_ID = "template_lr17rp1";
    this.PUBLIC_KEY = "jMx5bzPWmlYNaSvaO";
    this.SERVICE_ID = "service_iinsw15";
  }

  init() {
    emailjs.init({
      publicKey: this.PUBLIC_KEY,
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    });
  }

  sendMessage(userName, email, message) {
    const templateParams = {
      from_name: userName,
      from_email: email,
      message: message,
    };

    return emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams);
  }
}

export default new MailSender();
