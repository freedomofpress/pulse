$(document).ready(function () {

  $.get("/static/data/tables/accessibility/agencies.json", function(data) {
    renderTable(data.data);
  });

  var renderTable = function(data) {
    $("table").DataTable({
      responsive: true,
      initComplete: Utils.searchLinks,

      data: data,

      columns: [
        {data: "Agency"},
        {data: "Errors"},
        {data: "Color Contrast Errors"},
        {data: "HTML/Attribute Errors"},
        {data: "Form Errors"},
        {data: "Alt Tag Errors"},
        {data: "Other Errors"}
      ],

      // order by number of domains
      order: [[1, "desc"]],

      columnDefs: [
        {
          targets: 0,
          cellType: "td",
          createdCell: function (td) {
            td.scope = "row";
          }
        }
      ],

      "oLanguage": {
        "oPaginate": {
          "sPrevious": "<<",
          "sNext": ">>"
        }
      },

      dom: 'Lftrip'

    });
  };
});
