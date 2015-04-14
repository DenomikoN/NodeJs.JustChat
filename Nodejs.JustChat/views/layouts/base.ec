<!DOCTYPE html>
<html>
<head>
    <title>
        <%= @title %>
    </title>

    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/css/bootstrap-theme.min.css">

    <link href="stylesheets/style.css" rel="stylesheet">

    <% content 'head' %>
</head>
    <body cz-shortcut-listen="true">
        <% include 'layouts/_navbar' %>
        <div class="container">
           <% content %>
        </div>


        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.13.1/jquery.validate.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.js"></script>

        <% content 'scripts' %>

        <script>
            $(document).ready(function () {
                $('form').validate();
            });
        </script>

    </body>
</html>



