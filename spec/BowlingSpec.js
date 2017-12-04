describe("Bowling", function() {
  var bowling;
  var times;


  // describe("A new instance of bowling", function() {
  //   it ("has a total of zero", function() {
  //     expect(bowling.total()).toEqual(0);
  //   })
  //   it ("has an empty array of frames", function() {
  //     expect(bowling.frames()).toEqual([]);
  //   })
  // })

  describe("Bowling calculates scores, taking one bowl at a time", function() {
    beforeEach(function() {
      bowling = new Bowling();
    })

    it ("1 => 1", function() {
      bowling.bowl(1);
      expect(bowling.total()).toEqual(1);
    })

    it ("1,4 => 5", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      expect(bowling.total()).toEqual(5);
    })

    it ("1,4,4 => 9", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      expect(bowling.total()).toEqual(9);
    })

    it ("1,4,4,5 => 14", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      expect(bowling.total()).toEqual(14);
    })

    it ("1,4,4,5,6 => 20", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      expect(bowling.total()).toEqual(20);
    })

    it ("1,4,4,5,6,4 => 24", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      bowling.bowl(4);
      expect(bowling.total()).toEqual(24);
    })

    it ("1,4,4,5,6,4,5 => 34", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(5);
      expect(bowling.total()).toEqual(34);
    })

    it ("1,4,4,5,6,4,5,5 => 39", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(5);
      expect(bowling.total()).toEqual(39);
    })

    it ("1,4,4,5,6,4,5,5,10 => 59", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(5);
      bowling.bowl(10);
      expect(bowling.total()).toEqual(59);
    })

    it ("1,4,4,5,6,4,5,5,strike,0 => 59", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(5);
      bowling.bowl(10);
      bowling.bowl(0);
      expect(bowling.total()).toEqual(59);
    })

    it ("1,4,4,5,6,4,5,5,strike,0,1 => 61", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(5);
      bowling.bowl(10);
      bowling.bowl(0);
      bowling.bowl(1);
      expect(bowling.total()).toEqual(61);
    })

    it ("1,4,4,5,6,4,5,5,strike,0,1,7 => 68", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(5);
      bowling.bowl(10);
      bowling.bowl(0);
      bowling.bowl(1);
      bowling.bowl(7);
      expect(bowling.total()).toEqual(68);
    })

    it ("1,4,4,5,6,4,5,5,strike,0,1,7,3 => 71", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(5);
      bowling.bowl(10);
      bowling.bowl(0);
      bowling.bowl(1);
      bowling.bowl(7);
      bowling.bowl(3);
      expect(bowling.total()).toEqual(71);
    })

    it ("1,4,4,5,6,4,5,5,strike,0,1,7,3,6 => 83", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(5);
      bowling.bowl(10);
      bowling.bowl(0);
      bowling.bowl(1);
      bowling.bowl(7);
      bowling.bowl(3);
      bowling.bowl(6);
      expect(bowling.total()).toEqual(83);
    })

    it ("1,4,4,5,6,4,5,5,strike,0,1,7,3,6 => 83", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(5);
      bowling.bowl(10);
      bowling.bowl(0);
      bowling.bowl(1);
      bowling.bowl(7);
      bowling.bowl(3);
      bowling.bowl(6);
      expect(bowling.total()).toEqual(83);
    })

    it ("1,4,4,5,6,4,5,5,strike,0,1,7,3,6,4 => 87", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(5);
      bowling.bowl(10);
      bowling.bowl(0);
      bowling.bowl(1);
      bowling.bowl(7);
      bowling.bowl(3);
      bowling.bowl(6);
      bowling.bowl(4);
      expect(bowling.total()).toEqual(87);
    })

    it ("1,4,4,5,6,4,5,5,strike,0,1,7,3,6,4,strike => 107", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(5);
      bowling.bowl(10);
      bowling.bowl(0);
      bowling.bowl(1);
      bowling.bowl(7);
      bowling.bowl(3);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(10);
      expect(bowling.total()).toEqual(107);
    })

    it ("1,4,4,5,6,4,5,5,strike,0,1,7,3,6,4,strike,2 => 111", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(5);
      bowling.bowl(10);
      bowling.bowl(0);
      bowling.bowl(1);
      bowling.bowl(7);
      bowling.bowl(3);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(10);
      bowling.bowl(2);
      expect(bowling.total()).toEqual(111);
    })

    it ("1,4,4,5,6,4,5,5,strike,0,1,7,3,6,4,strike,2,8 => 127", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(5);
      bowling.bowl(10);
      bowling.bowl(0);
      bowling.bowl(1);
      bowling.bowl(7);
      bowling.bowl(3);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(10);
      bowling.bowl(2);
      bowling.bowl(8);
      expect(bowling.total()).toEqual(127);
    })

    it ("1,4,4,5,6,4,5,5,strike,0,1,7,3,6,4,strike,2,8 => 133", function() {
      bowling.bowl(1);
      bowling.bowl(4);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(5);
      bowling.bowl(5);
      bowling.bowl(10);
      bowling.bowl(0);
      bowling.bowl(1);
      bowling.bowl(7);
      bowling.bowl(3);
      bowling.bowl(6);
      bowling.bowl(4);
      bowling.bowl(10);
      bowling.bowl(2);
      bowling.bowl(8);
      bowling.bowl(6);
      expect(bowling.total()).toEqual(133);
    })

    //
    // xit("[[1,4],[4,5],[6,4],[5,5],[10,0],[0,1],[7,3],[6,4],[10,0],[2,8,6]] => 133", function() {
    //   bowling.bowl([1,4]);
    //   bowling.bowl([4,5]);
    //   bowling.bowl([6,4]);
    //   bowling.bowl([5,5]);
    //   bowling.bowl([10,0]);
    //   bowling.bowl([0,1]);
    //   bowling.bowl([7,3]);
    //   bowling.bowl([6,4]);
    //   bowling.bowl([10,0]);
    //   bowling.bowl([2,8,6]);
    //   expect(bowling.total()).toEqual(133);
    // })

    // it("[[0,1],[2,3],[4,5],[6,4],[3,6],[5,4],[5,5],[3,5],[2,7],[3,7,6]] => 92", function() {
    //   bowling.bowl([0,1]);
    //   bowling.bowl([2,3]);
    //   bowling.bowl([4,5]);
    //   bowling.bowl([6,4]);
    //   bowling.bowl([3,6]);
    //   bowling.bowl([5,4]);
    //   bowling.bowl([5,5]);
    //   bowling.bowl([3,5]);
    //   bowling.bowl([2,7]);
    //   bowling.bowl([3,7,6]);
    //   expect(bowling.total()).toEqual(92);
    // })
    //
    // it("[[9,1],[2,4],[6,4],[6,2],[6,4],[10,0],[7,3],[0,1],[10,0],[9,1,9]] => 132", function() {
    //   bowling.bowl([9,1]);
    //   bowling.bowl([2,4]);
    //   bowling.bowl([6,4]);
    //   bowling.bowl([6,2]);
    //   bowling.bowl([6,4]);
    //   bowling.bowl([10,0]);
    //   bowling.bowl([7,3]);
    //   bowling.bowl([0,1]);
    //   bowling.bowl([10,0]);
    //   bowling.bowl([9,1,9]);
    //   expect(bowling.total()).toEqual(132);
    // })
    //
    // it("[[5,5],[4,6],[6,4],[4,6],[7,3],[2,8],[8,2],[2,8],[7,3],[2,8,7]] => 149", function() {
    //   bowling.bowl([5,5]);
    //   bowling.bowl([4,6]);
    //   bowling.bowl([6,4]);
    //   bowling.bowl([4,6]);
    //   bowling.bowl([7,3]);
    //   bowling.bowl([2,8]);
    //   bowling.bowl([8,2]);
    //   bowling.bowl([2,8]);
    //   bowling.bowl([7,3]);
    //   bowling.bowl([2,8,7]);
    //   expect(bowling.total()).toEqual(149);
    // })
    //
    // it("[[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[2,7] => 260", function() {
    //   times = 9;
    //   for (var i=0; i<times; i++) {
    //     bowling.bowl([10,0]);
    //   }
    //   bowling.bowl([2,7]);
    //   expect(bowling.total()).toEqual(260);
    // })
    //
    it("all strikes => 300", function() {
      times = 12;
      for (var i=0; i<times; i++) {
        bowling.bowl(10);
      }
      expect(bowling.total()).toEqual(300);
    })

  })
});
