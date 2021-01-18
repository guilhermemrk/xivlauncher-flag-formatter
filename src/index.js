$().ready(function() {

    $('.result-area').hide();
    $('.macro-area').hide();

    $('#nav-opts a').on('click', function(){
        $('.tab-content').hide();
        $('#nav-opts a').removeClass('active');
        $(`.${$(this).data('tab')}`).show();
        $(this).addClass('active');
    });

    $('#format-flags').on('click', function(){
        let $flags      = $('#flags');
        let $results    = $('#results');
        let flagsVal    = $flags.val().split('\n');
        let formatted   = new Array();
        var mobNames = [
            "Nuckelavee",
            "Nariphon",
            "Huracan",
            "Li'l Murderer",
            "Sugaar",
            "Maliktender",
            "The Mudman",
            "O Poorest Pauldia",
            "Supay",
            "Grassman",
            "Baal",
            "Rusalka"
        ];

        flagsVal.forEach(el => {
            let value = el.replace('\ue0bb', '');

            value = value.match(/(.+?\( )(.+?\))/i);
            console.log({value})
            var mapName = value[1].replace(' ( ', '');
            value[2]    = value[2].replace(' )', '');
            let coords  = value[2].replace(/ +(?= )/g,'');

            for (let i=0; i < mobNames.length; i++){
                mapName = mapName.replace(mobNames[i], '')
            }
            
            formatted.push(`/coord ${coords} : ${mapName}`.replace(/ +(?= )/g,''))
        });

        // Formatted
        $results.val(formatted.join('\n'))
        $('#nav-result').trigger('click');
    })
    
});