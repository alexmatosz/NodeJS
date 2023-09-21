var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alexmatos2006@outlook.com',
    pass: 'ncom gqqe ipmd kgkw'
  }
});

var mailOptions = {
  from: 'alexmatos2006@outlook.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'ncom gqqe ipmd kgkw'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});