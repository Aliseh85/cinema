<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="../css/subscibe.css"> 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/> 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<script src="../jquery/newsleter.js"></script>
<title>שמירת בסיס נתונים</title>
</head>
<body>
<header>
        <nav>
       
            <li class="logo"><a class="fas fa-film"></a>iSratim</li>
    
            
            <input type="checkbox" id="box-1">
            <label id="toggler" for="box-1">
                <span>תפריט<i class="fas fa-bars"></i></span>
            </label>
    
            
            <ul>
                <li><a href="../index.html">דף בית</a></li>
                <li><a href="#newsleter">ניוזלטר</a></li>
                <li><a href="#footer">אודות</a></li>
                
            </ul>
    
            
            <div id="navbar-form">
                <input type="checkbox" id="box-2">
                <form action="" id="search-form">
                    <input type="search" placeholder="חיפוש סרטים" id="search-bar">
                    <button id="search-btn" type="submit">
                        <span><i class="fas fa-search"></i></span>
                    </button>
                </form>
    
                <label for="box-2" id="search-form-opener">
                    <span><i class="fas fa-search"></i></span>
                </label>
    
                <label for="box-2" id="search-form-closer">
                    <span><i class="fas fa-times"></i></span>
                </label>
            </div>
        </nav>  
        
    </header> 





    <main>
        <br>
        <br>
        <br>
        <br>
        <br>
             
      <section>
          <h1 id="inputSQL">
      <?php
    // Connect to the database
    $servername = "localhost";
    $username = "alise_amr";
    $password = "12345";
    $dbname = "alise_mydatabase";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) 
    {
        die("Connection failed: " . $conn->connect_error);
    } 
    echo "הפרטים התקבלו<br>";

    if (isset($_POST['submit'])) 
    {
        // Get the form data
        $phone = $_POST['phone'];
        $id = $_POST['id'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $subscription_range = $_POST['subscription_range'];

        // Validate and sanitize the inputs
        if (!preg_match("/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/", $phone)) {
            echo "Invalid phone number format";
            exit;
        }
        if (!preg_match("/^[0-9]{9}$/", $id)) {
            echo "Invalid ID format";
            exit;
        }
        if (!preg_match("/^[a-zA-Z0-9]{3,}$/", $username))
        {
            echo "Invalid username format";
            exit;
        }
        if (strlen($password) < 6)
        {
            echo "Password must be at least 6 characters long";
            exit;
        }
        $phone = filter_var($phone, FILTER_SANITIZE_STRING);
        $id = filter_var($id, FILTER_SANITIZE_STRING);
        $username = filter_var($username, FILTER_SANITIZE_STRING);
        $password = filter_var($password, FILTER_SANITIZE_STRING);
        $subscription_range = filter_var($subscription_range, FILTER_SANITIZE_STRING);

        // Hash the password for security
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO users (phone, id, username, password, subscription_range)
                VALUES ('$phone', '$id', '$username', '$hashed_password', '$subscription_range')";

        if ($conn->query($sql) === TRUE) {
            echo ".\n!בוצע רישום בהצלחה";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    $conn->close();
?>

      </h1>
      <br>
      </section>
      
      <section class="theater">
          
          <img src="../images/Jiangnan_Photography.jpg" class="img1">
          
      </section>
    </main>
    <br>
    <br>
    <br>
    
    <footer id="footer">
        <div class="container567"> 
            <div class="row">
                <div class="footer-col">
                    <h4>אודות</h4>
                    <ul>
                        <li><a href="">בדיקה/ביטול הזמנה</a></li>
                        <li><a href="">צור קשר</a></li>
                        <li><a href="">iSratim אודות</a></li> 
                        <li><a href="">מידע כללי</a></li>
                        <li><a href="">המתחמים שלנו</a></li>
                    </ul>

                </div> 
                <div class="footer-col">
                    <h4>קישורים</h4>
                    <ul>
                        <li><a href="">כנסים ואירועים</a></li>
                        <li><a href="">דרושים</a></li> 
                        <li><a href="">יום הולדת מהסרטים</a></li> 
                        <li><a href="">פרסום וקד"מ</a></li> 
                        
                        <li><a href=""></a></li>

                        
                    </ul>

                </div> 
                <div class="footer-col">
                    <h4>תנאי שימוש</h4>
                    <ul>
                        <li><a href="">תקנון</a></li> 
                        <li><a href="">זכויות</a></li> 
                        <li><a href="">נגישות</a></li>
                    </ul>

                </div> 
                <div class="footer-col">
                    <h4>הרשם לניוזלטר</h4>
                   <form action="" id="newsleter">
                    <input type="text" placeholder="שם מלא" class="inputName" required>
                    <input type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="דואר אלקטרוני" class="InputMail" required>
                    <input type="submit" value="שלח" class="InputSubmit">
                   </form>

                </div>


            </div>  
            <hr>
            <div class="row">
                <div class="col"> 
                    <p>&#169; 2023 Created by Razi,Ali,Amir</p>

                </div> 
                <div class="socialIcons"> 
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>  
                    <a href=""><i class="fa-brands fa-tiktok"></i></a>


                </div>

            </div>


        </div>
    </footer>




</body>
</html>
