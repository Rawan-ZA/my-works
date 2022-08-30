<?php

$con = mysqli_connect('localhost', 'root', '', 'dentist_db') or die('connection failed');
if (isset($_POST['submit'])) {
  $name    = mysqli_real_escape_string($con, $_POST['name']);
  $email   = mysqli_real_escape_string($con, $_POST['email']);
  $number  = $_POST['number'];
  $date    = $_POST['date'];
  $insert  = mysqli_query($con, "INSERT INTO`contact_form`(name, email, number, data)
                                 VALUES('$name','$email','$number','$date')") or die('Connection Failed');

  if ($insert) {
    $message[] = 'Appointment Made Successfully';
  } else {
    $message[] = 'Appointment Failed';
  }
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dentist Appointment site</title>
  <link rel="stylesheet" href="./css/style.css" />
  <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css" />
</head>

<body>
  <!-- start header section  -->
  <header class="header fixed-top">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <a href="#home" class="logo">dental<span>Care.</span> </a>
        <nav class="nav">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#services">services</a>
          <a href="#reviews">reviews</a>
          <a href="#contact">contact</a>
        </nav>
        <a href="#contact" class="link-btn"> make appointment</a>
        <div id="menu-btn" class="fas fa-bars"></div>
      </div>
    </div>
  </header>
  <!-- end home section  -->
  <section id="home" class="home">
    <div class="container">
      <div class="row min-vh-100 align-items-center">
        <div class="content text-center text-md-left">
          <h3>let us brighten your smile</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            consequuntur. Quibusdam in cupiditate deserunt consequuntur illo.
          </p>
          <a href="#contact" class="link-btn"> make appointment</a>
        </div>
      </div>
    </div>
  </section>
  <!-- start home section  -->
  <section class="about" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 images">
          <img src="images/about.jpg" class="w-100 mb-5 mb-md-0" />
        </div>
        <div class="col-md-6 content">
          <span>about us</span>
          <h3>True Healthcare For Your Family</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            expedita eius minus incidunt beatae vitae, nulla corporis debitis
            voluptate id totam veniam similique ducimus assumenda rem! Minima
            soluta quae dolore.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- start services section  -->
  <section class="services" id="services">
    <h1 class="heading">Our services</h1>
    <div class="box-container container">
      <div class="box">
        <img src="images/icon1.png" alt="" />
        <h3>alignment specalist</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
          aperiam.
        </p>
      </div>
      <div class="box">
        <img src="images/icon2.png" alt="" />
        <h3>cosmetic dentistry</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
          aperiam.
        </p>
      </div>
      <div class="box">
        <img src="images/icon3.png" alt="" />
        <h3>oral heygiene expert</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
          aperiam.
        </p>
      </div>
      <div class="box">
        <img src="images/icon4.png" alt="" />
        <h3>root conal specalist</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
          aperiam.
        </p>
      </div>
      <div class="box">
        <img src="images/icon5.png" alt="" />
        <h3>live dental divesory</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
          aperiam.
        </p>
      </div>
      <div class="box">
        <img src="images/icone6.png" alt="" />
        <h3>cavity inspection</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
          aperiam.
        </p>
      </div>
    </div>
  </section>
  <section class="process" id="process">
    <h1 class="heading">work process</h1>
    <div class="box-container container">
      <div class="box">
        <img src="images/process1.png" alt="">
        <h3>cosmetic dentistry</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, delectus.</p>
      </div>
      <div class="box">
        <img src="images/process2.png" alt="">
        <h3>prediatric dentistry</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, delectus.</p>
      </div>
      <div class="box">
        <img src="images/process3.png" alt="">
        <h3>dental implants</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, delectus.</p>
      </div>
    </div>
  </section>
  <!-- start reviews section  -->
  <section class="reviews" id="reviews">
    <h1 class="heading">satisfy clients</h1>
    <div class="box-container container">
      <div class="box">
        <img src="images/clinet1.jpg" alt="">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum earum nam at necessitatibus quo, debitis repellendus repudiandae possimus et ea?</p>
        <div class="starts">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <h3>john deo</h3>
        <span>satisfy-cleint</span>
      </div>
      <div class="box">
        <img src="images/client2.jpg" alt="">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum earum nam at necessitatibus quo, debitis repellendus repudiandae possimus et ea?</p>
        <div class="starts">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <h3>john deo</h3>
        <span>satisfy-cleint</span>
      </div>
      <div class="box">
        <img src="images/client3.jpg" alt="">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum earum nam at necessitatibus quo, debitis repellendus repudiandae possimus et ea?</p>
        <div class="starts">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <h3>john deo</h3>
        <span>satisfy-cleint</span>
      </div>
    </div>
  </section>
  <!-- start contact section  -->
  <section class="contact" id="contact">
    <h1 class="heading">make appointment</h1>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
      <?php
      if (isset($message)) :
        foreach ($message as $message) :
          echo `<p class="message">${message}</p>`;
        endforeach;
      endif;
      ?>
      <span> Your name :</span>
      <input type="text" name="name" class="box" placeholder="Enter Your Name" required>
      <span> Your email :</span>
      <input type="email" name="email" class="box" placeholder="Enter Your Email" required>
      <span> Your number :</span>
      <input type="number" name="number" class="box" placeholder="Enter Your Number" required>
      <span>appointment date :</span>
      <input type="datetime-local" name="date" class="box">
      <input type="submit" value="Make Appointment" name="submit" class="link-btn">
    </form>

  </section>
  <!-- start footer section  -->
  <footer class="footer">
    <div class="box-container container">
      <div class="box">
        <i class="fas fa-phone"></i>
        <h3>phone numbers</h3>
        <p>+124-524-3658</p>
        <p>+126-658-648</p>
      </div>
      <div class="box">
        <i class="fas fa-map-marker-alt"></i>
        <h3>our address</h3>
        <p>palestine - gaza - rafah</p>
      </div>
      <div class="box">
        <i class="fas fa-clock"></i>
        <h3>opens hours</h3>
        <p>sun-ther 8:00am-5:00pm</p>
      </div>
      <div class="box">
        <i class="fas fa-envelope"></i>
        <h3>email address</h3>
        <p>rawan@gmail.com</p>
        <p>softwareeng@gmail.com</p>
      </div>
    </div>
    <div class="credit"> &copy; copyright reserved 2022 by <span>eng rawan</span></div>

  </footer>
  <script src="./js/script.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/js/bootstrap.min.js"></script>
</body>

</html>