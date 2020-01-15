$(document).ready(function() {
    // $.get("/api/user_data").then(function(user) {
    //     $(".user-name").text(user.email);
    // });
​
    // $('.dropdown-toggle').dropdown()
    //     //we need to display the persons current expenses and the news in a card to the right
    //     // AJAX call for API
    // var queryURL = "";
​
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function(response) {
​
    // })
​
    // // Budget Main section
    // var categoryCol = $(".category-col");
    // var amountCol = $("amount-col");
    // var monthCol = $("month-col");
​
​
​
​
​
                jQuery(function($) {
                $('.table').footable();
            });
            // Editor for Foo Table
            var $modal = $('#editor-modal'),
                $editor = $('#editor'),
                $editorTitle = $('#editor-title'),
                ft = FooTable.init('#editing-example', {
                    editing: {
                        enabled: true,
                        addRow: function() {
                            $modal.removeData('row');
                            $editor[0].reset();
                            $editorTitle.text('Add a new row');
                            $modal.modal('show');
                        },
                        editRow: function(row) {
                            var values = row.val();
                            $editor.find('#category').val(values.category);
                            $editor.find('#amount').val(values.amount);
                            $editor.find('#totalSpent').val(values.totalSpent);
​
                            $modal.data('row', row);
                            $editorTitle.text('Edit row #' + values.id);
                            $modal.modal('show');
                        },
                        deleteRow: function(row) {
                            if (confirm('Are you sure you want to delete the row?')) {
                                row.delete();
                            }
                        }
                    }
                }),
                uid = 10;
​
            $editor.on('submit', function(e) {
                if (this.checkValidity && !this.checkValidity()) return;
                e.preventDefault();
                var row = $modal.data('row'),
                    values = {
                        category: $editor.find('#category').val(),
                        amount: $editor.find('#amount').val(),
                        totalSpent: $editor.find('#totalSpent').val(),
                    };
​
                if (row instanceof FooTable.Row) {
                    row.val(values);
                } else {
                    values.id = uid++;
                    ft.rows.add(values);
                }
                $modal.modal('hide');
            });

            
            var $articleDescription = $(`<h3> Description: ${description}</h3>`);
            $articleDescription.addClass("list-group");
            $(".financeNews-col").append($articleDescription);
​
            var $articleURL = $(`<h3> ${url}</a>`);
            $articleURL.addClass("list-group");
            $(".financeNews-col").append($articleURL);
​
        })



