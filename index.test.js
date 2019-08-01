const { trappingWater, TrapCal } = require("./trapFour");

// describe('Test trapping water',  () => {
//     xit('should return the right amounts',  () => {
//         expect(trappingWater([])).toBe(0)
//     });
//  it('should return the right amounts',  () => {
//         expect(trappingWater([0,1,0,1])).toBe(1)
//     });
//  xit('should return the right amounts',  () => {
//         expect(trappingWater([0,1,0,1,2,0,2])).toBe(3)
//     });
// });

describe("TrapCal", () => {
  let trapCal;

  const init = () => {
    trapCal = new TrapCal([0, 1, 0, 1]);
  };

  beforeEach(init);

  describe("#trap", () => {
    describe("right", () => {
      it("move index up", () => {
        trapCal.trap("right");
        expect(trapCal.indexFor("right")).toBe(4);
      });
    });

    describe("left", () => {
      beforeAll(() => {
        init();
      });

      it("#1", () => {
        trapCal.trap("left");
        expect(trapCal.indexFor("left")).toBe(1);
        expect(trapCal.heightFor("left")).toBe(0);
      });

      it("#2", () => {
        trapCal.trap("left");
        expect(trapCal.indexFor("left")).toBe(2);
      });
      it("#3", () => {
        trapCal.trap("left");
        expect(trapCal.heightFor("left")).toBe(0);
      });
    });

    describe("iterations", () => {
      describe("#1", () => {
        beforeAll(() => {
          init();
          trapCal.iterate();
        });

        it("should increase height", () => {
          expect(trapCal.heightFor("left")).toBe(0);
        });
      });
      describe("#2", () => {
        beforeAll(() => {
          init();
          trapCal
            .iterate()
            .iterate()
            .iterate();
        });

        it("should increase height", () => {
          expect(trapCal.heightFor("left")).toBe(1);
        });
      });
    });
  });
});
