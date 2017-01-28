<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Topology</title>
        <script src="web/js/jquery.js"></script>    
    </head>
    <body>
        <form>
            <p>Topology</p>
            <input id="nCirc" name="ncirc" size="" placeholder="Node Count" onkeypress="return event.charCode >= 48 && event.charCode <= 57" />
            <input type="button" value="Show Topology" class="showTopology" /> <input type="reset" value="reset" /><br/><br/>
            <canvas id="canvas" width="1200" height="1200" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas> 
        </form>

    </body>

    <script src="web/js/custom.js"></script>
</html>


