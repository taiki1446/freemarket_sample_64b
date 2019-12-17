$(function() {
  let images = [];
  let form =[];
  function buildHTML(imgSrc){
    let html =  `<div class="preview-box">
                   <div class="preview-box__img-box">
                    <img src="${imgSrc}" "height="64" width="114">
                  </div>
                  <div class="preview-box__select">
                     <div class="preview-box__select--edit">
                    <p>編集</p>
                  </div>
                  <div class="preview-box__select--delete">
                    <p>削除</p>
                  </div>
                </div>
              </div>`
    $('.preview').prepend(html);
  };

  $('.input-image-box').change(function(e){
    let files = e.target.files;
    for (var i = 0, f; f = files[i]; i++){
      let reader = new FileReader();
      reader.readAsDataURL(f);
      reader.onload = function(){
        let imgSrc = reader.result;
        buildHTML(imgSrc);
        images.push(imgSrc);

        $('.input-image-box').val(form);

    }
    }
  })
  $('.input-image-box').on('drop', function(e) {
    
    e.preventDefault();
    e.stopPropagation();
    let dropImages = e.originalEvent.dataTransfer.files;
      for(let i = 0; i < dropImages.length; i++ ) {
        let imgSrc = URL.createObjectURL(dropImages[i]);
        buildHTML(imgSrc);
        images.push(dropImages[i].name);
      }
  });
  $(document).on('click', '.preview-box__select--delete p', function(){
    $(this).closest('.preview-box').remove();

  });

  //手数料の計算
  $('.price_field').change(function(){
    //フォームに入れた数字
    var price = $(this).val()
    
    
    //販売利益
    var profit = Math.round(price * 0.9)//(price)-parseInt(charge)
    //手数料
    var charge = (price - profit)//parseInt(price)*0.10;
    $('.charge__result').html(charge)
   
    $('.profit__result').html(profit)
  });

  //画像バリデーション
  $('#new_item').submit(function() {
    
    
    if (image.files.length == 0) {
      $('.image-error').html("画像がありません")
      return false; 
    } else {
      
      return true; 
    }
  })
  

});
