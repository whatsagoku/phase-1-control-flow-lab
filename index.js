describe('index.js', function() {
  describe('scuberGreetingForFeet()', function() {
    it("gives customers a free sample if the ride is less than or equal to 400 feet", function() {
      expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
    });

    describe('addFive()', function() {
      it('should add five to a number if it is greater than zero', function() {
        expect(addFive(10)).to.equal(15);
      });

      it('should return undefined for a number less than or equal to zero', function() {
        expect(addFive(-3)).to.equal(undefined);
      });
    });
  });
});

function scuberGreetingForFeet(feet) {
  console.log('Calculating fare for ' + feet + ' feet...');
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.';
  } else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

    function ternaryCheckCity(destination) {
      return (destination === 'NYC') ? 'Ok, sounds good.' : 'No go.';
    }



function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case "generous":
      response = "Thank you so much.";
      break;
      case "not as generous":
        response = "Thank you.";
        break;
        default:
          response =  "Bye.";
          break;
  }
  return response
}