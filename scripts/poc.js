/*
 * Proof-of-Concept jQuery Library
 */

$(function() {
    function matchesFilters(row) {
        var programFilter  = $("#programList").val();
        var categoryFilter = $("#categoryList").val();
        var statusFilter   = $("#statusList").val();

        var matchesProgramFilter  = false;
        var matchesCategoryFilter = false;
        var matchesStatusFilter   = false;

        if (programFilter == "all") {
            matchesProgramFilter = true;
        } else {
            matchesProgramFilter = (row.attr("program") == programFilter);
        }

        if (categoryFilter == "all") {
            matchesCategoryFilter = true;
        } else {
            matchesCategoryFilter = (row.attr("category") == categoryFilter);
        }

        if (statusFilter == "all") {
            matchesStatusFilter = true;
        } else {
            matchesStatusFilter = (row.attr("status") == statusFilter);
        }

        return matchesProgramFilter && matchesCategoryFilter && matchesStatusFilter;
    }

    function applyFilters() {
        var rows = $(".row");

        rows.hide();
        rows.each(function(idx, el) {
            var currRow = $(el);
            var child = currRow.children(":first");
            if (matchesFilters(child)) {
                currRow.show(300);
            }
        });
    }

    $("select").change(function () {
        applyFilters();
    });
});
