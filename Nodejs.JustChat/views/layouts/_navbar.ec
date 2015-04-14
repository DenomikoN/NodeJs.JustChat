<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">JustChat</a>
        </div>
        <div class="collapse navbar-collapse">
            <% if @user : %>
                <form action="auth/logout" method="POST">
                    <button type="submit" class="btn btn-primary navbar-btn navbar-right">Logout</button>
                </form>
                <p class="navbar-text navbar-right" style="color:#fff; margin-right:5px;">Signed in as [<%= @user.username %>]</p>
            <% else : %>
                <button type="button" class="btn btn-success navbar-btn navbar-right"  data-toggle="modal" data-target="#myModal">Sign in</button>
            <% end %>
        </div>
        <!--/.nav-collapse -->
    </div>
</div>
<% include 'modal/_logon' %>