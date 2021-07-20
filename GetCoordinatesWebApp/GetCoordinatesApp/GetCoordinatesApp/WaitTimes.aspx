<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WaitTimes.aspx.cs" Inherits="GetCoordinatesApp.WaitTimes" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
        name="author"
        content="Deepak Joy Jose | deejayjay@zoho.com | deejayjay on GitHub" />
    <meta name="description" content="AHS Facilities ER Wait Times" />

    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/reboot.css" />
    <link rel="stylesheet" href="css/styles.css" />

    <title>Wait Times</title>
</head>
<body class="body-waittimes">
    <form id="form1" runat="server">
        <header>
            <section class="header-container">
                <h1>Wait Times</h1>
            </section>
        </header>
        <main>
            <section class="waittimes-maincontent">
                <h2 class="sr-only">Location</h2>
                <div>
                    <asp:Label runat="server" ID="labelMessage"></asp:Label>
                </div>
                <div>
                    <asp:DropDownList runat="server" ID="ddlUserLocation" AutoPostBack="true" OnSelectedIndexChanged="ddlUserLocation_SelectedIndexChanged">
                        <asp:ListItem Text="Calgary" Value="Calgary" Selected="True" />
                        <asp:ListItem Text="Edmonton" Value="Edmonton" />
                        <asp:ListItem Text="RedDeer" Value="RedDeer" />
                        <asp:ListItem Text="Lethbridge" Value="Lethbridge" />
                        <asp:ListItem Text="MedicineHat" Value="MedicineHat" />
                    </asp:DropDownList>
                </div>
                <div class="use-my-location">
                    <a href="#">Use My Current Location</a>
                </div>
                <div class="panel-refresh-time">
                    <div class="refresh-time">
                        <p>As of 9:43 AM</p>
                        <p>updated every 2 minutes**</p>
                    </div>
                    <div class="sort-by">
                        <asp:DropDownList runat="server" ID="ddlSortBy">
                            <asp:ListItem Text="Distance" Value="Distance" Selected="True" />
                            <asp:ListItem Text="Wait Times" Value="Wait Times" />
                        </asp:DropDownList>
                    </div>
                </div>
                <div class="facility-types">
                    <div class="facility-type facility-emergency">
                        <input
                            type="checkbox"
                            name="chkEmergency"
                            id="chkEmergency"
                            value="Emergency"
                            checked />
                        <label for="chkEmergency">Emergency</label>
                    </div>
                    <div class="facility-type facility-urgent">
                        <input
                            type="checkbox"
                            name="chkUrgent"
                            id="chkUrgent"
                            checked />
                        <label for="chkUrgent">Urgent Care</label>
                    </div>
                </div>
                <div class="card-container-flex">
                    <div class="card-container emergency-cards">
                        <!-- Container for Emergency Cards -->
                        <asp:Repeater ID="rptWaitTimesEmergency" runat="server">
                            <ItemTemplate>
                                <!-- Template for an Emergency Card -->
                                <div class="card card-emergency">
                                    <div class="facility-card-header">
                                        <div><%#Eval("WaitTime") %></div>
                                        <div>0.0km</div>
                                    </div>
                                    <div class="facility-card-contents">
                                        <div class="facility-details">
                                            <div class="facility-description">
                                                <h2><a href="<%#Eval("URL") %>"><%#Eval("Name") %></a></h2>
                                                <p>
                                                    <%#Eval("Note") %>
                                                </p>
                                            </div>
                                            <div class="facility-buttons">
                                                <img src="img/right-arrow.png" alt="View Details" />
                                                <div
                                                    class="facility-category cat-emergency">
                                                    <%#Eval("Category") %>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ItemTemplate>
                        </asp:Repeater>
                    </div>
                    <div class="card-container urgentcare-cards">
                        <!-- Container for Urgent Care Cards -->
                        <asp:Repeater ID="rptWaitTimesUrgent" runat="server">
                            <ItemTemplate>
                                <!-- Template for an Urgent Care Card -->
                                <div class="card card-urgent">
                                    <div class="facility-card-header">
                                        <div><%#Eval("WaitTime") %></div>
                                        <div>0.0km</div>
                                    </div>
                                    <div class="facility-card-contents">
                                        <div class="facility-details">
                                            <div class="facility-description">
                                                <h2><a href="<%#Eval("URL") %>"><%#Eval("Name") %></a></h2>
                                                <p>
                                                    <%#Eval("Note") %>
                                                </p>
                                            </div>
                                            <div class="facility-buttons">
                                                <img src="img/right-arrow.png" alt="View Details" />
                                                <div class="facility-category cat-urgent">
                                                    <%#Eval("Category") %>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ItemTemplate>
                        </asp:Repeater>
                    </div>
                </div>

            </section>
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
    </form>
    <script>
        // Get reference to the appropriate HTML components
        const emergencyCards = document.querySelector(".emergency-cards");
        const urgentcareCards = document.querySelector(".urgentcare-cards");
        const chkEmergency = document.getElementById("chkEmergency");
        const chkUrgent = document.getElementById("chkUrgent");

        // If the chkEmergency checkbox is checked, show the emergency cards.
        // If it is unchecked, hide the emergency cards by adding the.hidden class
        chkEmergency.addEventListener("change", () => {
            emergencyCards.classList.toggle("hidden");
        });

        // If the chkUrgent checkbox is checked, show the urgent cards.
        // If it is unchecked, hide the urgent cards by adding the.hidden class
        chkUrgent.addEventListener("change", () => {
            urgentcareCards.classList.toggle("hidden");
        });
    </script>
</body>
</html>
