<?php 
$Username=$_POST['Username'];
$Password=$_POST['Password'];
$con=mysqli_connect('localhost','root');
mysqli_select_db($con,'Pavan_Jain');
$q="insert into registration (username,password) values ('$Username','$Password')";
mysqli_query($con,$q);
mysqli_close($con);
?>
<html>
<head>
<link rel="stylesheet" type="text/css" href="MyStyle.css"/>
<style>
h3
{
	color:red;
	text-align:center;
	text-shadow:2px 3px 3px black;
	font-size:30px;
	font-family:calibri;
}
</style>
</head>
<body>
<h3 id="phppage">Hi <?php echo $Username;?> , you have successfully registered to this website.<br>You will be 
notified through mail for all new latest updates.
</body>
</html>