$(document).ready(
    

function () {



        /****
         * ADD EVENT LISTENERS RIGHT HERE
         *
         * Use jQuery's .change to listen for text changes in
         * the two quantity fields.
         *
         * Both fields can use the same updateTotal function.
         ****/

        $('input').change(function (){
            updateTotal();
        });

        function updateTotal() {
            // STEP ONE: Books
            // Get the value of the "qtyBook" input and parse to a number
            var qtyBookP = parseInt($('#qtyBook').text());
            // Get the text of the "priceBook" span and parse to a number
             var priceBook = parseFloat($('span:first').val());  // do i need this?
            // Calculate the book total
            var bookTotal = parseFloat(qtyBookP * priceBook);
            // Update the text of the "totalBook" span with the book total
            $("#totalBook").text (bookTotal.toFixed(2));

            // STEP TWO: Donations
            // Get the value of the "qtyDonation" input and parse to a number
            var qtyDonation = parseInt($('#qtyDonation').val());
            // Get the text of the "priceDonation" span and parse to a number  // i hardcoded
            var priceDonation = parseInt($('#priceDonation').text());
            // Calculate the donation total
           var donation = parseFloat(qtyDonation * priceDonation);
            // Update the text of the "totalDonation" span with the book total
           $("#totalBook").text (donation.toFixed(2));

            // STEP THREE: Grand Total
            // Add the book and donation totals to get the grand total
            // Update the text of the "grandTotal" span with the grand total
        }
    }
);
