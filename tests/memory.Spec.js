const jsdom = require('jsdom')
const memoryGame = require('./memory')

describe("this", function() {
    beforeEach(function() {
      const dom = new jsdom.JSDOM('<html><body id="booya">initial</body></html>'); // set up your dom as it needs to be
      global.document = dom.window.document;
      global.window = dom.window;
      global.navigator = dom.window.navigator;
    });
  
    it("changes to class of the card", function() {
        // set up card dom

      var card = global.document.getElementById("the card's id")

      flipHandler(card) //maybe you can pass the element into your function like this
      card.click() // or maybe you can trigger the click event 
      expect(global.document.getElementById("the card's id").class).toBe("so cool");
    });
});

// You can also check that a class on a dom element gets updated

describe('updateClassesOnFlip', () => {
  beforeEach(function() {
    const dom = new jsdom.JSDOM('<html><body id="booya">initial</body></html>');  
  });

  it("changes to class of the card", function() {
        // set up card dom

      expect(global.document.getElementById("the card's id").class).toBe("initial");  
      flipHandler(myCard)      
      expect(global.document.getElementById("the card's id").class).toBe("awesome new class");
  });
})

describe("performFlip", function(){
    it("should update the state of the js object that represents the card", function(){
        // expect that the js data structure representing the card gets updated appropriately
    });

    it("shouldn't flip a card that is already flipped", () => {});

    it("if we get a match, both cards should stay flipped and frozen",function(){
        cards = [
            {id:0, hiddenImage: "foo.jpg", isFlipped: true, freeze:false},
            {id:1, hiddenImage: "foo.jpg", isFlipped: false,  freeze:false},
        ]
        performFlip(1)
     
    })

    it("changes to class of the card", function() {
      // set up card dom

    expect(global.document.getElementById("the card's id").class).toBe("initial");  
    flipHandler(myCard)      
    expect(global.document.getElementById("the card's id").class).toBe("awesome new class");
    });

});
// f we don't get a match, both cards should  be unflipped and not frozen")

//     it("if there are no cards left to flip(they are all frozen) then game state updated to winning")
// })
// test these separately

// describe("shouldFlipIfClicked", function(){etc})
// describe("updateDom", function(){etc})