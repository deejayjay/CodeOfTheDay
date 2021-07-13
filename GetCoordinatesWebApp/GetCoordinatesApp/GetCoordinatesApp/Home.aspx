<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="GetCoordinatesApp.Home" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
        name="author"
        content="Deepak Joy Jose | deejayjay@zoho.com | deejayjay on GitHub" />
    <meta
        name="description"
        content="Proof of Concept for Get Coordinates Functionality" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Sigmar+One&family=Ubuntu&display=swap"
        rel="stylesheet" />

    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/reboot.css" />
    <link rel="stylesheet" href="css/styles.css" />

    <title>Get Coordinates - Home</title>
</head>
<body>
    <form id="form1" runat="server">
        <header>
			<section class="header-container">
				<h1><a href="#">Get Coordinates</a></h1>
				<p>Your go to place to Get Your Coordinates 🗺🗺</p>
			</section>
		</header>
		<div class="flex-container">
			<main>
				<section class="content">
					<h2>
						Click the Button Below to See the Magic of JavaScript...
					</h2>
					<button type="submit" class="btn-get-coordinates">
						Get My Coordinates
					</button>

					<!-- Display the coordinates in the following two paragraphs -->
					<div class="coordinates-container">
						<p class="latitude hidden">
							<span class="latitude-label">Latitude</span>

							<!-- Placeholder for Latitude -->
							<span class="latitude-value"></span>
						</p>
						<p class="longitude hidden">
							<span class="longitude-label">Longitude</span>

							<!-- Placeholder for Longitude -->
							<span class="longitude-value"></span>
						</p>
					</div>
				</section>
				<!-- end of .content -->
			</main>
			<footer>
				<section class="footer-container">
					<!-- This header is added for semantic purposes and screen readers only. -->
					<h2 class="sr-only">Disclaimer</h2>
					<p>
						This page was built for testing purposes only.
						&copy; 2021
					</p>
				</section>
			</footer>
		</div>
    </form>
    <!-- Custom JavaScript -->
    <script src="js/main.js"></script>
</body>
</html>
