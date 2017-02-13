var n = <%- data.length %>;
        var captures = <%- data%>
        for(var i=0; i<n;i++)
            L.geoJSON(captures[i]).addTo(map);

