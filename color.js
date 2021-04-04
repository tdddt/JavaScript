var Body={
  setColor: function (color){
    /*body font color 바꾸기*/
    document.querySelector('body').style.color = color;
  },
    /*body backgound color 바꾸기*/
  setBackgroundColor: function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

var Link={
  /*link font color바꾸기*/
  setColor: function(color){
    var alist = document.querySelectorAll('a');
    var i=0;
    while(i < alist.length){
        console.log(alist[i]);
        alist[i].style.color = color;
        i=i+1;
    }
  }
}

function nightDayHandler(self){ //this의 값을 self로 해야 함.
  var target = document.querySelector('body');
  /*클릭 시 night화면*/
  if(self.value==='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day';

    Link.setColor('pink');

  } else { /*클릭 시 day화면*/
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='night';

    Link.setColor('blue');
  }
}
