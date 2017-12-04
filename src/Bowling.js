function Bowling() {
  this._total = 0;
  this._frames = [];
  this._spareBonus = false;
  this._strikeBonus = 0;
  this._currentFrame = [];

};

var frame = [];
var previousFrame;
var previousPreviousFrame;
var frameTotal;
var previousTotal;

Bowling.prototype.bowl = function (bowl) {
  this._finalFrameCheck(bowl);
  this._strikeBonusCheck(bowl);
  if (this._frames.length < 10) {
    bowl === 10 ? this._currentFrame.push(bowl, 0) : this._currentFrame.push(bowl);
  }
  this._spareBonusCheck(bowl);
  if (this._currentFrame.length == 2) {
    console.log(this._currentFrame);
    this._frames.push(this._currentFrame);
    console.log(this._frames.length);
    if (this._frames.length < 10 && this._frameTotal() == 10) {
      if (this._currentFrame[1] !== 0) {
        this._spareBonus = true;
      } else {
        this._strikeBonus = 2;
      }
    }
    this._currentFrame = [];
  }
  this._total += bowl;
};

Bowling.prototype.total = function () {
  return this._total;
};

Bowling.prototype._frameTotal = function () {
  return this._currentFrame.reduce(function(a, b) {return a + b;}, 0);
};

Bowling.prototype._finalFrameCheck = function (bowl) {
  if (this._frames.length === 9) {
    console.log('i am here');
  }
};

Bowling.prototype._spareBonusCheck = function (bowl) {
  if (this._spareBonus) {
    this._total += bowl;
    this._spareBonus = false;
  }
};

Bowling.prototype._strikeBonusCheck = function (bowl) {
  if (this._strikeBonus) {
    this._total += bowl;
    this._strikeBonus--;
  }
};

Bowling.prototype.frames = function () {
  return this._frames;
};

Bowling.prototype.reset = function() {
  this._total = 0;
  this._frames = [];
}

// Bowling.prototype.total = function () {
//   return this._total;
// };
//
// Bowling.prototype.framesTotal = function(n) {
//   var framesTotal = 0;
//   for (var i=0; i<n; i++) {
//     framesTotal += (this._frames[i].reduce(function(a, b) {return a + b;}, 0));
//   }
//   lastFrame = this._frames.slice(-1)[0];
//   lastFrameTotal = this._frames.slice(-1)[0].reduce(function(a, b) {return a + b;}, 0);
//   return this._total - lastFrameTotal;
// }
//
// Bowling.prototype.spareBonus = function () {
//   return this._spareBonus;
// };
//
// Bowling.prototype.strikeBonus = function () {
//   return this._strikeBonus;
// };
//
// Bowling.prototype.resetBonus = function () {
//   this._strikeBonus = null;
//   this._spareBonus = null;
// };
//
//
// Bowling.prototype.bowl = function(roll) {
//   previousFrame = this._frames.slice(-1)[0];
//   frameTotal = roll.reduce(function(a, b) {return a + b;}, 0);
//   if (this._frames.length === 9) {
//     frameSliceTotal = roll.slice(0,2).reduce(function(a, b) { return a + b; }, 0);
//     this._calculate(roll, frameSliceTotal);
//   } else if (previousFrame) {
//     this._calculate(roll, frameTotal);
//   }
//   if (this._frames.length >= 2) {
//     this._checkTwoFramesBack(roll);
//   }
//   this._frames.push(roll);
//   this._total += frameTotal;
//   if (previousFrame) {
//     previousTotal = previousFrame.reduce(function(a, b) { return a + b; }, 0);
//     if (previousTotal === 10) {
//       if (previousFrame[1] !== 0) {
//         this._spareBonus = roll[0];
//       } else {
//         this._strikeBonus = roll[0] + roll[1];
//       }
//     }
//   }
// };
//
// Bowling.prototype._checkTwoFramesBack = function(roll) {
//   previousPreviousFrame = this._frames.slice(-2)[0];
//   if (previousPreviousFrame[0] === 10 && previousFrame[1] == 0) {
//     this._total += roll[0];
//   }
// }
//
// Bowling.prototype._calculate = function(roll, frameTotal) {
//   previousTotal = previousFrame.reduce(function(a, b) { return a + b; }, 0);
//   if (previousTotal == 10) {
//     previousFrame[0] == 10 ? this._total += frameTotal : this._total += roll[0];
//   }
// }
