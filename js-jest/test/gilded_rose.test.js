const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("test item Conjured when sellIn > 0, should return quality 28, sellIn 29 and name Conjured", function() {
    const gildedRose = new Shop([new Item("Conjured", 30, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Conjured");
    expect(items[0].sellIn).toBe(29);
    expect(items[0].quality).toBe(28);
  });
  it("test item Conjured when sellIn < 0, should return quality 28, sellIn 29 and name Conjured", function() {
    const gildedRose = new Shop([new Item("Conjured", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Conjured");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(16);
  });
});
