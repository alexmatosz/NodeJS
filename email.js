var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alexmatos0620@gmail.com',
    pass: 'ncom gqqe ipmd kgkw'
  }
});

var mailOptions = {
  from: 'alexmatos0620@gmail.com',
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