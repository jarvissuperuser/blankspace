const functions = require('firebase-functions');
const cors = require('cors')({
  origin: ['http://localhost:4200', 'https://blankspace.co.za', 'https://www.blankspace.co.za']
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.bookArtist = functions.https.onRequest(async(request, response) => {

  const {email, name, eventDate, message, artist } = request.body;
  const {sg} = functions.config();
  const {tkn} = sg?sg:{tkn:""}
  return cors(request, response, async () => {
    const sg = require('@sendgrid/mail');
    sg.setApiKey(tkn);
    let emailR = {
      to: `ano@blankspaces.co.za, michael@blankspaces.co.za`,
      from: `noreply@mukuwemoyoengineering.co.za`,
      subject: `Booking`,
      text: `${name} ${email} requested for a booking for ${artist} ${eventDate} ${message} `,

      html: `
        <h2><b>Booking Request</b></h2><br>
        <p>${name} ${email} requested for a booking for ${artist} ${eventDate} ${message}
        thank you.
        </p>
       `
    };
    return sg.send(emailR)
      .then(() => {
        return response.status(200).send({ msg: 'ok' });
      })
      .catch(e => {
        return response.status(400).send(e);
      });
  });
});
