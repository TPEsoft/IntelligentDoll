//noinspection SpellCheckingInspection
/**
 * Created by sinaikashipazha on 4/11/16.
 */


/**
 * Created by soj on 5/28/16. 8:14 and dead for a little hope
 * i witre the cuntioncs and libarary i used to fix this
 * 1. https://nodejs.org/api/fs.html
 */


var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
//noinspection SpellCheckingInspection
//var transporter = nodemailer.createTransport('smtps://activation%40tpesoft.com:Activation85tpesoft@smtp.tpesoft.com');
var transporter = nodemailer.createTransport(smtpTransport({
    host: 'tpesoft.com',
    port: 25,
    auth: {
        user: 'activation%40tpesoft.com',
        pass: 'Activation85tpesoft'
    }
}));
var mailOptions = {
    from: '"Intelligent Doll Team " <activation@tpesoft.com>', // sender address
};

var helper = {
    getActivationLink: function (key) {
        return 'http://tpesoft.com/activation/' + key;
    },
    sendMail : function (options) {
        //noinspection JSUnresolvedFunction
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    },
};

        //  TODO here  to
module.exports = {
    sendActivationCodeTo: function (emailAddress, key) {
        


        
        mailOptions.to = emailAddress;
        mailOptions.subject = 'فعال کردن حساب کاربری'; // Subject line
        mailOptions.text = 'با کلیک بر روی لینک زیر حساب کاربری خود را فعال کنید:'; // plaintext body
        mailOptions.html = '<h1>' + "به عمو سلام کن" + '</h1>';// html body 
                    //fs.readFileSync();
        // TODO get template not making template
        mailOptions.text += helper.getActivationLink(key);
        mailOptions.html += '<p>' + helper.getActivationLink(key) + '</p>';

        helper.sendMail(mailOptions);
    },
};
/**
 * sample codes from stack oveflow
 *
 *
 */