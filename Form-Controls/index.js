$(document).ready(function () {
    // Event listener for input and textarea fields
    $('.form').find('input, textarea').on('keyup blur focus', function (e) {
        var $this = $(this),
            label = $this.prev('label');
  
        switch (e.type) {
            case 'keyup':
                if ($this.val() === '') {
                    label.removeClass('active highlight');
                } else {
                    label.addClass('active highlight');
                }
                break;
            
            case 'blur':
                if ($this.val() === '') {
                    label.removeClass('active highlight');
                } else {
                    label.removeClass('highlight');
                }
                break;
            
            case 'focus':
                if ($this.val() === '') {
                    label.removeClass('highlight');
                } else if ($this.val() !== '') {
                    label.addClass('highlight');
                }
                break;
        }
    });

    // Tab functionality
    $('.tab a').on('click', function (e) {
        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        
        var target = $(this).attr('href');

        // Hide all tab-content divs except the target
        $('.tab-content > div').not(target).hide();
        
        // Fade in the target content
        $(target).fadeIn(600);
    });
});
