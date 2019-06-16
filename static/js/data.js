$(document).ready(function(){
  var today = new Date();
  var early = new Date(2019, 3, 15, 12, 0, 0);
  var late = new Date(2019, 4, 15, 12, 0, 0);

  if(today < early) {
    $("#conf #others > li").eq(1).removeClass("disabled");
    $("#conf #others > li").eq(1).append(`<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
          <input type="hidden" name="cmd" value="_s-xclick">
          <input type="hidden" name="hosted_button_id" value="PKNBFN6ERMX8L">
          <input type="image" src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/jp/developer/203x80_a.png" border="0" name="submit" alt="PayPal - オンラインでより安全・簡単にお支払い">
          <img alt="" border="0" src="https://www.paypalobjects.com/ja_JP/i/scr/pixel.gif" width="1" height="1">
        </form>`);
  } else if(today > late) {
    $("#conf #others > li").eq(3).removeClass("disabled");
    $("#conf #others > li").eq(3).append(`<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="LBZPY7U8CHA52">
    <input type="image" src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/jp/developer/203x80_a.png" border="0" name="submit" alt="PayPal - オンラインでより安全・簡単にお支払い">
    <img alt="" border="0" src="https://www.paypalobjects.com/ja_JP/i/scr/pixel.gif" width="1" height="1">
    </form>`)
  } else {
    $("#conf #others > li").eq(2).removeClass("disabled");
    $("#conf #others > li").eq(2).append(`<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="DUEAGX6A5WKN8">
    <input type="image" src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/jp/developer/203x80_a.png" border="0" name="submit" alt="PayPal - オンラインでより安全・簡単にお支払い">
    <img alt="" border="0" src="https://www.paypalobjects.com/ja_JP/i/scr/pixel.gif" width="1" height="1">
    </form>`);
  }

  if(today < early) {
    $("#camp #others > li").eq(1).removeClass("disabled");
    $("#camp #others > li").eq(1).append(`<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="7G4XK3KDR82SL">
    <input type="image" src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/jp/developer/203x80_a.png" border="0" name="submit" alt="PayPal - オンラインでより安全・簡単にお支払い">
    <img alt="" border="0" src="https://www.paypalobjects.com/ja_JP/i/scr/pixel.gif" width="1" height="1">
    </form>`);
  } else if(today > late) {
    $("#camp #others > li").eq(3).removeClass("disabled");
    $("#camp #others > li").eq(3).append(`<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="5QD7FR5RD4PUA">
    <input type="image" src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/jp/developer/203x80_a.png" border="0" name="submit" alt="PayPal - オンラインでより安全・簡単にお支払い">
    <img alt="" border="0" src="https://www.paypalobjects.com/ja_JP/i/scr/pixel.gif" width="1" height="1">
    </form>`)
  } else {
    $("#camp #others > li").eq(2).removeClass("disabled");
    $("#camp #others > li").eq(2).append(`<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="DWRRY3KBGLR4N">
    <input type="image" src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/jp/developer/203x80_a.png" border="0" name="submit" alt="PayPal - オンラインでより安全・簡単にお支払い">
    <img alt="" border="0" src="https://www.paypalobjects.com/ja_JP/i/scr/pixel.gif" width="1" height="1">
    </form>`);
  }
});
