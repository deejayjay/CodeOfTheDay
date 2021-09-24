<%@ Page Title="" Language="C#" MasterPageFile="~/Layout.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="UpdatePanelDemo.Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainContent" runat="server">
    <asp:ScriptManager ID="ScriptManagerDefault" runat="server" EnablePageMethods="true" />
    <asp:UpdatePanel runat="server" ID="MainContentPanel">
        <ContentTemplate>
            <div>
                <asp:HiddenField runat="server" ID="hiddenNumber" ClientIDMode="Static" />
                <asp:Button runat="server" ID="btnAdd" OnClick="btnAdd_Click" Text="Add Number" />
            </div>
            <div>
                <asp:DropDownList runat="server" ID="ddlNumbers">
                    <asp:ListItem Text="1" Value="1" Selected="True"></asp:ListItem>
                    <asp:ListItem Text="2" Value="2"></asp:ListItem>
                    <asp:ListItem Text="3" Value="3"></asp:ListItem>
                    <asp:ListItem Text="4" Value="4"></asp:ListItem>
                    <asp:ListItem Text="5" Value="5"></asp:ListItem>
                </asp:DropDownList>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="scripts" runat="server">
    <script>
        const randomNumber = Math.trunc((Math.random() * 10)) + 1;
        document.getElementById("hiddenNumber").value = randomNumber;
    </script>
</asp:Content>
