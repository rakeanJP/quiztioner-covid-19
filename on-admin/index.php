<?php
session_start();
/**
 * Jika Tidak login atau sudah login tapi bukan sebagai admin
 * maka akan dibawa kembali kehalaman login atau menuju halaman yang seharusnya.
 */
if ( !isset($_SESSION['user_login']) || 
    ( isset($_SESSION['user_login']) && $_SESSION['user_login'] != 'admin' ) ) {

	header('location:./../login.php');
	exit();
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>quiz</title>
	<link rel="stylesheet" href="css/quiz.css">
</head>
<body>
       

     <h1>Test covid-19</h1>
     
	<div class="quiz_wrapper">
           
           <div class="question" id="questionBox">
           	
           </div>
           
           <div class="options">
           	  <ul id="ul">
           	  	  <li id="op1" onclick="button(this)"></li>
           	  	  <li id="op2" onclick="button(this)"></li>
           	  	
           	  </ul>
           </div>
           <div class="score">
           	   <div class="next">
           	   	  <button type="button" onclick="next()" id="button">Selanjutnya</button>
           	   </div>
           	   <div class="score-card">
           	   	  Hasil : <span id="scoreCard">0</span>
           	   </div>
              <a href="quiz.html" class="tombol-aktif animasi biru">Reset</a>
           <a href="./../logout.php" class="tombol-aktif animasi biru">Logout</a>

           </div>

	</div>
<script src="js/script.js"></script>

</body>
</html>

