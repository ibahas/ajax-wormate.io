

 jQuery.ajax({
    type: "POST",
    dataType: "json",
    url: ajaxurl,
    data: {
        "action": "wormworld_action_free",
        "IDWORMATE": "fb_656561815612760",
        "game": "mg"
    },
    success: function (msg) {
        jQuery.unblockUI();
        if (msg) {
            is_idwormate = msg.update_status;
            alert(msg.update_info);
            jQuery('#btnAtivacao').html('Save');
        } else {
            alert('ID INVALID! OH NOOO!');
        }
    },
    error: function (e) {
        jQuery.unblockUI();
        alert("Error connection " + e);
        is_idwormate = false;
    }
});