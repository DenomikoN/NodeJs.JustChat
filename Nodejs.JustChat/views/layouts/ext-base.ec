<!DOCTYPE html>
<html>
<head>
    <title>
        <%= @title %>
    </title>
     
    <% content 'head' %>
</head>
    <body style="overflow:hidden;">
        <% content %>
        <% content 'scripts' %>
    </body>
</html>



