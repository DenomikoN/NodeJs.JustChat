<% extend 'layouts/base' %>
<h3>
    <span class="label label-danger"><%= @error.status %></span>
</h3>
<pre><%= @error.stack %></pre>