﻿<% extend 'layouts/ext-base'%>
<% @title = @title||'Сhat' %>

<% block 'head' : %>
	<link rel="stylesheet" href="/extjs/resources/gray/ext-theme-gray-all.css">
<% end %>

<% block 'scripts' : %>
   <script src="/extjs/ext-all-debug.js"></script>
   <script src="/socket.io/socket.io.js"></script>	
   <script src="/extjs/ux/WebSocket.js"></script>	
   <script src="/extjs/resources/gray/ext-theme-gray.js"></script>	
   <script>
	   Ext.Loader.setConfig({
			enabled: true,
			paths: {
				'JustChat': 'JustChat'
			}
		});
   </script>
   <script src="/JustChat.js"></script>
<% end %>
