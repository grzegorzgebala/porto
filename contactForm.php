<?php 

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    if (empty($name) || empty($mailFrom) || empty($message)) {
        echo "You did not fill the form!";
    }
    else {
        if(!filter_var($mailFrom, FILTER_VALIDATE_EMAIL)) {
            echo "You did not fill valid mail!";
        }
        else {
            $mailTo = "g.gebala@protonmail.com";
            $headers = "From: ".$name;
            $txt = "You have received an e-mail from ".$mailFrom.".\n\n".$message;
        
            mail($mailTo, $headers, $txt);
            header("Location: index.html?mailsend");
        }
    }
}
else {
    echo "You did not fill the form!";
}
?>