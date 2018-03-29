
<?php
  $msg = "";
  if(isset($_POST['submit'])){
    require 'phpmailer/get_oauth_token.php';

    function sendEmail($to, $from, $fromName, $body){
        $mail = new PHPMailer();
        $mail->setFrom($from, $fromName);
        $mail->addAddress($to);
        $mail->Subject = 'Contact Form - Email';
        $mail->Body = $body;
        $mail->isHTML(false);

        return $mail->send();//returns if email is sent or not
        $msg = '<script>alert("Email Sent!");</script>';
    }//function end
    $name = $_POST['username'];
    $email = $_POST['email'];
    $body = $_POST['body'];
      if(sendEmail('gabrielfontanilla@gmail.com', $email, $username, $body) ){
        $msg='Email Sent';
      }
        else
        $msg ='Email Failed';
  }//if end
?>
<html>
  <head>
    <meta charset="utf-8">
    <title>Contact</title>
    <style media="screen">
      input,textarea{
        width: 250px;
        height: 27px;
        margin-bottom: 10px;
      }
      textareaT{
        height: 100px;
        resize: vertical:
      }
      body {
        text-align: center;
        margin-top: 250px;
      }
    </style>
  </head>
  <body>
    <form action="contact.php" method="post" enctype="multipart/form-data" required>
      <input type="text" name="username" placeholder="First and Last Name..." required><br>
      <input type="text" name="email" placeholder="Email.." required><br>
      <input type="text" name="phone-number" placeholder="(808)123-4567" required><br>
      <textarea name="body" required></textarea><br>
      <input type="submit" name="submit" value="Send">
    </form>
    <?php
    echo $msg;
    ?>
  </body>
</html>