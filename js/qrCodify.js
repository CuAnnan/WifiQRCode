(
    ()=>{
        //WIFI:T:WPA;S:mynetwork;P:mypass;;
        let $ssid = $('#ssid'),
            $security = $('#security'),
            $password = $('#password'),
            $qrCodes = $('#qrCodes');
        
        $('#submitButton').click(
            ()=>{
                let string = `WIFI:T:${$security.val()};S:${$ssid.val()};P:${$password.val()};;`;
                QRCode.toDataURL(string).then(
                    (dataURL)=>{
                        $('<li/>').appendTo($qrCodes)
                            .append(
                                $(`<h2/>`).text($ssid.val())
                            )
                            .append(
                                $('<img/>').attr('src', dataURL).addClass('qrCode')
                            ).append(
                                $('<button/>').text('delete').addClass('deleteButton').click(
                                    function()
                                    {
                                        $(this).closest('li').remove();
                                    }
                                )
                            );
                    }
                );
            }
        );
    }
)();
