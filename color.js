var Link={
  /*link font color바꾸기*/
  setColor: function(color){
  //   var alist = document.querySelectorAll('a');
  //   var i=0;
  //   while(i < alist.length){
  //       console.log(alist[i]);
  //       alist[i].style.color = color;
  //       i=i+1;
  //   }
  //웹페이지에 있는 모든 a태그를 jQuery로 제어하겠다는 의미
    $('a').css('color',color);
  }
}

var Body={
  /*body font color 바꾸기*/
  setColor: function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },

  /*body backgound color 바꾸기*/
  setBackgroundColor: function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}

function nightDayHandler(self){ //this의 값을 self로 해야 함.
  var target = document.querySelector('body');
  /*클릭 시 night화면으로*/
  if(self.value==='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day';

    Link.setColor('pink');

  } else { /*클릭 시 day화면으로*/
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='night';

    Link.setColor('blue');
  }
}
