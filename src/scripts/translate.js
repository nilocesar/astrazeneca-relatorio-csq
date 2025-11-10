events.on('ready',function(){

    var language = navigate.currentScreen.model.language;

    $('body').addClass( language );

    console.log("language: " + language);
    text_translate();
    img_translate();
    video_translate();
    link_translate();

    function text_translate(){
   
        if(bridge.text_translate){
            $("[data-language]").each(function(index) {
                var getParameterLanguage = $(this).attr('data-language');
                $(this).html( bridge.text_translate[0][language][getParameterLanguage] );
            });

            console.log('entrou no carregamento main :' + language);

        }else{
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: "../../data/texts.json",
                success: function success(arrayLangagues) {

                    bridge.text_translate = arrayLangagues;

                    $("[data-language]").each(function(index) {
                        var getParameterLanguage = $(this).attr('data-language');
                        $(this).html( arrayLangagues[0][language][getParameterLanguage] );
                    });
                }
            });

            console.log('entrou no carregamento :' + language);
        }
    }
    
    function img_translate(){
    
        if(bridge.img_translate){
            create( bridge.img_translate, "image-translate", "src" );
        }else{
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: "../../data/languages-images.json",
                success: function success(arrayLangagues) {

                    bridge.img_translate = arrayLangagues;
                    create( arrayLangagues, "image-translate", "src" );
                }
            });
        }
    
    }
    
    function video_translate(){
    
        if(bridge.videos_translate){
            create( bridge.videos_translate, "video-translate", "src" );
        }else{
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: "../../data/languages-videos.json",
                success: function success(arrayLangagues) {
                    bridge.videos_translate = arrayLangagues;
                    create( arrayLangagues, "video-translate", "src" );
                }
            });
        }
    
    }
    
    function link_translate(){
       
        if(bridge.links_translate){
            createLink( bridge.links_translate, "link-translate", "href" );
        }else{
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: "../../data/languages-links.json",
                success: function success(arrayLangagues) {
                    bridge.links_translate = arrayLangagues;
                    createLink( arrayLangagues, "link-translate", "href" );
                }
            });
        }
    }
    
    
    function create( arrayLangagues, _type, _sep ){
        $(`[${_type}]`).each(function(i, element) {
    
            var getParameterLanguage = $(element).attr(`${_type}`);
            
            if(language != "pt-br"){
               
                try{
    
                    var _getLanguage = arrayLangagues[0][language][getParameterLanguage];
                
                    $( element ).attr( _sep , _getLanguage[_sep]);
                    $( element ).attr( "alt" , _getLanguage.alt);
                    $( element ).attr( "aria-label" , _getLanguage.alt);
                    $( element ).addClass( _getLanguage.class);
    
                }catch(e){
    
                }
            }
    
        });
    }

    function createLink( arrayLangagues, _type, _sep ){
        $(`[${_type}]`).each(function(i, element) {
    
            var getParameterLanguage = $(element).attr(`${_type}`);
            
            try{
    
                var _getLanguage = arrayLangagues[0][language][getParameterLanguage];
            
                $( element ).attr( _sep , _getLanguage[_sep]);
                $( element ).attr( "alt" , _getLanguage.alt);
                $( element ).attr( "aria-label" , _getLanguage.alt);
                $( element ).addClass( _getLanguage.class);

            }catch(e){

            }
    
        });
    }
});