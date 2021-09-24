<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WaitTimes.aspx.cs" Inherits="GetCoordinatesApp.WaitTimes" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="Scripts/jquery-3.6.0.min.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Label runat="server" ID="labelMessage"></asp:Label>
        </div>
        <div>
            <asp:Repeater ID="rptERWaitTimes" runat="server">

            </asp:Repeater>
        </div>
    </form>
</body>
</html>
