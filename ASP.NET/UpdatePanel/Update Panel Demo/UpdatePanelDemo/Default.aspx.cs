using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace UpdatePanelDemo
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnAdd_Click(object sender, EventArgs e)
        {
            ListItem newItem = new ListItem(hiddenNumber.Value, hiddenNumber.Value);
            ddlNumbers.Items.Add(newItem);
            ddlNumbers.SelectedIndex = ddlNumbers.Items.IndexOf(newItem);
        }
    }
}