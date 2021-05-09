import nodemailer from 'nodemailer';


class EmailController {
    async index(req, res) {
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'souzasandre21@gmail.com', // TODO: your gmail account
            pass: 'xicvcufyqtqbchkd' // TODO: your gmail password
        }
    });

    let mailOptions = {
        from: 'souzasandre21@gmail.com', // TODO: email sender
        to: 'and_blah@hotmail.com', // TODO: email receiver
        subject: 'Contratação de serviço - ' + req.body.subject,
        text: 'Olá, me chamo ' + req.body.name + '\n' + 'Mensagem ->' + req.body.message + '\nSegue meu email: ' + req.body.email
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log(err);
            return log('Error occurs');
        }
        res.json({message: "Email enviado com sucesso!!!"});
        return;
    });
  }
}


export default new EmailController();