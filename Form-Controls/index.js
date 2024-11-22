$(document).ready(function () {
    // Event listener for input and textarea fields
    $('form').find('input, textarea').on('keyup blur focus', function (e) {
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
})